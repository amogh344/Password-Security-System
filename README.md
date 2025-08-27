AI-Powered Password Security System

This is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to analyze password strength using a sophisticated, multi-layered AI approach. It provides real-time feedback to users, helping them create stronger and more secure passwords.

Live Demo Links:

Frontend: https://tiny-melomakarona-0c4fdb.netlify.app/

Backend API: https://password-security-system.onrender.com

Features
Secure User Authentication: Full registration and login system with JWT (JSON Web Tokens) for session management.

Hybrid AI Password Analysis:

Complexity Check: Uses the zxcvbn library to analyze password complexity, patterns, and entropy.

Data Breach Check: Integrates with the "Have I Been Pwned" API to check if a password has appeared in any known data breaches.

Real-Time Feedback: The frontend provides instant analysis as the user types, including a strength score, a "time to crack" estimate, and actionable suggestions.

Protected Routes: The main dashboard is a protected route, accessible only to authenticated users.

RESTful API: A secure and well-structured backend API built with Node.js and Express.

Technology Stack
Backend
Node.js: JavaScript runtime environment.

Express.js: Web framework for Node.js.

MongoDB: NoSQL database for storing user data.

Mongoose: Object Data Modeling (ODM) library for MongoDB.

JWT (jsonwebtoken): For secure user authentication.

bcrypt.js: For password hashing.

zxcvbn: For advanced password strength estimation.

axios: For making requests to external APIs.

Frontend
React.js: A JavaScript library for building user interfaces.

Material-UI (MUI): A comprehensive React UI component library.

React Router: For client-side routing and navigation.

Axios: For making HTTP requests to the backend API.

Deployment
Backend: Deployed on Render.

Frontend: Deployed on Netlify.

Getting Started
Follow these instructions to get a local copy of the project up and running for development and testing purposes.

Prerequisites
Node.js and npm (or yarn) installed on your machine.

A free MongoDB Atlas account and connection string.

A free Hugging Face account and API Key (if using that version).

Installation & Setup
Clone the repository:

git clone https://github.com/amogh344/Password-Security-System.git
cd Password-Security-System

Backend Setup:

# Navigate to the server directory
cd server

# Install dependencies
npm install

# Create a .env file in the /server directory
# and add the environment variables (see below)

# Start the backend server
npm run dev

Frontend Setup:

# Navigate to the client directory from the root
cd client

# Install dependencies
npm install

# Start the React development server
npm start

The frontend will be available at http://localhost:3000 and the backend at http://localhost:5001.

Environment Variables
You need to create a .env file in the /server directory and add the following keys. Do not commit this file to version control.

# Server Port
PORT=5001

# MongoDB Connection URI
MONGO_URI=your_mongodb_connection_string

# JWT Secret Key (generate a long, random string)
JWT_SECRET=your_jwt_secret_key

