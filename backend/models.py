"""Pydantic models define the shape of data going in and out of the API.

FastAPI uses these to automatically validate request bodies and to document the
API. If a request doesn't match `ContactCreate`, FastAPI rejects it with a 422
error before our code even runs.
"""

from typing import Optional
from pydantic import BaseModel, EmailStr, Field


class ContactCreate(BaseModel):
    """Incoming payload for the contact form."""

    name: str = Field(min_length=1, max_length=255)
    email: EmailStr
    subject: Optional[str] = Field(default=None, max_length=255)
    message: str = Field(min_length=1)


class ContactResponse(BaseModel):
    """What we send back to the frontend after a submission."""

    success: bool
    message: str
