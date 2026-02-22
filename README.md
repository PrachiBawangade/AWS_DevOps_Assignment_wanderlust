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

- Infrastructure Deployment Steps (Terraform)
  1. Prerequisites
  
  Install:

  Terraform
  AWS CLI
  Git
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














  


