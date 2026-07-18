# Personal Portfolio — Caleb Elder

React + Vite portfolio site with a FastAPI contact backend.

## Live site

**https://ucgmae47.github.io/personal_portfolio/**

(Frontend only on GitHub Pages. The contact form needs the FastAPI + MySQL backend running separately.)

## Run locally

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

### Backend (optional — contact form)

```bash
# Apply schema once (MySQL required)
mysql -u root -p < database/schema.sql

cd backend
cp .env.example .env   # fill in DB credentials
source venv/bin/activate
uvicorn main:app --reload --port 8000
```

## Stack

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion, React Router
- **Backend:** FastAPI, MySQL
- **Content:** Hardcoded in `frontend/src/data/` (profile, projects, education, etc.)
