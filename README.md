# MERN Admin Services

A full-stack MERN (MongoDB, Express, React, Node.js) web application featuring JWT authentication, role-based access control, user management, a services module, and a contact form.

## Overview

This project consists of two main parts:

- **[/client](./client)** — React frontend ([see client README](./client/README.md))
- **[/server](./server)** — Node/Express backend API ([see server README](./server/README.md))

## Features

- 🔐 JWT-based Authentication (Login/Signup)
- 👤 Role-based access control (Admin vs Normal User)
- 🛠️ Admin Dashboard — manage users (CRUD)
- 📋 Services module
- 📩 Contact form with backend integration
- 🔒 Protected admin routes
- 📱 Responsive UI

## Tech Stack

**Frontend:** React, Vite, React Router, Bootstrap, Toastify  
**Backend:** Node.js, Express.js, MongoDB (Mongoose), JWT, bcrypt  
**Database:** MongoDB Atlas  
**Deployment:** Vercel (frontend), Render (backend)

## Project Structure

\`\`\`
mern-admin-services/
├── client/          # React frontend
├── server/          # Node/Express backend
├── .gitignore
├── LICENSE
└── README.md
\`\`\`

## Getting Started Locally

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/Shaban-Rasheed-dev/mern-admin-services.git
cd mern-admin-services
\`\`\`

### 2. Setup Backend

\`\`\`bash
cd server
npm install
# create .env file (see server/README.md for details)
npm start
\`\`\`

### 3. Setup Frontend

\`\`\`bash
cd client
npm install
# create .env file (see client/README.md for details)
npm run dev
\`\`\`

## Live Demo

- Frontend: _(deployment link yahan aayega)_
- Backend API: _(deployment link yahan aayega)_

## License

This project is licensed under the MIT License.

## Author

**Shaban Rasheed**
