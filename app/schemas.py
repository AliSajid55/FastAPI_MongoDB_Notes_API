from pydantic import BaseModel
from datetime import datetime

class Note(BaseModel):
    title: str
    content: str
    created_at: datetime | None = None
    updated_at: datetime | None = None