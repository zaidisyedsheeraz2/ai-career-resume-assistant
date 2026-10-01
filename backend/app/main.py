from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings

from sqlalchemy import text

from app.core.database import engine

app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    description="AI-powered resume and career optimization platform.",
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.frontend_url],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "AI Career Resume Assistant API",
        "version": settings.app_version,
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }

@app.get("/api/test")
def test_api():
    return {
        "message": "React successfully connected to FastAPI!"
    }

@app.get("/health/db")
def database_health_check():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        return {
            "status": "healthy",
            "database": "connected",
        }

    except Exception:
        return {
            "status": "unhealthy",
            "database": "disconnected",
        }