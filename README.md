# AI Career Resume Assistant

An AI-powered resume builder and career optimization platform designed for college students and freshers.

## 🚀 Project Overview

AI Career Resume Assistant helps students create professional resumes, analyze them against job descriptions, identify missing skills and keywords, and improve their resumes using AI.

The system combines a deterministic ATS analysis engine with generative AI to provide measurable resume analysis and personalized recommendations.

## ✨ Planned Features

* User registration and authentication
* Resume builder
* Resume upload
* PDF/DOCX resume parsing
* Multiple resume management
* Four professional resume templates
* Live resume preview
* Job description analysis
* ATS-oriented resume scoring
* Keyword matching
* Missing keyword detection
* Skill-gap analysis
* AI-powered content improvement
* Resume tailoring for specific jobs
* AI-generated cover letters
* PDF export
* DOCX export
* Public resume sharing
* Privacy and account management

## 🧠 AI Architecture

The application uses a hybrid AI architecture.

### Deterministic Analysis

Python-based analysis will calculate:

* Keyword matching
* Skill matching
* Section completeness
* ATS formatting checks
* Resume/job relevance

### Generative AI

Gemini will be used for:

* Resume content improvement
* Job description interpretation
* Recommendations
* Resume tailoring
* Cover-letter generation

The AI will not be allowed to fabricate user qualifications, experience, skills, certifications, achievements or metrics.

## 🛠️ Technology Stack

| Layer               | Technology       |
| ------------------- | ---------------- |
| Frontend            | React + Vite     |
| Styling             | Bootstrap        |
| Backend             | Python + FastAPI |
| Database            | PostgreSQL       |
| ORM                 | SQLAlchemy       |
| Migrations          | Alembic          |
| AI                  | Gemini           |
| Authentication      | JWT              |
| Containerization    | Docker           |
| CI/CD               | GitHub Actions   |
| Production Database | Supabase         |
| Deployment          | Render           |

## 🏗️ Architecture

```text
User
 │
 ▼
React + Vite
 │
 │ REST API
 ▼
FastAPI
 ├── ATS Engine
 ├── AI Services
 └── Authentication
       │
       ▼
   PostgreSQL
```

## 🐳 Local Development

The project will use Docker Compose to run:

```text
Frontend
Backend
PostgreSQL
```

This allows the complete application to be started using a single command.

## 📁 Repository Structure

```text
frontend/       React application
backend/        FastAPI application
docs/           Project documentation
.github/        GitHub Actions
docker-compose.yml
.env.example
README.md
```

## 🎓 Academic Project

This project is being developed as a B.Tech college project.

The objective is to demonstrate practical implementation of:

* Full-stack development
* Artificial intelligence
* Natural language processing
* Database management
* REST API development
* Docker/containerization
* CI/CD
* Cloud deployment

## 📌 Project Status

Currently under development.

### Development Roadmap

* [x] Requirements and SRS
* [ ] GitHub repository setup
* [ ] React frontend
* [ ] FastAPI backend
* [ ] Docker environment
* [ ] PostgreSQL database
* [ ] Authentication
* [ ] Resume builder
* [ ] Resume parsing
* [ ] ATS engine
* [ ] AI integration
* [ ] Export
* [ ] Testing
* [ ] Cloud deployment

## 👥 Contributors

Syed Sheeraz Zaidi

## 📄 License

MIT License
