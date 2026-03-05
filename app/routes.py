from fastapi import APIRouter
from datetime import datetime
from fastapi import HTTPException
from bson.errors import InvalidId
from app.schemas import Note
from app.database import notes_collection
from bson import ObjectId

router = APIRouter()

# Create a new note

@router.post("/notes")
async def create_note(note: Note):

    note_dict = note.model_dump()
    note_dict["created_at"] = datetime.utcnow()
    note_dict["updated_at"] = None

    result = await notes_collection.insert_one(note_dict)

    return {
        "message": "Note created successfully",
        "id": str(result.inserted_id)
    }

# GET /notes (Fetch all Notes from MongoDB)

@router.get("/notes")
async def get_notes():

    notes = []

    async for note in notes_collection.find():
        note["_id"] = str(note["_id"])
        notes.append(note)

    return notes

# GET /notes/{id} (Fetch a single Note by ID from MongoDB)

@router.get("/notes/{id}")
async def get_note(id: str):

    try:
        note = await notes_collection.find_one({"_id": ObjectId(id)})
    except (InvalidId, Exception):
        raise HTTPException(status_code=400, detail="Invalid ID")

    if note:
        note["_id"] = str(note["_id"])
        return note

    return {"error": "Note not found"}

# PUT /notes/{id} (Update a Note by ID in MongoDB)

@router.put("/notes/{id}")
async def update_note(id: str, note: Note):

    try:
        update_data = {
            "title": note.title,
            "content": note.content,
            "updated_at": datetime.utcnow()
        }

        result = await notes_collection.update_one(
            {"_id": ObjectId(id)},
            {"$set": update_data}
        )

    except (InvalidId, Exception):
        raise HTTPException(status_code=400, detail="Invalid ID")

    if result.matched_count == 1:
        return {"message": "Note updated successfully"}

    return {"error": "Note not found"}

# DELETE /notes/{id} (Delete a Note by ID from MongoDB)

@router.delete("/notes/{id}")
async def delete_note(id: str):

    try:
        result = await notes_collection.delete_one({"_id": ObjectId(id)})
    except (InvalidId, Exception):
        raise HTTPException(status_code=400, detail="Invalid ID")

    if result.deleted_count == 1:
        return {"message": "Note deleted successfully"}

    return {"error": "Note not found"}