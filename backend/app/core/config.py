from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "AI Career Resume Assistant API"
    app_version: str = "0.1.0"
    debug: bool = True

    api_prefix: str = "/api"

    frontend_url: str = "http://localhost:5173"

    database_url: str = (
        "postgresql://resume_user:resume_password@localhost:5432/resume_db"
    )

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )


settings = Settings()