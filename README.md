---
# 🚀 Full-Stack PERN + TypeScript CRUD Website

A complete full-stack web application built with **PostgreSQL**, **Express**, **React**, and **Node.js**, using **TypeScript** across the stack.

It supports full **CRUD operations**, follows a clean backend architecture, and includes **Docker**, **Docker Compose**, and **Nginx** for a more production-like setup.
---

## 📁 Project Structure

```bash
postgresql-main/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── routes/
│   │   └── index.ts
│   ├── controllers/
│   │   └── controller.ts
│   ├── server.ts
│   ├── Dockerfile
│   ├── package.json
│   ├── .env.example
│   ├── .env
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   └── components/
│   │       ├── Home.tsx
│   │       ├── Layout.tsx
│   │       ├── CreateData.tsx
│   │       ├── ReadData.tsx
│   │       ├── UpdateData.tsx
│   │       └── DeleteData.tsx
│   ├── Dockerfile
│   ├── vite.config.ts
│   ├── package.json
│   ├── .env
│   └── tsconfig.json
│
├── nginx/
│   └── nginx.conf
│
├── docker-compose.yml
└── README.md
```

---

## 🧰 Technologies Used

### Frontend

- React
- Vite
- TypeScript
- React Router

### Backend

- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL

### Dev / Deployment

- Docker
- Docker Compose
- Nginx

---

## ⚙️ Features

- Full CRUD functionality
- REST API endpoints
- Modular backend architecture
- PostgreSQL database integration
- Prisma ORM support
- Dockerized frontend and backend
- Nginx reverse proxy setup
- Environment-based config with `.env`

---

## 🏗️ Backend Architecture

The backend is organized into a simple and scalable structure:

- `server.ts`  
  Main entry point for the Express server

- `routes/index.ts`  
  Defines API routes

- `controllers/controller.ts`  
  Handles request logic and database actions

- `prisma/schema.prisma`  
  Database schema and Prisma model definitions

This keeps the code clean and easier to maintain as the project grows.

---

## 🐘 Prisma Schema Note

In `backend/prisma/schema.prisma`, the database URL is loaded using:

```prisma
url = env("DATABASE_URL")
```

### Important:

- If you are running the project **locally without Docker**, you can keep this line as-is.
- If you are using **Docker or Docker Compose**, this setup works fine as well.
- If needed for local testing or validation, you can comment/uncomment this line depending on your environment.

So:

- **Docker / Compose** → no problem, leave it as configured
- **Local run** → adjust only if your Prisma/Docker setup requires it

---

## 🌐 Nginx Setup

Nginx is used as a reverse proxy in front of the backend.

### Example behavior:

- Requests to `/api/` are forwarded to the backend service
- The backend service is reached through Docker Compose networking

Example Nginx config:

```nginx
location /api/ {
    proxy_pass http://backend:4000;
}
```

This makes the app cleaner and closer to a real production deployment.

---

## 🚀 Running the Project

### With Docker Compose

```bash
docker compose up --build
```

### Backend only

```bash
cd backend
npm install
npm run dev
```

### Frontend only

```bash
cd frontend
npm install
npm run dev
```

---

## 🔧 Environment Variables

### Backend

Example `.env`:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DBNAME"
PORT=4000
```

### Frontend

Example `.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## 📬 API Routes

| Method | Route            | Description           |
| ------ | ---------------- | --------------------- |
| GET    | `/api/users`     | Fetch all records     |
| POST   | `/api/users`     | Add a new record      |
| PUT    | `/api/users/:id` | Update a record by ID |
| DELETE | `/api/users/:id` | Delete a record by ID |

---

## ✅ Summary

This project is a solid PERN + TypeScript CRUD app with:

- PostgreSQL + Prisma
- Express backend
- React frontend
- Docker + Compose
- Nginx reverse proxy

## Still more improvements can be added later, but the current setup is already strong and practical for learning and deployment.
