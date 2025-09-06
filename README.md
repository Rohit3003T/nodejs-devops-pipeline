# Project: nodejs-devops-pipeline 🚀

Docker Image: `project-node-app`

This repository is a **DevOps pipeline project** using a simple Node.js application. It covers local development, CI/CD, Docker, and Kubernetes deployment.

---

## 📌 Project Overview

* **Node.js App**: Basic Express.js application with health check endpoint.
* **CI/CD**: Automated tests with GitHub Actions.
* **Docker**: Containerized app.
* **Kubernetes**: Deploy to local (kind) or cloud (EKS) clusters.
* **Registry**: Push Docker image to AWS ECR.

---

## 1️⃣ Local Development

1. Clone the repository:

```bash
git clone https://github.com/Rohit3003T/nodejs-devops-pipeline.git
cd nodejs-devops-pipeline
```

2. Install dependencies:

```bash
npm install
```

3. Run the app locally:

```bash
npm start
# Open http://localhost:3000
```

4. Run tests:

```bash
npm test
```

---

## 2️⃣ Continuous Integration (GitHub Actions)

**Workflow**: `.github/workflows/ci.yml`

**What happens on push/PR**:

* Checkout code
* Install Node.js
* Install dependencies (`npm ci`)
* Run tests automatically

---

## 3️⃣ Dockerize the Application

1. Build Docker image:

```bash
docker build -t project-node-app:1.0 .
```

2. Run locally:

```bash
docker run -p 3000:3000 project-node-app:1.0
```

3. Push to AWS ECR:

```bash
aws ecr create-repository --repository-name project-node-app
aws ecr get-login-password | docker login --username AWS --password-stdin <account>.dkr.ecr.<region>.amazonaws.com
docker tag project-node-app:1.0 <account>.dkr.ecr.<region>.amazonaws.com/project-node-app:1.0
docker push <account>.dkr.ecr.<region>.amazonaws.com/project-node-app:1.0
```

---

## 4️⃣ Kubernetes Deployment

### Local Cluster (kind)

```bash
kind create cluster
kubectl apply -f k8s/
kubectl get pods
kubectl port-forward svc/project-node-app 8080:80
```

### AWS EKS

```bash
eksctl create cluster --name project-node-app-cluster --region us-east-1
kubectl apply -f k8s/
kubectl get svc project-node-app
```
