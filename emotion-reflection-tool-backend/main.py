
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EmotionRequest(BaseModel):
    text: str

class EmotionResponse(BaseModel):
    emotion: str
    confidence: float

@app.post("/analyze", response_model=EmotionResponse)
def analyze_emotion(data: EmotionRequest):
    #fake logic 
    return {
        "emotion": "Anxious",
        "confidence": 0.87
    }
