from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os

load_dotenv()
# MongoDB Atlas connection string
MONGO_URL = os.getenv("MONGO_URL")

client = AsyncIOMotorClient(MONGO_URL)

database = client["fastapi_mongodb_notes_api"]

notes_collection = database["notes"]
