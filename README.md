# 🛒 MongoShop - Node.js E-commerce Practice Application 🚀

Welcome to **MongoShop**, a simple yet powerful e-commerce application built with Node.js, Express, MongoDB, and modern web technologies. This project was created for practice, showcasing CRUD operations, authentication, authorization, and cloud deployment with various DevOps principles.

---

## 🎯 Features

- **User Authentication & Authorization** 🔐  
  Sign Up / Login system. Only logged-in users can create, edit, or delete carts and orders.

- **Shopping Cart Management** 🛍️  
  Add, remove, edit, and view shopping cart items with smooth UI.

- **CRUD Operations** ⚙️  
  Full create, read, update, and delete capabilities for products and cart items.

- **Responsive UI** 🎨  
  Made with Bootstrap, CSS, and JavaScript for a clean, user-friendly interface.

- **Backend & Database** 💾  
  Using Node.js, Express.js, and MongoDB (via Mongoose) to handle data efficiently.

- **Security & Authentication** 🔒  
  Managed with Passport.js, with sessions and flash messages.

- **Containerization & Deployment** 🐳  
  Dockerized the app with Dockerfile and docker-compose for easy deployment.

- **Cloud Deployment & DevOps** ☁️  
  Deployed on AWS EC2 with Docker, using AWS Elastic Load Balancer (ELB), Route 53, autoscaling, and DNS setup.

- **CI/CD Pipelines** 🔄  
  Automated deployment with Jenkins (in a separate repo `mongoshop_CI-CD`).

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Frontend:** HTML, CSS, JavaScript, Bootstrap  
- **Database:** MongoDB with Mongoose  
- **Authentication:** Passport.js  
- **Containerization:** Docker & Docker Compose  
- **Deployment:** AWS EC2, ELB, Route 53  
- **Monitoring & Monitoring Tools:**  
  - Prometheus & Grafana  
  - AWS CloudWatch
- **CI/CD pipelines:** CI/CD with Jenkins 
- **Additional:** GitHub

---

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

## 🧭 Future Plans & Enhancements

- **Orchestrate with Kubernetes (K8s)** for better scaling & management  
- **Advanced Monitoring & Alerting** via Prometheus & Grafana  
- **Enhanced Security & SSL** setup  

---

## 🔗 Links & Resources

- **Live Demo:** [Your domain or AWS ELB link]  
- **Docker Hub:** (if published)  
- **Jenkins Pipeline Repo:** [mongoshop_CI-CD](https://github.com/Vedansh134/mongoshop_CI-CD)

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## ✉️ Contact

Feel free to open issues or contact me at [your-email].

---

**This is the best project where i gain experience how to deploy app in aws and docker and also create and manage pipelines** 🚀🛒

---
