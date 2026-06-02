from fastapi import FastAPI, UploadFile, File, Depends, HTTPException, status, Form, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.staticfiles import StaticFiles
from jose import JWTError, jwt
from passlib.context import CryptContext
from datetime import datetime, timedelta, timezone
from typing import Optional, List
from pathlib import Path
from urllib.parse import quote
import uuid, os, shutil, mimetypes, json
import boto3
import firebase_admin
from firebase_admin import auth as firebase_auth, credentials as firebase_credentials

# ── Config ────────────────────────────────────────────────────────────────────
SECRET_KEY   = os.environ.get("CLOUDVAULT_SECRET_KEY", "dev-only-secret-change-in-prod")
ALGORITHM    = "HS256"
TOKEN_EXPIRE = 60 * 24  # minutes

UPLOAD_ROOT  = Path("uploads")
UPLOAD_ROOT.mkdir(exist_ok=True)
MAX_FILE_SIZE = 50 * 1024 * 1024  # 50 MB
STORAGE_LIMIT = int(os.environ.get("CLOUDVAULT_STORAGE_LIMIT", str(1024 * 1024 * 1024)))  # 1 GB
USE_FIREBASE_AUTH = os.environ.get("CLOUDVAULT_USE_FIREBASE_AUTH", "false").lower() == "true"
USE_R2 = os.environ.get("CLOUDVAULT_USE_R2", "false").lower() == "true"

R2_ACCOUNT_ID = os.environ.get("CLOUDVAULT_R2_ACCOUNT_ID", "")
R2_ACCESS_KEY_ID = os.environ.get("CLOUDVAULT_R2_ACCESS_KEY_ID", "")
R2_SECRET_ACCESS_KEY = os.environ.get("CLOUDVAULT_R2_SECRET_ACCESS_KEY", "")
R2_BUCKET = os.environ.get("CLOUDVAULT_R2_BUCKET", "")
R2_REGION = os.environ.get("CLOUDVAULT_R2_REGION", "auto")
R2_ENDPOINT = os.environ.get("CLOUDVAULT_R2_ENDPOINT", f"https://{R2_ACCOUNT_ID}.r2.cloudflarestorage.com" if R2_ACCOUNT_ID else "")

FIREBASE_CREDENTIALS_JSON = os.environ.get("CLOUDVAULT_FIREBASE_CREDENTIALS_JSON", "")

CORS_ORIGINS = os.environ.get("CLOUDVAULT_CORS_ORIGINS", "http://localhost:3000,http://localhost:5173").split(",")

DB_FILE      = Path("db.json")

app = FastAPI(title="CloudVault API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")
pwd_ctx       = CryptContext(schemes=["bcrypt"], deprecated="auto")

if USE_FIREBASE_AUTH:
    if not FIREBASE_CREDENTIALS_JSON:
        raise RuntimeError("CLOUDVAULT_FIREBASE_CREDENTIALS_JSON is required when CLOUDVAULT_USE_FIREBASE_AUTH=true")
    if not firebase_admin._apps:
        firebase_admin.initialize_app(firebase_credentials.Certificate(FIREBASE_CREDENTIALS_JSON))

r2_client = None
if USE_R2:
    missing = [k for k, v in {
        "CLOUDVAULT_R2_ACCESS_KEY_ID": R2_ACCESS_KEY_ID,
        "CLOUDVAULT_R2_SECRET_ACCESS_KEY": R2_SECRET_ACCESS_KEY,
        "CLOUDVAULT_R2_BUCKET": R2_BUCKET,
        "CLOUDVAULT_R2_ENDPOINT": R2_ENDPOINT,
    }.items() if not v]
    if missing:
        raise RuntimeError(f"Missing R2 configuration: {', '.join(missing)}")
    r2_client = boto3.client(
        "s3",
        endpoint_url=R2_ENDPOINT,
        aws_access_key_id=R2_ACCESS_KEY_ID,
        aws_secret_access_key=R2_SECRET_ACCESS_KEY,
        region_name=R2_REGION,
    )

# ── Simple JSON "database" ─────────────────────────────────────────────────────
def load_db():
    if not DB_FILE.exists():
        return {"users": {}, "files": {}, "folders": {}, "shares": {}}
    return json.loads(DB_FILE.read_text())

def save_db(data):
    DB_FILE.write_text(json.dumps(data, indent=2, default=str))

def ensure_user_record(db, user_id: str, email: str = ""):
    if user_id not in db["users"]:
        db["users"][user_id] = {
            "email": email or "",
            "password": "",
            "created_at": datetime.now(timezone.utc).isoformat(),
            "storage_used": 0,
        }
        save_db(db)
    elif email and not db["users"][user_id].get("email"):
        db["users"][user_id]["email"] = email
        save_db(db)

def object_key(owner: str, stored_name: str):
    return f"{owner}/{stored_name}"

def save_blob(owner: str, stored_name: str, content: bytes, mime_type: str):
    if USE_R2:
        r2_client.put_object(
            Bucket=R2_BUCKET,
            Key=object_key(owner, stored_name),
            Body=content,
            ContentType=mime_type,
        )
        return
    dest = UPLOAD_ROOT / owner / stored_name
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(content)

