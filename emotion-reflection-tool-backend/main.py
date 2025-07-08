# backend/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# 👇 Allow React dev server to connect (Vite: localhost:5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextInput(BaseModel):
    text: str

@app.post("/analyze")
async def analyze_text(input: TextInput):
    return {"emotion": "Anxious", "confidence": 0.87}

@app.get("/")
async def root():
    return {"message": "Backend is running ✅"}
