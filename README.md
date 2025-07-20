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
│   ├── dbconn.ts
│   ├── crudOPS.ts
│   ├── server.ts
│   ├── package.json
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

* `react`, `react-dom`, `react-router-dom`
* `vite` for ultra-fast dev server
* `.env` for API config

### 🚀 Backend (`Express + TypeScript`)

* `express`, `cors`, `pg` for PostgreSQL
* `dotenv` for env variables
* `nodemon`, `ts-node-dev` for dev server
* `typescript` + `tsconfig` for strong typing

### 🐘 Database

* `PostgreSQL` via local instance (managed using `pgAdmin`)
* Tested using `Postman`
* Queries written using raw SQL (via `pg`)

---

## ⚙️ Setup Instructions

### ✅ Prerequisites

* Node.js (v18+)
* PostgreSQL installed
* pnpm / npm / yarn

---

### 🔧 Backend Setup

```bash
cd backend
cp .env.example .env  # Add your PostgreSQL credentials
npm install
npm dev              # Starts backend with ts-node-dev
```

Contents of `.env`:

```
PG_HOST=localhost
PG_PORT=5432
PG_USER=your_username
PG_PASSWORD=your_password
PG_DATABASE=your_dbname
```

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
VITE_BACKEND_URL=http://localhost:5000
```

---

## 📬 API Routes (Tested with Thunder Client)

| Method | Description       |
| ------ |  ---------------- |
| GET    | Fetch all records |
| POST   | Add a new record  |
| PUT    | Update by ID      |
| DELETE | Delete by ID      |

---

## ✨ Features

* 🔄 Full CRUD functionality
* 🎯 Clean React routing with shared Home menu
* 🔐 Secure environment configuration with `.env`
* 🧪 Thunder client-tested API
* 📦 Modern dev experience with `Vite` and `ts-node-dev`
* 🧠 Strengthens full-stack dev skills (PERN + TypeScript)

---

---

## 🏁 Conclusion

This project helped solidify full-stack fundamentals with PostgreSQL and TypeScript. It's a strong foundation for scaling into more complex applications and backend architectures.
Still few updates needed and gonna improve it...
---


