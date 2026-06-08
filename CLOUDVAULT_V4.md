# CloudVault V4

## Authentication
- **Google** (Firebase): one-click sign-in, profile photo and display name saved on the account
- **GitHub / Microsoft** via Firebase when `VITE_FIREBASE_*` is configured
- **Email** register and login unchanged
- **Forgot password**: reset tokens expire in **15 minutes** (backend email flow)
- **Email verification**: uploads blocked until `isVerified`; resend from Settings

## Account & profile
- Top-right **profile menu**: Profile, Settings, Security, Storage, Billing, Upgrade, Help, Sign out
- **Profile page**: avatar, plan, trial status, storage, member since
- **Settings**: display name, avatar URL, password, delete account, resend verification
- **Security**: 2FA toggle (stored flag; full TOTP in a later release), sessions, login history
- **Notifications**: bell icon with upload, storage, trial, and share events

## Plans & trial
| Plan | Storage |
|------|---------|
| Free | 5 GB |
| Pro | 100 GB |
| Premium | 1 TB |
| Team | 2 TB |

New email signups get a **30-day Pro trial** (`trialEndsAt`). When the trial ends, the account returns to **Free** automatically.

**Billing page**: change plan, purchase storage add-ons (+50 GB … +1 TB). Payment gateway hooks in when you connect Stripe.

## Storage
- Warnings at **80%** and **95%** usage (banner + notifications)
- Storage dashboard unchanged, linked from sidebar and profile menu

## Drive sidebar
My Cloud · Recent · Starred · Shared · Storage · Trash · Activity · Admin (role-based)

## API (new)
| Method | Path |
|--------|------|
| GET | `/api/v1/account` |
| GET | `/api/v1/account/sessions` |
| DELETE | `/api/v1/account/sessions/:id` |
| POST | `/api/v1/account/verify-email/resend` |
| GET | `/api/v1/billing/plans` |
| GET | `/api/v1/billing/summary` |
| POST | `/api/v1/billing/plan` |
| POST | `/api/v1/billing/storage` |
| GET | `/api/v1/notifications` |

## Deploy
```bash
npx prisma migrate deploy
npx prisma generate
```

### Env (backend)
```
FIREBASE_PROJECT_ID=
FIREBASE_SERVICE_ACCOUNT_JSON=
FRONTEND_URL=https://your-app.vercel.app
```

### Env (frontend)
```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
```
