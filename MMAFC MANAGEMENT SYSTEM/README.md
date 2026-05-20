# MMAFC Management System

This repository is now a full-stack starter project for a web-based management system using `React + Node.js + TypeScript`.

## Stack

- Frontend: `React`, `Vite`, `TypeScript`
- Backend: `Node.js`, `Express`, `TypeScript`
- Shared code: reusable types and module definitions
- Database: ready for `PostgreSQL + Prisma`

## Project Structure

```text
MMAFC MANAGEMENT SYSTEM/
|-- backend/
|   `-- src/
|-- database/
|   `-- prisma/
|-- docs/
|-- frontend/
|   `-- src/
|-- shared/
|   `-- src/
|-- .gitignore
|-- package.json
`-- README.md
```

## What Is Included

- A workspace-based project structure
- React admin-style dashboard starter
- Express API starter with health and summary endpoints
- Shared TypeScript models between frontend and backend
- Environment file example for the backend
- Prisma starter schema placeholder

## Getting Started

### 1. Install dependencies

Run these commands from the project root:

```bash
npm install
```

If your package manager does not install workspace packages correctly, run:

```bash
npm install --workspaces
```

### 2. Create the backend environment file

Copy:

```text
backend/.env.example
```

to:

```text
backend/.env
```

### 3. Start the backend

```bash
npm run dev:backend
```

The API will run at `http://localhost:4000`.

### 4. Start the frontend

Open a second terminal and run:

```bash
npm run dev:frontend
```

The web app will run at `http://localhost:5173`.

## Available Scripts

- `npm run dev:frontend`
- `npm run dev:backend`
- `npm run build`
- `npm run typecheck`

## Suggested Next Features

- Login and role-based access
- User management
- Records management
- Inventory tracking
- Report generation
- Audit logs

## Recommended Next Build Steps

1. Add authentication with JWT or session-based auth
2. Connect `Prisma` to `PostgreSQL`
3. Add database-backed modules like users, staff, and inventory
4. Protect routes by role and permission
