# Wanderlust DevOps Deployment (AWS + Terraform + GitHub Actions)

- Project Overview

This project demonstrates a complete DevOps pipeline for deploying a containerized Node.js application on AWS using:

Terraform (Infrastructure as Code)
Docker (Containerization)
Amazon ECR (Image Registry)
EC2 (Application Hosting)
GitHub Actions (CI/CD Automation)
SSH Key Authentication
Secure IAM Role Access
Test CI/CD Pipeline-1.0

IAM User for Terraform Access
To provision infrastructure securely, a dedicated IAM user was created specifically for Terraform operations.
<img width="1917" height="966" alt="image" src="https://github.com/user-attachments/assets/428d11ba-14b3-4800-90b7-812ee004eb15" />

- Infrastructure Deployment Steps (Terraform)
  1. Prerequisites
  
  Install:

  Terraform
  AWS CLI
  Git
Installed Git and AWS CLI-
<img width="1918" height="1022" alt="image" src="https://github.com/user-attachments/assets/157eff8a-0573-42d0-8c82-f6bcea9c205d" />

  Configure AWS credentials:
  # Command: aws configure
  # Verify account: aws sts get-caller-identity

  <img width="1918" height="1016" alt="image" src="https://github.com/user-attachments/assets/a3d70a4f-50db-4a82-b6a8-9ecc7c6d7d94" />

  2. Initialize Terraform

  # cd Infrastructure
  # terraform init

  <img width="1917" height="1017" alt="image" src="https://github.com/user-attachments/assets/0b8e1e91-303c-42a8-bc0b-52710c9aba4d" />

  3. Validate

  # terraform validate

  <img width="1918" height="1022" alt="image" src="https://github.com/user-attachments/assets/08f88cc5-f0e5-4557-93a5-96738c21786a" />

  4. Plan

  # terraform plan

  <img width="1918" height="1020" alt="image" src="https://github.com/user-attachments/assets/45395f44-428c-4aee-945e-89575fa527c4" />

 5. Apply
 
 # terraform apply

 <img width="1918" height="1018" alt="image" src="https://github.com/user-attachments/assets/630ccb7a-2d13-46f1-8dc7-81578742839e" />

main.tf
<img width="1918" height="1012" alt="image" src="https://github.com/user-attachments/assets/9b6fd50b-1cfb-486b-b498-9c85f0548b4c" />
<img width="1915" height="1020" alt="image" src="https://github.com/user-attachments/assets/c7fe89b7-e8e3-43b6-95ac-2fffb9631bee" />
<img width="1918" height="1022" alt="image" src="https://github.com/user-attachments/assets/09c37241-1242-4f97-a523-c767097dd1a3" />
<img width="1918" height="1022" alt="image" src="https://github.com/user-attachments/assets/fb4f68ce-3bfb-4b5b-b6ec-fec5f432e713" />
<img width="1918" height="1021" alt="image" src="https://github.com/user-attachments/assets/078c64a3-285e-4ee2-9623-1cdae3f1bf13" />

Output.tf
<img width="1918" height="1022" alt="image" src="https://github.com/user-attachments/assets/efeb2e20-ef26-4560-a04a-9b45ea4ba837" />

variable.tf
<img width="1918" height="1020" alt="image" src="https://github.com/user-attachments/assets/7ea1e5d7-3db6-42c6-ac40-ce091417be41" />

user_data.sh
<img width="1918" height="1020" alt="image" src="https://github.com/user-attachments/assets/7e366e51-d596-4a0e-b28f-83f0c8875519" />

AWS Resources Created Using Terraform :
VPC
<img width="1917" height="971" alt="image" src="https://github.com/user-attachments/assets/9eeb15f2-1c01-440d-9ee9-7cb864054517" />

Public Subnet
<img width="1916" height="968" alt="image" src="https://github.com/user-attachments/assets/bb369fe6-9f17-4716-87ce-c29776c3e35e" />

Internet GW
<img width="1912" height="976" alt="image" src="https://github.com/user-attachments/assets/574d2753-4be5-4002-a7cf-b8f40179364d" />

