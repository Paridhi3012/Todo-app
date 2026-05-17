# Todo App — Docker + Jenkins Demo

A simple full-stack Todo app built to demonstrate Docker and Jenkins CI/CD.

## Stack
- **Frontend**: HTML/CSS/JS served via Nginx
- **Backend**: Node.js + Express REST API

## Project Structure
```
todo-app/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── index.html
│   └── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
└── README.md
```

## Run Locally with Docker

```bash
# Build and start both services
docker-compose up --build

# Frontend → http://localhost:3000
# Backend  → http://localhost:5000
```

## API Endpoints

| Method | Endpoint          | Description       |
|--------|-------------------|-------------------|
| GET    | /api/todos        | Get all todos     |
| POST   | /api/todos        | Create a todo     |
| PATCH  | /api/todos/:id    | Toggle done       |
| DELETE | /api/todos/:id    | Delete a todo     |
| GET    | /health           | Health check      |

## Jenkins Pipeline Stages

1. **Checkout** — Clone the repo
2. **Install Dependencies** — `npm install`
3. **Run Tests** — `npm test`
4. **Build Docker Images** — `docker-compose build`
5. **Deploy** — `docker-compose up -d`
6. **Health Check** — hits `/health` endpoint

## Jenkins Setup

1. Create a new Pipeline job in Jenkins
2. Point it to your Git repo
3. Set "Pipeline script from SCM" → use `Jenkinsfile`
4. Make sure Docker is installed on the Jenkins agent
