# Task 1 - Secure Authentication System

## Project Overview

The Secure Authentication System is a full-stack web application that provides secure user registration and login functionality using JWT authentication. Passwords are securely encrypted using bcrypt before being stored in MongoDB.

This project demonstrates a complete authentication workflow between the frontend and backend.

---

# Features

- User Registration
- User Login
- Password Encryption using bcrypt
- JWT Authentication
- Protected Dashboard
- Logout Functionality
- MongoDB Database Integration
- Responsive User Interface

---

# Technologies Used

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- dotenv
- CORS

---

# Folder Structure

```
Task-1-Secure-Authentication-System
│
├── client
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── package.json
│   └── server.js
│
├── screenshots
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/dachu20dd-crypto/Growfinix-Internship-Tasks.git
```

---

## Install Frontend

```bash
cd client
npm install
npm run dev
```

---

## Install Backend

```bash
cd server
npm install
npm run dev
```

---

# Environment Variables

Create a `.env` file inside the `server` folder.

Example:

```
PORT=5000

MONGO_URI=Your MongoDB Connection String

JWT_SECRET=Your Secret Key
```

---

# API Endpoints

## Register

POST

```
/api/auth/register
```

Registers a new user.

---

## Login

POST

```
/api/auth/login
```

Authenticates the user and returns a JWT token.

---

## Profile

GET

```
/api/auth/profile
```

Returns authenticated user information.

---

# Screenshots

Add screenshots inside the `screenshots` folder.

Example:

- Login Page
- Register Page
- Dashboard
- MongoDB Atlas
- Backend Terminal

---

# Future Improvements

- Email Verification
- Forgot Password
- Reset Password
- User Profile Editing
- Role-Based Authentication
- Refresh Tokens

---

# Learning Outcomes

Through this project I learned:

- Full Stack Web Development
- React Routing
- JWT Authentication
- Password Hashing
- REST API Development
- MongoDB Atlas Integration
- Git & GitHub Workflow

---

# Author

**Divyadharshini M M**

Full Stack Web Development Intern

Growfinix
