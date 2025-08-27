🔐 AI-Powered Password Security System

A full-stack MERN (MongoDB, Express, React, Node.js) application that analyzes password strength using a multi-layered AI approach. It provides real-time feedback to help users create stronger and more secure passwords.

⸻

🚀 Live Demo

🌐 Frontend: Live Site 

⚙️ Backend API: API Endpoint

⸻

✨ Features

	•	🔑 Secure User Authentication – Registration & login system with JWT session management

	•	🤖 Hybrid AI Password Analysis:

	•	🧮 Complexity Check – Powered by zxcvbn
    
	•	🔎 Data Breach Check – Integrates with Have I Been Pwned API

	•	⚡ Real-Time Feedback – Strength score, crack-time estimate & suggestions

	•	🛡️ Protected Routes – Dashboard access only for authenticated users

	•	🌐 RESTful API – Built with Express.js

⸻

🛠️ Tech Stack

🔙 Backend

	•	Node.js – JavaScript runtime

	•	Express.js – Web framework

	•	MongoDB – NoSQL database

	•	Mongoose – ODM for MongoDB

	•	JWT – Authentication with jsonwebtoken

	•	bcrypt.js – Password hashing

	•	zxcvbn – Password strength estimator

	•	axios – External API calls

🎨 Frontend

	•	React.js – UI library

	•	Material-UI (MUI) – UI components

	•	React Router – Client-side routing

	•	Axios – API communication

⸻

🌍 Deployment

	•	Backend: Render
	•	Frontend: Netlify

⸻

⚡ Getting Started

Follow these steps to set up the project locally.

✅ Prerequisites

	•	Node.js & npm (or yarn)
	•	MongoDB Atlas account

📥 Installation & Setup

1️⃣ Clone the repository:

    git clone https://github.com/amogh344/Password-Security-System.git
    cd Password-Security-System

2️⃣ Backend Setup:

    cd server
    npm install

# Create a .env file in /server and add environment variables
    npm run dev

3️⃣ Frontend Setup:

    cd client
    npm install
    npm start

•	Frontend → http://localhost:3000

•	Backend → http://localhost:5001

⸻

🔧 Environment Variables

Create a .env file in /server:

PORT=5001
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key


⚠️ Do not commit .env to version control.

⸻

📌 Roadmap

	•	🌍 Multi-language support for feedback messages

	•	📊 Password strength visualization charts

	•	🔐 Two-Factor Authentication (2FA)

	•	🔗 OAuth login (Google/GitHub)

⸻

🤝 Contributing

Contributions are welcome!
Open an issue or submit a pull request 🚀

⸻

📜 License

Licensed under the MIT License.
