---
# 🚀 Full-Stack PERN + TypeScript CRUD website

A complete full-stack web application built with **PostgreSQL**, **Express**, **React**, and **Node.js**, using **TypeScript** across the stack. It performs full CRUD operations and follows clean architectural patterns with environment variables, modern tooling, and Postman-tested endpoints.

🔐 Built with secure `.env` handling, modular file structure, and a focus on **clean dev practices**.
---

## 📁 Folder Structure

```
fullstack-crud-app/
├── backend/
│   |
│   ├── prisma
|   |      └── schema.prisma
│   ├── routes
|   |      └── index.ts
│   ├── controllers
|   |      └── controller.ts      
│   ├── server.ts
│   ├── package.json
|   |── .env.example
│   ├── .env
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   └── components/
│   │       ├── Home.tsx
|   |       |__ Layout.tsx
│   │       ├── CreateData.tsx
│   │       ├── ReadData.tsx
│   │       ├── UpdateData.tsx
│   │       └── DeleteData.tsx
│   ├── vite.config.ts
│   ├── package.json
│   ├── .env
│   └── tsconfig.json
```

---

## 🧰 Technologies & Libraries

### 🌐 Frontend (`React + Vite + TypeScript`)

- `react`, `react-dom`, `react-router-dom`
- `vite` for ultra-fast dev server
- `.env` for API config

### 🚀 Backend (`Express + TypeScript`)

- `express`, `cors`, `pg` for PostgreSQL
- `dotenv` for env variables
- `watch`, `tsx` for dev server
- `typescript` + `tsconfig` for strong typing

### 🐘 Database

- `PostgreSQL` via local instance (managed using `pgAdmin`)
- Tested using `Postman`
- Queries written using raw SQL (via `pg`)

---

## ⚙️ Setup Instructions

### ✅ Prerequisites

- Node.js (v18+)
- PostgreSQL installed
- pnpm / npm / yarn

---

### 🔧 Backend Setup

```bash
cd backend
cp .env.example .env  # Add your Neon (cloud) PostgreSQL credentials -- do NOT commit .env
npm install
npm run dev            # Starts backend with tsx watch (see package.json)
```

Contents of `backend/.env.example` (Neon-ready):

```
# Example pooled connection (Runtime - recommended)
DATABASE_URL="postgresql://<NEON_USER>:<NEON_PASSWORD>@<NEON_HOST>/<NEON_DB>?sslmode=require&channel_binding=require"

# Optional unpooled direct connection (uncomment when using prisma migrate or introspection if needed)
# DATABASE_URL_UNPOOLED="postgresql://<NEON_USER>:<NEON_PASSWORD>@<NEON_HOST>/<NEON_DB>?sslmode=require&channel_binding=require"

# Server port (optional)
PORT=4000
```

Notes about Neon and Prisma:

- Neon provides a cloud Postgres endpoint that is usually accessed via a pooled connection URL (the default "DATABASE_URL" above). This is the recommended URL to use at runtime.
- For some Prisma CLI commands (older Prisma versions or specific setups) you might need an "unpooled" direct connection. If your Prisma commands fail with pooling-related errors, copy the unpooled URL into `DATABASE_URL_UNPOOLED` and set that when running migrations locally. Newer Prisma releases handle pooling better.
- Example run (using the unpooled URL environment variable):

```bash
# Linux / macOS (bash/fish - export the unpooled URL for the command only)
DATABASE_URL="$(cat .env | sed -n 's/^DATABASE_URL_UNPOOLED=\"\(.*\)\"$/\1/p')" npx prisma migrate deploy
```

If you're using Neon, make sure to create a DB and user in the Neon dashboard and paste the provided connection string into your `backend/.env`.

---

### 💻 Frontend Setup

```bash
cd frontend
cp .env.example .env  # Add your backend base URL
npm install
npm dev              # Starts Vite server
```

Contents of `.env`:

```
VITE_BACKEND_URL=http://localhost:4000
```

---

## 📬 API Routes (Tested with Thunder Client)

| Method | Description       |
| ------ | ----------------- |
| GET    | Fetch all records |
| POST   | Add a new record  |
| PUT    | Update by ID      |
| DELETE | Delete by ID      |

---

## ✨ Features

- 🔄 Full CRUD functionality
- 🎯 Clean React routing with shared Home menu
- 🔐 Secure environment configuration with `.env`
- 🧪 Thunder client-tested API
- 📦 Modern dev experience with `Vite` and `tsx`
- 🧠 Strengthens full-stack dev skills (PERN + TypeScript)

---

---

## 🏁 Conclusion

This project helped solidify full-stack fundamentals with PostgreSQL and TypeScript. It's a strong foundation for scaling into more complex applications and backend architectures.
Still few updates needed and gonna improve it...

---
