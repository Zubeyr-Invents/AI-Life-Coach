# **AI Life Coach — README**

## **Overview**

AI Life Coach is a full-stack, containerised AI coaching system designed to deliver fast, personalised guidance through a secure web interface.

The project combines Python, FastAPI, Docker, Nginx, and JavaScript to create a seamless pipeline between a user, a web client, and an intelligent backend powered by the OpenAI API.

## **Features**

- **AI-Powered Coaching**
    
    Uses Python + OpenAI to generate dynamic, personalised responses.
    
- **FastAPI Backend**
    
    Lightweight, high-performance API serving all AI requests.
    
- **Dynamic Frontend**
    
    JavaScript-driven UI making asynchronous API calls to the FastAPI server.
    
- **Secure Deployment**
    
    Nginx reverse proxy + HTTPS enabled for encrypted communication.
    
- **Dockerized Architecture**
    
    Fully containerised backend for portability, scalability, and simple deployment.
    
- **Clean API Routing**
    
    FastAPI endpoints handle message passing, session logic, and OpenAI integration.
    

## **Tech Stack**

- **Backend:** Python, FastAPI
- **AI Engine:** OpenAI API
- **Frontend:** HTML, CSS, JavaScript (Fetch API)
- **DevOps:** Docker, Nginx, HTTPS
- **Hosting:** (Add your server provider if you want)


## **How It Works**

1. User enters a message on the website.
2. JavaScript sends the message to the FastAPI server.
3. FastAPI forwards it to the OpenAI API.
4. AI returns a personalised coaching response.
5. Frontend updates instantly with the reply.
6. Nginx handles SSL termination + routing to the correct container.

## **Setup**

### **1. Clone the repo**

```
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

```

### **2. Add your OpenAI API key**

Create `.env`:

```
OPENAI_API_KEY=your_key_here

```

## **Future Improvements**

- User accounts + personalized sessions
- Conversation memory
- Analytics dashboard
- Mobile-optimised frontend
- Custom fine-tuned model