Route Table
<img width="1915" height="960" alt="image" src="https://github.com/user-attachments/assets/b6007a3d-4c1d-4dad-a657-51ba625bf1b0" />

EC2 instnace
<img width="1918" height="961" alt="image" src="https://github.com/user-attachments/assets/8085974b-3b95-4b54-ac46-55e01a0d2968" />

Security Group
<img width="1918" height="967" alt="image" src="https://github.com/user-attachments/assets/94f119fa-f767-44e9-888d-43591a59c156" />

Assignment GitHub Repository-
<img width="1918" height="977" alt="image" src="https://github.com/user-attachments/assets/9e412a4e-3e1d-4fdd-937b-d4458d9fa4ca" />

# Application Deployment (CI/CD)
Deployment is fully automated via GitHub Actions.
1. Push code to main branch:
   git add .
   git commit -m "update"
   git push origin main
2. GitHub Actions automatically:
   Builds Docker image
   Pushes image to Amazon ECR
   SSH into EC2
   Pulls latest image
   Stops old container
   Runs new container
# CI/CD using Github Action Workflow:
<img width="1915" height="976" alt="image" src="https://github.com/user-attachments/assets/475cae0a-488c-41cb-b4d8-7ccb1b5f32b6" />
<img width="1916" height="971" alt="image" src="https://github.com/user-attachments/assets/e60f5257-ce39-416b-b9e1-9e911566295e" />

4. GitHub Secrets Required

GitHub → Settings → Secrets and Variables → Actions
Add:
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
EC2_HOST
EC2_USER
EC2_SSH_KEY
ECR_REPOSITORY
No secrets are hardcoded in the repository.

4. Security Implementation

No hardcoded credentials
<img width="1897" height="965" alt="image" src="https://github.com/user-attachments/assets/4ca9108d-aa0c-48a5-9550-770372c6e3c0" />

IAM Role attached to EC2
<img width="1913" height="981" alt="image" src="https://github.com/user-attachments/assets/d40ce05e-f12a-4026-b326-ab5214508d1a" />

Private ECR repository
<img width="1918" height="968" alt="image" src="https://github.com/user-attachments/assets/0646c0ad-f253-4341-bf64-3d7683b8bb93" />

SSH key authentication
<img width="1917" height="972" alt="image" src="https://github.com/user-attachments/assets/baa93630-2526-42c6-96f0-1f1b2690f90a" />

Minimal open ports (22 & 80 only)
<img width="1905" height="977" alt="image" src="https://github.com/user-attachments/assets/ceaf1e34-52cd-4864-ac33-a50bc161b0b6" />

Security group restricts unnecessary access

5. Health Check

Application provides:

  http:/43.204.8.8/health

Returns:

  {"status":"healthy"}
  <img width="1918" height="1022" alt="image" src="https://github.com/user-attachments/assets/2fade35d-a069-42d7-ac71-754ba370da85" />

Used for monitoring and load balancer readiness checks.

6. Logging
   Logs can be accessed via:
     docker logs wanderlust-app
Logs stored locally on EC2 instance. and can also redirect to another location on /home/ubuntu/app.log to access
<img width="1918" height="1017" alt="image" src="https://github.com/user-attachments/assets/5b7b4a7a-673d-4c02-b42a-5de42815a2a8" />

7. Estimated AWS Cost (ap-south-1)
   Resource	Type	Approx Cost per Day
   EC2	t2.micro(Free Tier)   	~$0.30
   EBS	8 GB	                  ~$0.08
   ECR Storage	~1 GB         	~$0.03
   Data Transfer	Minimal       ~$0.05
   Estimated Total Per Day:     ~$0.45 – $0.60 per day

   Monthly Approx:              $13 – $18
   (Within Free Tier if eligible)

# Application Deployment
The application has been successfully deployed on an AWS EC2 instance and is publicly accessible via the instance's public IP address.

🔗 Access URL
http://43.204.8.8

<img width="1915" height="1027" alt="image" src="https://github.com/user-attachments/assets/b0ee8962-9575-4876-8d58-a8ab9255233a" />















  


