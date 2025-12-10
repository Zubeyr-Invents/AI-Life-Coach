AI Life Coach — FastAPI · OpenAI · Docker · Nginx · HTTPS

Your personal AI coach — built with a modern, production-ready stack.
This project combines a containerised backend, a dynamic front-end, and secure deployment to deliver an interactive AI coaching experience through the browser.

🚀 Overview
This project is an AI-powered life coach accessible through a dynamic web interface.
It uses a FastAPI backend running OpenAI models, communicates with a JavaScript front-end through REST API calls, and is fully containerised and deployed with HTTPS support via Nginx.
Everything is structured for real-world deployment: clean architecture, scalable containers, and secure traffic handling.

✨ Features
AI Coach Logic (Python + OpenAI)
Uses the OpenAI API to generate personalised coaching responses.
FastAPI Backend
A lightweight, high-performance API that exposes endpoints for the AI model.
Dynamic Web App (JavaScript)
The client sends API requests to the FastAPI server and renders responses in real time.
Dockerized Deployment
The entire backend is packaged in a Docker container for portability and reproducibility.
Nginx Reverse Proxy
Handles routing and improves security, performance, and scalability.
HTTPS Enabled
Secure communication using SSL certificates (production-ready deployment flow).

🧱 Tech Stack
Backend
Python
FastAPI
OpenAI Python SDK
Docker
Nginx
HTTPS (Certbot / SSL)

Frontend
HTML
CSS
JavaScript (fetch API calls to backend routes)

📡 Architecture
Frontend (HTML/JS)
       ↓  API Calls
Nginx Reverse Proxy
       ↓
FastAPI Server (Python)
       ↓
OpenAI API (AI Coaching Logic)


The backend runs inside Docker, and Nginx sits in front as a secure reverse proxy that terminates HTTPS and forwards traffic to the FastAPI application.

⚙️ Running Locally
docker-compose up --build
The backend and Nginx proxy will start, and the site will become reachable via your configured domain or localhost.

🔐 HTTPS Setup
Production deployments use Nginx with SSL termination.
Certificates can be generated using Certbot or your preferred method.

📬 API Example
POST /api/coach

Request:
{
  "message": "I want to improve my discipline."
}


Response:
{
  "reply": "Here’s a strategy to build consistent discipline..."
}

📌 Goals & Future Improvements
Add user accounts + session memory
Support voice interactions
Add journaling / habit-tracking
Improve long-term memory using a vector database
Multi-model support (OpenAI / Anthropic)
