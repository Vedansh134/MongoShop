# 🛒 MongoShop - Node.js E-commerce Application 🚀

Welcome to *MongoShop*, a simple (for practice) e-commerce application built with Node.js, Express, MongoDB, and modern web technologies. This project was created for practice, showcasing CRUD operations, authentication, authorization, and cloud deployment with various DevOps principles.

---

<img width="1894" height="913" alt="Screenshot 2025-08-22 185323" src="https://github.com/user-attachments/assets/5777277c-3a6e-4623-b649-955228e7d873" />

---

<img width="1894" height="923" alt="Screenshot 2025-08-22 185411" src="https://github.com/user-attachments/assets/cc73d29a-367b-44cc-b359-aa1f226c7f81" />

---

## 🎯 Features

- *User Authentication & Authorization* 🔐  
  Sign Up / Login system. Only logged-in users can create, edit, or delete carts and orders.

- *Shopping Cart Management* 🛍  
  Add, remove, edit, and view shopping cart items with smooth UI.

- *CRUD Operations* ⚙  
  Full create, read, update, and delete capabilities for products and cart items.

- *Smooth UI* 🎨  
  Made with Bootstrap, CSS, and JavaScript for a clean interface.

- *Backend & Database* 💾  
  Using Node.js, Express.js, and MongoDB (via Mongoose) to handle data efficiently.

- *Security & Authentication* 🔒  
  Managed with Passport.js, with sessions and flash messages.

---
## Implement DevOps and DevSecOps practices 

- *Containerization & Deployment* 🐳  
  Dockerized the app with Dockerfile and docker-compose for easy deployment.

- *Cloud Deployment & DevOps* ☁  
  Deployed on AWS EC2 with Docker, using AWS Elastic Load Balancer (ELB), Route 53, autoscaling, and DNS setup.

- *CI/CD Pipelines* 🔄  
  Automated deployment with Jenkins (in a separate repo mongoshop_CI-CD).
  Separate file for Jenkins different stages we use shared libraries.

- *Implement devSecOps*
  - Implemented end-to-end CI/CD pipeline (GitLab SCM, Jenkins on AWS EC2) with Terraform-based infrastructure automation for scalable
    deployment.
  - Integrated SonarQube for code quality and Trivy for container image security scanning to ensure production-ready releases.
  - Dockerized the Node.js application (use Docker Compose for multi-build capabilities) and created multi-stage Dockerfiles to reduce
    container size.
  - Published images to Docker Hub, and deployed to AWS EKS (Kubernetes) with ArgoCD for continuous delivery.
  - Designed and implemented monitoring and observability using Prometheus and Grafana, with dashboards and alerts for proactive
    maintenance.
  
---

## 🛠️ Tech Stack for Application

- **Backend:** Node.js, Express.js  
- **Frontend:** HTML, CSS, JavaScript, Bootstrap  
- **Database:** MongoDB with Mongoose  
- **Authentication:** Passport.js  
- **Deployment:** AWS EC2, ELB, Route 53  
- **Monitoring:** AWS CloudWatch 
- **Additional:** GitHub

## 📝 Setup & Installation

### Prerequisites
- Node.js and npm installed  
- Docker installed  
- MongoDB connection string ready  
- AWS account setup (EC2, ELB, Route 53, etc.)
- I buy domain from GoDaddy **vedanshkumar.info**

### Clone this repository
```bash
git clone https://github.com/yourusername/mongoshop.git
cd mongoshop
```

### Install dependencies
```bash
npm install
```

### Run the app locally
```bash
node index.js
# or using nodemon
npx nodemon index.js
```

### Dockerized Setup
Build and run with Docker:
```bash
docker build -t mongoshop .
docker-compose up -d
```

---

## 🚀 Deployment & Cloud Integration

- Deployed on **AWS EC2** with Docker containers  
- Used **Dockerfile** & **docker-compose.yml** for containerization  
- Configured **AWS ELB** for load balancing  
- Managed custom domain with **Route 53**, pointing to your ELB  
- Set up **auto-scaling** for handling traffic spikes  

---

## 🛠️ Tech Stack for Implement DevSecOps principles

- **Terraform :** IaC for scalable setup
- **AWS :** Provisioned AWS EC2 seamlessly with Terraform and use AWS IAM for assigns Roles and policies
- **GitHub/GitLab :** Source code hosting and version control.
- **Containerization :** Docker & Docker Compose
- **SonarQube (Quality) :** Analyzes code quality and bugs.
- **Trivy :** Container and filesystem scans
- **CI/CD pipelines :** CI/CD with Jenkins
- **ArgoCD :** GitOps-based Continuous Delivery
- **AWS EKS :** Kubernetes cluster for orchestration
- **Monitoring & Monitoring Tools :** Prometheus & Grafana  

---

## How pipeline will look after deployment:

---
- CI/CD Jenkins Pipeline
  
<img width="1894" height="801" alt="Screenshot 2025-08-17 023041" src="https://github.com/user-attachments/assets/1d0497f9-0255-445b-a796-f314ec8c1ecf" />

- ArgoCD application for deployment on EKS

<img width="1884" height="909" alt="Screenshot 2025-08-17 023233" src="https://github.com/user-attachments/assets/92de7605-7fda-4b9f-9619-569f7caec762" />

---

## 🧭 Future Plans & Enhancements

- **Orchestrate with Kubernetes (K8s)** for better scaling & management  
- **Advanced Monitoring & Alerting** via Prometheus & Grafana  
- **Enhanced Security & SSL** setup  

---

## 🔗 Links & Resources

- **Jenkins Pipeline Repo:** [mongoshop_CI-CD](https://github.com/Vedansh134/mongoshop_CI-CD)

---

**This is the best project where i gain experience how to deploy app in aws and docker and also create and manage pipelines** 🚀🛒

---
