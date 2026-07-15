
# MERN Admin Services — Server (Backend)

Node.js + Express backend API for the MERN Admin Services application, with MongoDB (via Mongoose) and JWT-based authentication.

## Features

- JWT authentication (Login/Signup)
- Role-based access control (Admin/User)
- User management API (CRUD)
- Services API
- Contact form API
- Password hashing with bcrypt

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- bcrypt

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account (or local MongoDB)

### Installation

\`\`\`bash
cd server
npm install
\`\`\`

### Environment Variables

Create a `.env` file in the `server` folder:

\`\`\`
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000

\`\`\`

### Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Server will run on `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login user |
| GET | /api/auth/user | Get logged-in user data |
| GET | /api/admin/users | Get all users (admin only) |
| PUT | /api/admin/users/update/:id | Update user (admin only) |
| GET | /api/services | Get all services |
| POST | /api/form/contact | Submit contact form |

## Folder Structure

\`\`\`
server/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── index.js
└── package.json
\`\`\`
