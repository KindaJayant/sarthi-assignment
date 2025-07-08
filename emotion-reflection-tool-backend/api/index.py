from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from mangum import Mangum

app = FastAPI()

@app.get("/")
def home():
    return {"message": "FastAPI is running on Vercel!"}

@app.post("/analyze")
async def analyze(request: Request):
    data = await request.json()
    text = data.get("text", "")

    # Simulate emotion analysis
    return {
        "emotion": "Anxious",
        "confidence": 0.87
    }

# Required for Vercel's serverless deployment
handler = Mangum(app)
