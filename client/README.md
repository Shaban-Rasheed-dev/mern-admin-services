# MERN Admin Services — Client (Frontend)

React-based frontend for the MERN Admin Services application. Built with Vite, React, React Router, and Bootstrap.

## Features

- User authentication (Login/Signup) with JWT
- Role-based redirection (Admin → Admin Dashboard, User → Home)
- Admin panel: manage users, services, and contacts
- Protected routes for admin-only pages
- Contact form with backend integration
- Responsive UI

## Tech Stack

- React (Vite)
- React Router DOM
- Bootstrap / CSS
- React Toastify (notifications)
- jwt-decode

## Getting Started

### Prerequisites
- Node.js installed
- Backend server running (see `/server` folder)

### Installation

\`\`\`bash
cd client
npm install
\`\`\`

L=http://localhost:3000
\`\`\`

### Run Development Server

\`\`\`bash
npm run dev
\`\`\`

App will run on `http://localhost:5173`

## Build for Production

\`\`\`bash
npm run build
\`\`\`

## Folder Structure

\`\`\`
client/
├── src/
│   ├── components/
│   ├── ContextAPI/
│   ├── pages/
│   └── App.jsx
├── public/
└── package.json
\`\`\`