def load_blob(owner: str, stored_name: str) -> bytes:
    if USE_R2:
        obj = r2_client.get_object(Bucket=R2_BUCKET, Key=object_key(owner, stored_name))
        return obj["Body"].read()
    path = UPLOAD_ROOT / owner / stored_name
    if not path.exists():
        raise HTTPException(404, "File not found")
    return path.read_bytes()

def delete_blob(owner: str, stored_name: str):
    if USE_R2:
        r2_client.delete_object(Bucket=R2_BUCKET, Key=object_key(owner, stored_name))
        return
    path = UPLOAD_ROOT / owner / stored_name
    if path.exists():
        path.unlink()

# ── Auth helpers ───────────────────────────────────────────────────────────────
def hash_password(pw):    return pwd_ctx.hash(pw)
def verify_password(pw, h): return pwd_ctx.verify(pw, h)

def create_token(data: dict):
    exp = datetime.now(timezone.utc) + timedelta(minutes=TOKEN_EXPIRE)
    return jwt.encode({**data, "exp": exp}, SECRET_KEY, algorithm=ALGORITHM)

async def current_user(token: str = Depends(oauth2_scheme)):
    exc = HTTPException(status_code=401, detail="Invalid credentials")
    if USE_FIREBASE_AUTH:
        try:
            payload = firebase_auth.verify_id_token(token)
            uid: str = payload.get("uid")
            if uid is None:
                raise exc
            db = load_db()
            ensure_user_record(db, uid, payload.get("email", ""))
            return {"id": uid, **db["users"][uid]}
        except Exception:
            raise exc
    else:
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
            uid: str = payload.get("sub")
            if uid is None: raise exc
        except JWTError:
            raise exc
        db = load_db()
        if uid not in db["users"]: raise exc
        return {"id": uid, **db["users"][uid]}

# ── Auth endpoints ─────────────────────────────────────────────────────────────
@app.post("/auth/register")
def register(username: str = Form(...), password: str = Form(...), email: str = Form(...)):
    if USE_FIREBASE_AUTH:
        raise HTTPException(400, "Direct register disabled. Use Firebase Auth from frontend.")
    db = load_db()
    if username in db["users"]:
        raise HTTPException(400, "Username already taken")
    db["users"][username] = {
        "email": email,
        "password": hash_password(password),
        "created_at": datetime.now(timezone.utc).isoformat(),
        "storage_used": 0,
    }
    user_dir = UPLOAD_ROOT / username
    user_dir.mkdir(exist_ok=True)
    save_db(db)
    token = create_token({"sub": username})
    return {"access_token": token, "token_type": "bearer", "username": username}

@app.post("/auth/login")
def login(form: OAuth2PasswordRequestForm = Depends()):
    if USE_FIREBASE_AUTH:
        raise HTTPException(400, "Direct login disabled. Use Firebase Auth from frontend.")
    db = load_db()
    user = db["users"].get(form.username)
    if not user or not verify_password(form.password, user["password"]):
        raise HTTPException(401, "Incorrect username or password")
    token = create_token({"sub": form.username})
    return {"access_token": token, "token_type": "bearer", "username": form.username}

@app.get("/auth/me")
def me(user=Depends(current_user)):
    return {k: v for k, v in user.items() if k != "password"}

