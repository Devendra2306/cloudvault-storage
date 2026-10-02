<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=CloudVault%20Storage&fontSize=70&fontAlignY=35&animation=twinkling&fontColor=ffffff" />
  
  <a href="https://cloudvault.co.in">
    <img src="https://readme-typing-svg.herokuapp.com/?lines=Secure+Cloud+Storage;Infinite+Uploads;AI-Powered+Assistant;Share+With+Confidence&center=true&width=500&height=50&color=00BFFF&vCenter=true&size=22" alt="Typing SVG" />
  </a>
  <br />
  
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
  [![AWS](https://img.shields.io/badge/AWS_S3-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/s3/)
  [![Render](https://img.shields.io/badge/Render-%46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)
  [![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
  [![Groq](https://img.shields.io/badge/Groq_AI-F55036?style=for-the-badge&logo=groq&logoColor=white)](https://groq.com/)

  <p align="center">
    <b>Your private, scalable, and ultra-secure file management ecosystem.</b><br />
    Effortlessly upload, organize, and share your files with infinite scale, AI assistance, and robust DoS protection.
  </p>
</div>

---

<details open>
<summary><b>✨ Interactive Table of Contents</b> <i>(Click to toggle)</i></summary>

- [Project Overview](#-project-overview)
- [Stunning Features](#-stunning-features)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Interactive Guide / Installation](#-interactive-guide--installation)
- [Security First](#-security-first)

</details>

---

## 🚀 Project Overview

CloudVault is built as a highly robust full-stack application. Our vision is to provide a "Google Drive-style" interface that is clean, intuitive, and blisteringly fast. 

Users can create an account, manage massive files directly via AWS S3 streaming, share content securely with magic passwords or print codes, interact with a built-in AI assistant, and track storage limits in real-time.

---

## 💎 Stunning Features

<table>
  <tr>
    <td align="center"><b>🤖 Groq AI Chatbot</b></td>
    <td align="center"><b>🖨️ "Quick Print" Kiosk</b></td>
    <td align="center"><b>🎨 Multi-Theming Engine</b></td>
  </tr>
  <tr>
    <td>Context-aware AI assistant powered by blazing-fast <strong>Groq API (Llama 3.1)</strong>. Ask about your storage limits, sharing help, or account status!</td>
    <td>Generate a temporary 4-digit code. Go to a print shop, punch it in, and securely download files! Auto-wipes in 24 hrs.</td>
    <td>Premium UI dynamically switching between Light, Dark, Midnight, and Purple themes seamlessly across all components.</td>
  </tr>
  <tr>
    <td align="center"><b>♾️ Infinite File Uploads</b></td>
    <td align="center"><b>🔗 Secure File Sharing</b></td>
    <td align="center"><b>📄 Advanced PDF Viewer</b></td>
  </tr>
  <tr>
    <td>Stream massive files directly to AWS S3 securely, bypassing local memory bottlenecks. No file size limits!</td>
    <td>Generate secure, password-protected, and expiring links. Complete with QR Codes and Social sharing!</td>
    <td>Custom-built PDF Viewer and Editor with smooth zooming, page rendering, and future annotation support using pdf.js.</td>
  </tr>
</table>

<details>
<summary><b>👉 View More Features</b></summary>
<br>

- **Modern Share Modal**: Beautiful UI to share links via Email, QR Codes, Twitter, WhatsApp, and more.
- **Dynamic Frontend Base URLs**: Seamlessly switches between local testing and production deployments.
- **Smart Security**: Cloudflare Turnstile bot protection & magic OTP links.
- **Batched Deletions**: Deleting folders batches S3 object purges automatically.
- **Orphan Cleanup**: Auto-recovery mechanisms purge ghost files if DB writes fail.

</details>

---

## 🛠️ Architecture & Tech Stack

| Frontend ⚛️ | Backend 🟢 | Infrastructure ☁️ |
| :--- | :--- | :--- |
| **React 18 & Vite** | **Node.js & Express** | **AWS S3** |
| Tailwind CSS & Custom CSS | Prisma ORM | Render (Backend) |
| Context API | Redis (Caching) | Vercel (Frontend) |
| `@react-pdf-viewer/core` | `groq-sdk` (AI) | GitHub Actions |

---

## 🧑‍💻 Interactive Guide / Installation

Follow these steps to launch the system locally! Click each step to expand:

<details>
<summary><b>Step 1: Clone & Install Dependencies</b></summary>

```bash
# Backend dependencies
npm install

# Frontend dependencies
npm install --prefix cloudvault/frontend
```
</details>

<details>
<summary><b>Step 2: Environment Variables</b></summary>

Configure your `.env` securely!

**Backend (`/.env`):**
```ini
DATABASE_URL="sqlite:./dev.db" # Or Postgres URL for production
JWT_SECRET="your_secret"
AWS_S3_BUCKET_NAME="cloudvault"
GROQ_API_KEY="gsk_..."
# ...
```

**Frontend (`cloudvault/frontend/.env`):**
```ini
VITE_API_BASE_URL="http://localhost:3001/api/v1"
```
</details>

<details>
<summary><b>Step 3: Database setup</b></summary>

```bash
# Generate Prisma Client & Migrate
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```
</details>

<details>
<summary><b>Step 4: Launch!</b></summary>

```bash
# Start backend
npm run dev

# Start frontend (in a new terminal)
npm run dev:frontend
```
</details>

---

## 🛡️ Security First

CloudVault leverages industry-grade protection:
- **Zero-Trust**: JWT access/refresh token rotation.
- **DoS Protection**: Immediately reads `Content-Length` headers, dropping malicious heavy payloads instantly to save bandwidth.
- **Orphan Control**: If a database transaction crashes mid-upload, a background process immediately sends a `DeleteObjectCommand` to S3 so you never pay for ghost files.
- **Rate Limiting & Helmet**: Securing all exposed APIs automatically.
- **API Key Security**: GitHub secret scanning is respected for all commits.

---
<div align="center">
  <i>Built with ❤️.</i>
</div>
