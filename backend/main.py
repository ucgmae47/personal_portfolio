"""FastAPI application entry point.

Run locally with:
    uvicorn main:app --reload --port 8000
"""

import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from database import get_connection
from models import ContactCreate, ContactResponse

load_dotenv()

app = FastAPI(title="Portfolio API", version="1.0.0")

# CORS: the browser blocks cross-origin requests unless the server opts in.
# We read the allowed frontend origins from the environment.
origins = [
    o.strip()
    for o in os.getenv("FRONTEND_ORIGINS", "http://localhost:5173").split(",")
    if o.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health_check():
    """Simple endpoint to confirm the API is up."""
    return {"status": "ok"}


@app.post("/api/contact", response_model=ContactResponse)
def create_contact(payload: ContactCreate):
    """Validate a contact submission and store it in MySQL."""
    conn = None
    cursor = None
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute(
            """
            INSERT INTO contact_submissions (name, email, subject, message)
            VALUES (%s, %s, %s, %s)
            """,
            (payload.name, payload.email, payload.subject, payload.message),
        )
        conn.commit()
    except Exception as exc:
        # Avoid leaking internal details to the client; log for ourselves.
        print(f"[contact] database error: {exc}")
        raise HTTPException(
            status_code=500,
            detail="Could not save your message. Please try again later.",
        )
    finally:
        if cursor is not None:
            cursor.close()
        if conn is not None:
            conn.close()  # returns the connection to the pool

    return ContactResponse(
        success=True,
        message="Thanks for reaching out! Your message has been received.",
    )
