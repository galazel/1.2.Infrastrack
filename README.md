# 🏗️ Infrastrack
**AI-Powered Construction Monitoring System**

Infrastrack is a web-based platform that bridges the gap between construction companies and their clients through real-time project monitoring, milestone tracking, and an AI assistant — **Contractor AI** — that answers client questions about their construction in plain, human-friendly language.

---

## ✨ Features

### 🏢 For Contractors
- Create and manage construction projects end-to-end
- Upload progress updates with images, notes, and milestones
- Track project stages (foundation, framing, roofing, finishing, etc.)
- Manage clients assigned to each project

### 👨‍💼 For Clients
- View real-time construction progress with visual and chronological timelines
- Monitor project milestones and upcoming stages
- Ask questions about their project through the AI assistant

### 🤖 Contractor AI
An LLM-powered assistant that answers client construction queries in plain language:
- *"What is the current progress of my house?"*
- *"What stage is the project in?"*
- *"What will happen next?"*

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React, Tailwind CSS, Axios, React Router |
| **Backend** | Spring Boot, Spring Security (JWT), JPA / Hibernate |
| **Authentication** | Amazon Cognito (sign-up, sign-in, role-based access via User Groups) |
| **Storage** | Amazon S3 (project images and files) |
| **Serverless** | AWS Lambda (AI processing and event-driven functions) |
| **Database** | MySQL / PostgreSQL |
| **AI** | LLM-powered Contractor AI assistant |

---

## ☁️ AWS Services

### 🔐 Amazon Cognito
- User sign-up and sign-in with secure token issuance
- JWT tokens validated by Spring Security on every API request
- Role-based access control via **Cognito User Groups** (`Client`, `Contractor`, `Admin`)

### 🗂️ Amazon S3
- Stores all construction progress images and project files
- Presigned URLs used for secure, time-limited file access

### ⚡ AWS Lambda
- Powers serverless AI processing for Contractor AI queries
- Triggered by API Gateway or S3 events as needed

---

## Screenshots
<img width="1906" height="909" alt="Capture" src="https://github.com/user-attachments/assets/4a848d5f-be23-4e0a-88fe-dde490ba3c25" />


