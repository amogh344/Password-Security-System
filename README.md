🔐 AI-Powered Password Security System

A full-stack MERN (MongoDB, Express, React, Node.js) application that analyzes password strength using a multi-layered AI approach. It provides real-time feedback to help users create stronger and more secure passwords.

⸻

🚀 Live Demo
	•	Frontend: Live Site 
	•	Backend API: API Endpoint

⸻

✨ Features
	•	🔑 Secure User Authentication – Full registration & login system with JWT for session management.
	•	🤖 Hybrid AI Password Analysis:
	•	Complexity Check: Uses zxcvbn to analyze complexity, patterns & entropy.
	•	Data Breach Check: Integrates with the Have I Been Pwned API to check if a password has appeared in known breaches.
	•	Real-Time Feedback: Instant analysis while typing, including strength score, crack-time estimate & suggestions.
	•	🛡️ Protected Routes – Dashboard accessible only to authenticated users.
	•	🌐 RESTful API – Secure, structured backend with Express.

⸻

🛠️ Tech Stack

Backend
	•	Node.js – JavaScript runtime
	•	Express.js – Web framework
	•	MongoDB – NoSQL database
	•	Mongoose – MongoDB ODM
	•	JWT (jsonwebtoken) – Secure authentication
	•	bcrypt.js – Password hashing
	•	zxcvbn – Password strength estimation
	•	axios – External API requests

Frontend
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
	•	Install Node.js & npm (or yarn)
	•	A MongoDB Atlas account & connection string
	•	(Optional) A Hugging Face account & API Key

📥 Installation & Setup
	1.	Clone the repository:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

	2.	Backend Setup:

cd server
npm install

# Create a .env file in /server and add required environment variables
npm run dev

	3.	Frontend Setup:

cd client
npm install
npm start

	•	Frontend runs on http://localhost:3000
	•	Backend runs on http://localhost:5001

⸻

🔧 Environment Variables

Create a .env file inside /server with the following:

# Server Port
PORT=5001

# MongoDB Connection URI
MONGO_URI=your_mongodb_connection_string

# JWT Secret Key (long, random string)
JWT_SECRET=your_jwt_secret_key

# (Optional - Hugging Face API)
HUGGING_FACE_API_KEY=your_hugging_face_api_key

⚠️ Do not commit this file to version control.

⸻

📌 Roadmap
	•	Add multi-language support for feedback messages
	•	Enhance UI with password strength visualization charts
	•	Implement 2FA for stronger account security
	•	Add support for OAuth (Google/GitHub login)

⸻

🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to improve.

⸻

📜 License

This project is licensed under the MIT License.
