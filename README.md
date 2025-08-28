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

- CI/CD Jenkins Pipeline
  
<img width="1894" height="801" alt="Screenshot 2025-08-17 023041" src="https://github.com/user-attachments/assets/1d0497f9-0255-445b-a796-f314ec8c1ecf" />

- ArgoCD application for deployment on EKS

<img width="1884" height="909" alt="Screenshot 2025-08-17 023233" src="https://github.com/user-attachments/assets/92de7605-7fda-4b9f-9619-569f7caec762" />

---

| Tech stack    | Installation |
| -------- | ------- |
| Docker | <a href="#Docker">Install docker</a>    |
| Jenkins Master | <a href="#Jenkins">Install and configure Jenkins</a>     |
| eksctl | <a href="#EKS">Install eksctl</a>     |
| Argocd | <a href="#Argo">Install and configure ArgoCD</a>     |
| OWASP setup | <a href="#Owasp">Install and configure OWASP</a>     |
| SonarQube | <a href="#Sonar">Install and configure SonarQube</a>     |
| Email Notification Setup | <a href="#Mail">Email notification setup</a>     |
| Monitoring | <a href="#Monitor">Prometheus and grafana setup using helm charts</a>
| Clean Up | <a href="#Clean">Clean up</a>     |
#

> [!Note]
> This project will be implemented on Mumbai region (ap-south-1).

- <b>Create 1 Master machine on AWS with 2CPU, 8GB of RAM (t2.large) and 30 GB of storage and install Docker on it. We configure Jenkins Master Node on it</b>
#

## Security Groups
| Port Number    | Use for |
| -------- | ------- |
| 80 | http |
| 22 | ssh |
| 465 | smtps |
| 8080 | Jenkins Master |
| 9000 | SonarQube |

> [!Note]
> We are creating this master machine because we will configure Docker, Jenkins master, Trivy, SonarQube, eksctl, EKS cluster creation from here.


- <b id="Docker">Docker Installation Shell Scripting : (On Jenkins Master Node)</b>
[Text](https://github.com/Vedansh134/Shell_Scripts/blob/main/docker_install.sh)

- <b id="Jenkins">Jenkins Installation Shell Scripting : (On Jenkins Master Node)</b>
[Text](https://github.com/Vedansh134/Shell_Scripts/blob/main/jenkins_install.sh)

- <b>Now, access Jenkins Master on the browser on port 8080 and configure it</b>.

#
- <b id="EKS">Create EKS Cluster on AWS (Master machine)</b>
  - IAM user with **access keys and secret access keys**
  - AWSCLI should be configured (<a href="https://github.com/yourshell-link">Setup AWSCLI</a>)
  ```bash
  curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
  sudo apt install unzip
  unzip awscliv2.zip
  sudo ./aws/install
  aws configure
  ```

  - Install **kubectl** (Master machine)
  ```bash
  curl -o kubectl https://amazon-eks.s3.us-west-2.amazonaws.com/1.19.6/2021-01-05/bin/linux/amd64/kubectl
  chmod +x ./kubectl
  sudo mv ./kubectl /usr/local/bin
  kubectl version --short --client
  ```

 - Install **eksctl** (Master machine)
  ```bash
  curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
  sudo mv /tmp/eksctl /usr/local/bin
  eksctl version
  ```
  
  - <b>Create EKS Cluster (Master machine)</b>
  ```bash
  eksctl create cluster --name=mongoshop \
                      --region=ap-south-1 \
                      --version=1.30 \
                      --without-nodegroup
  ```
  - <b>Associate IAM OIDC Provider (Master machine)</b>
  ```bash
  eksctl utils associate-iam-oidc-provider \
    --region ap-south-1 \
    --cluster mongoshop \
    --approve
  ```
  - <b>Create Nodegroup (Master machine)</b>
  ```bash
  eksctl create nodegroup --cluster=mongoshop \
                       --region=ap-south-1 \
                       --name=mongoshop \
                       --node-type=t2.large \
                       --nodes=2 \
                       --nodes-min=2 \
                       --nodes-max=2 \
                       --node-volume-size=30 \
                       --ssh-access \
                       --ssh-public-key=eks-nodegroup-key 
  ```
> [!Note]
>  Make sure the ssh-public-key "eks-nodegroup-key is available in your aws account"

#
- <b id="Sonar">Install and configure SonarQube (On Jenkins Master Node)</b>
```bash
docker run -itd --name SonarQube-Server -p 9000:9000 sonarqube:lts-community
```
#
- <b id="Trivy">Trivy Installation Shell Scripting : (On Jenkins Master Node)</b>
[Text](https://github.com/Vedansh134/Shell_Scripts/blob/main/trivy_install.sh)


- <b id="Argo">ArgoCD Installation Shell Scripting : (On Jenkins Master Node)</b>
[Text](https://github.com/Vedansh134/MongoShop/blob/main/shell-scripts/trivy_install.sh)


#
  - <b>Check argocd services</b>
  ```bash
  kubectl get svc -n argocd
  ```
  - <b>Change argocd server's service from ClusterIP to NodePort</b>
  ```bash
  kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "NodePort"}}'
  ```
  - <b>Confirm service is patched or not</b>
  ```bash
  kubectl get svc -n argocd
  ```
  - <b> Check the port where ArgoCD server is running and expose it on security groups of a worker node</b>
  ![image](https://github.com/user-attachments/assets/a2932e03-ebc7-42a6-9132-82638152197f)
  - <b>Access it on browser, click on advance and proceed with</b>
  ```bash
  <public-ip-worker>:<port>
  ```
  - <b>Fetch the initial password of argocd server</b>
  ```bash
  kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
  ```
  - <b>Username: admin</b>
  - <b> Now, go to <mark>User Info</mark> and update your argocd password
#
## Steps to add email notification
- <b id="Mail">Go to your Jenkins Master EC2 instance and allow 465 port number for SMTPS</b>
#
- <b>Now, we need to generate an application password from our gmail account to authenticate with jenkins</b>
  - <b>Open gmail and go to <mark>Manage your Google Account --> Security</mark></b>
> [!Important]
> Make sure 2 step verification must be on
  

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
