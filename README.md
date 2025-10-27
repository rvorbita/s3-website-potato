# 🥔 s3-website-potato

A simple **static website** hosted on **Amazon S3**, automated with **AWS CodePipeline** for seamless deployment.  
This project demonstrates how to build, host, and continuously deploy a static website using AWS services.

---

## 🚀 Overview

The **s3-website-potato** project serves as a beginner-friendly example of hosting a static website using **Amazon S3** and automating deployments with **AWS CodePipeline**.  

It covers the following AWS components:
- **Amazon S3** – Static website hosting  
- **AWS CodePipeline** – Continuous integration and delivery (CI/CD)  
- **AWS CodeBuild (optional)** – Build automation step (if applicable)  
- **AWS IAM** – Secure permissions and roles management  

---

## ⚙️ Setup Instructions

### 1️⃣ Create an S3 Bucket
1. Go to the **AWS Management Console** → **S3**  
2. Click **Create bucket**
3. Enable **Static website hosting**
4. Upload your project files (`index.html`, `css/`, etc.)
5. Make the bucket **public** (or use CloudFront for secure delivery)

---

### 2️⃣ Configure CodePipeline
1. Go to **AWS CodePipeline**
2. Click **Create Pipeline**
3. Add a **Source Stage**:
   - Choose **GitHub**, **CodeCommit**, or **S3** as your source
4. Add a **Deploy Stage**:
   - Select **Amazon S3** as the deployment provider
   - Choose your `s3-website-potato` bucket
5. Review and create the pipeline

Your website will automatically update every time you push changes to your repository 🎉

---

## 🌍 Accessing the Website

Once deployed, your static site will be available at:

http://<your-bucket-name>.s3-website-<aws-region>.amazonaws.com


or via **CloudFront CDN** if you configured one.

---

## 🔒 Best Practices
- Use **CloudFront** for global content delivery and HTTPS support  
- Store environment variables and build configurations in **CodeBuild** (if used)  
- Restrict bucket access using **IAM roles**  
- Enable **versioning** and **logging** for the S3 bucket  

---

## 🧰 Technologies Used
- **Amazon S3** – Static website hosting  
- **AWS CodePipeline** – CI/CD automation  
- **AWS IAM** – Security and access control  
- **(Optional)** AWS CodeBuild – Build automation  

---

## 📸 Example Use Cases
- Hosting personal portfolio or blog  
- Deploying frontend for static web apps  
- Learning AWS DevOps automation with CodePipeline  

---

## 📜 License
This project is licensed under the **MIT License** – feel free to use, modify, and distribute.

---

## 🏁 Project Conclusion

The **s3-website-potato** project highlights the simplicity and power of AWS for modern web hosting.  
By leveraging **Amazon S3** for static website hosting and **AWS CodePipeline** for continuous deployment, we achieved a fully automated workflow that minimizes manual effort and ensures fast, reliable updates.  

This setup demonstrates a foundational **DevOps pipeline** suitable for beginners and scalable enough for professional use.  
It’s an excellent starting point for anyone looking to explore **serverless web hosting** and **CI/CD automation** in AWS.




