from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# ✅ CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # or ["*"] for any origin (dev only)
    allow_credentials=True,
    allow_methods=["*"],  # ← this is critical
    allow_headers=["*"],  # ← this too
)

@app.post("/analyze")
async def analyze(request: Request):
    data = await request.json()
    text = data.get("text", "")
    return {
        "emotion": "Anxious",
        "confidence": 0.87
    }
