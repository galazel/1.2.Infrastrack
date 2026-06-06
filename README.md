# 🏗️ Infrastrack
**AI-Powered Construction Monitoring System**

Infrastrack is a web-based platform that bridges the gap between construction companies and their clients through real-time project monitoring, milestone tracking, and an AI assistant — **Contractor AI** — that answers client questions about their construction in plain, human-friendly language.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [AWS Services](#-aws-services)
- [Authentication Flow](#-authentication-flow)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Contributing](#-contributing)
- [License](#-license)

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
| **Database** | PostgreSQL |
| **AI** | LLM-powered Contractor AI assistant |

---

## ☁️ AWS Services

### 🔐 Amazon Cognito
Handles all authentication and authorization:
- User sign-up and sign-in with secure token issuance
- JWT tokens validated by Spring Security on every API request
- Role-based access control via **Cognito User Groups** (`Client`, `Contractor`, `Admin`)

```js
// Example: checking role from decoded JWT payload
const groups = payload["cognito:groups"];
if (groups?.includes("Contractor")) {
  // Grant access to project update endpoints
}
```

### 🗂️ Amazon S3
- Stores all construction progress images and project files
- Contractors upload media which is securely stored and served to clients
- Presigned URLs used for secure, time-limited file access

### ⚡ AWS Lambda
- Powers serverless AI processing for Contractor AI queries
- Handles event-driven backend tasks without dedicated server infrastructure
- Triggered by API Gateway or S3 events as needed

---

## 🔐 Authentication Flow

```
User ──► Login via Cognito ──► JWT issued
                                    │
                                    ▼
Frontend ──► Sends JWT in Authorization header with every request
                                    │
                                    ▼
Spring Security ──► Validates JWT, extracts roles from Cognito Groups
                                    │
                                    ▼
API ──► Grants or restricts access based on role (Client / Contractor / Admin)
```

**Token structure example:**
```json
{
  "sub": "user-uuid",
  "cognito:groups": ["Contractor"],
  "email": "contractor@example.com",
  "exp": 1234567890
}
```

---

## 📁 Project Structure

```
infrastrack/
├── frontend/                  # React + Tailwind frontend
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # Route-level pages
│   │   ├── hooks/             # Custom React hooks
│   │   ├── services/          # Axios API calls
│   │   └── aws/               # Cognito / Amplify config
│   └── package.json
│
├── backend/                   # Spring Boot backend
│   ├── src/main/java/
│   │   ├── controller/        # REST controllers
│   │   ├── service/           # Business logic
│   │   ├── repository/        # JPA repositories
│   │   ├── model/             # Entity classes
│   │   ├── security/          # JWT filter, Spring Security config
│   │   └── ai/                # Contractor AI integration
│   └── pom.xml
│
└── lambda/                    # AWS Lambda functions
    └── contractor-ai/         # AI processing handler
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Java 17+
- Maven 3.8+
- AWS account with Cognito, S3, and Lambda configured
- MySQL or PostgreSQL database

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env        # Fill in your Cognito and API config
npm run dev
```

### Backend Setup

```bash
cd backend
cp src/main/resources/application.example.yml src/main/resources/application.yml
# Fill in DB credentials, JWT secret, and AWS config
mvn spring-boot:run
```

---

## ⚙️ Environment Variables

### Frontend (`.env`)

```env
VITE_API_BASE_URL=http://localhost:8080
VITE_COGNITO_USER_POOL_ID=us-east-1_XXXXXXXXX
VITE_COGNITO_CLIENT_ID=your_client_id
VITE_COGNITO_REGION=us-east-1
VITE_S3_BUCKET_NAME=your-bucket-name
```

### Backend (`application.yml`)

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/infrastrack
    username: your_db_user
    password: your_db_password

aws:
  cognito:
    region: us-east-1
    user-pool-id: us-east-1_XXXXXXXXX
  s3:
    bucket-name: your-bucket-name
    region: us-east-1

app:
  jwt:
    secret: your_jwt_secret
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## 📄 License

[MIT](LICENSE) · Built with ☕ and concrete 🧱

---

> **Infrastrack** — Bringing transparency to every brick laid.