# ── Folder endpoints ───────────────────────────────────────────────────────────
@app.post("/folders")
def create_folder(name: str = Form(...), parent_id: Optional[str] = Form(None), user=Depends(current_user)):
    db = load_db()
    fid = str(uuid.uuid4())
    db["folders"][fid] = {
        "id": fid,
        "name": name,
        "parent_id": parent_id,
        "owner": user["id"],
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    save_db(db)
    return db["folders"][fid]

@app.get("/folders")
def list_folders(parent_id: Optional[str] = None, user=Depends(current_user)):
    db = load_db()
    folders = [
        f for f in db["folders"].values()
        if f["owner"] == user["id"] and f.get("parent_id") == parent_id
    ]
    return folders

@app.delete("/folders/{folder_id}")
def delete_folder(folder_id: str, user=Depends(current_user)):
    db = load_db()
    folder = db["folders"].get(folder_id)
    if not folder or folder["owner"] != user["id"]:
        raise HTTPException(404, "Folder not found")
    # Delete all files in folder
    files_to_delete = [fid for fid, f in db["files"].items()
                       if f.get("folder_id") == folder_id and f["owner"] == user["id"]]
    for fid in files_to_delete:
        delete_blob(user["id"], db["files"][fid]["stored_name"])
        del db["files"][fid]
    del db["folders"][folder_id]
    save_db(db)
    return {"ok": True}

# ── File endpoints ─────────────────────────────────────────────────────────────
@app.post("/files/upload")
async def upload_file(
    file: UploadFile = File(...),
    folder_id: Optional[str] = Form(None),
    user=Depends(current_user)
):
    db = load_db()
    fid         = str(uuid.uuid4())
    ext         = Path(file.filename).suffix
    stored_name = f"{fid}{ext}"

    content = await file.read()
    if len(content) > MAX_FILE_SIZE:
        raise HTTPException(413, f"File too large. Maximum size is {MAX_FILE_SIZE // (1024*1024)}MB")
    used = sum(f["size"] for f in db["files"].values() if f["owner"] == user["id"])
    if used + len(content) > STORAGE_LIMIT:
        available_mb = max(0, (STORAGE_LIMIT - used) // (1024 * 1024))
        raise HTTPException(413, f"Storage quota exceeded. Available space: {available_mb}MB")
    size = len(content)

    mime = mimetypes.guess_type(file.filename)[0] or "application/octet-stream"
    save_blob(user["id"], stored_name, content, mime)
    db["files"][fid] = {
        "id": fid,
        "name": file.filename,
        "stored_name": stored_name,
        "folder_id": folder_id,
        "owner": user["id"],
        "size": size,
        "mime_type": mime,
        "uploaded_at": datetime.now(timezone.utc).isoformat(),
    }
    db["users"][user["id"]]["storage_used"] = \
        db["users"][user["id"]].get("storage_used", 0) + size
    save_db(db)
    return db["files"][fid]

@app.get("/files")
def list_files(folder_id: Optional[str] = None, q: Optional[str] = None, user=Depends(current_user)):
    db   = load_db()
    files = [
        f for f in db["files"].values()
        if f["owner"] == user["id"]
    ]
    if folder_id is not None:
        files = [f for f in files if f.get("folder_id") == folder_id]
    if q:
        files = [f for f in files if q.lower() in f["name"].lower()]
    return files

@app.get("/files/{file_id}/download")
def download_file(file_id: str, user=Depends(current_user)):
    db   = load_db()
    meta = db["files"].get(file_id)
    if not meta or meta["owner"] != user["id"]:
        raise HTTPException(404, "File not found")
    content = load_blob(user["id"], meta["stored_name"])
    encoded_filename = quote(meta["name"])
    headers = {"Content-Disposition": f"attachment; filename*=UTF-8''{encoded_filename}"}
    return Response(content=content, media_type=meta["mime_type"], headers=headers)

@app.get("/files/{file_id}/preview")
def preview_file(file_id: str, user=Depends(current_user)):
    db   = load_db()
    meta = db["files"].get(file_id)
    if not meta or meta["owner"] != user["id"]:
        raise HTTPException(404, "File not found")
    content = load_blob(user["id"], meta["stored_name"])
    return Response(content=content, media_type=meta["mime_type"])

@app.delete("/files/{file_id}")
def delete_file(file_id: str, user=Depends(current_user)):
    db   = load_db()
    meta = db["files"].get(file_id)
    if not meta or meta["owner"] != user["id"]:
        raise HTTPException(404, "File not found")
    delete_blob(user["id"], meta["stored_name"])
    db["users"][user["id"]]["storage_used"] = \
        max(0, db["users"][user["id"]].get("storage_used", 0) - meta["size"])
    del db["files"][file_id]
    save_db(db)
    return {"ok": True}

@app.patch("/files/{file_id}")
def rename_file(file_id: str, name: str = Form(...), user=Depends(current_user)):
    db = load_db()
    meta = db["files"].get(file_id)
    if not meta or meta["owner"] != user["id"]:
        raise HTTPException(404, "File not found")
    meta["name"] = name
    save_db(db)
    return meta

# ── Sharing endpoints ──────────────────────────────────────────────────────────
@app.post("/files/{file_id}/share")
def share_file(file_id: str, user=Depends(current_user)):
    db   = load_db()
    meta = db["files"].get(file_id)
    if not meta or meta["owner"] != user["id"]:
        raise HTTPException(404, "File not found")
    share_id = str(uuid.uuid4())
    db["shares"][share_id] = {
        "file_id": file_id,
        "owner": user["id"],
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    save_db(db)
    return {"share_id": share_id, "share_url": f"/shared/{share_id}"}

@app.get("/shared/{share_id}")
def download_shared(share_id: str):
    db    = load_db()
    share = db["shares"].get(share_id)
    if not share: raise HTTPException(404, "Share link not found")
    meta  = db["files"].get(share["file_id"])
    if not meta:  raise HTTPException(404, "File not found")
    content = load_blob(share["owner"], meta["stored_name"])
    encoded_filename = quote(meta["name"])
    headers = {"Content-Disposition": f"attachment; filename*=UTF-8''{encoded_filename}"}
    return Response(content=content, media_type=meta["mime_type"], headers=headers)

@app.get("/stats")
def stats(user=Depends(current_user)):
    db    = load_db()
    files = [f for f in db["files"].values() if f["owner"] == user["id"]]
    return {
        "total_files": len(files),
        "storage_used": sum(f["size"] for f in files),
        "storage_limit": STORAGE_LIMIT,
        "total_folders": len([f for f in db["folders"].values() if f["owner"] == user["id"]]),
    }
