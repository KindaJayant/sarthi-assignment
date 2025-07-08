# EMOTION-REFLECTION-TOOL

A mobile-first web app that allows users to reflect their emotions through text, receives a mock emotional analysis via a Python backend (FastAPI), and presents the response with an empathetic UI.

## ✨ Features

- 📱 Mobile-first responsive design  
- 💬 Input box for emotional reflection  
- ⚡ Real-time API communication  
- 🧠 Returns mock emotion + confidence score  
- 🌈 Styled orb + calming UI  

---

## 🛠️ Tech Stack

Frontend:
- React + TypeScript
- Vite
- Custom CSS
- REST API integration

Backend:
- FastAPI (Python)
- Pydantic for request/response validation
- CORS middleware

---

## 📦 Project Structure

Frontend (React):
- /src
  - /components – React components (form, result, orb)
  - /api – emotionAPI.ts for backend requests
  - /types – TypeScript types (EmotionRequest, EmotionResponse)
  - /styles – global + component-specific CSS

Backend (FastAPI):
- main.py – FastAPI app with POST /analyze route
- requirements.txt – Python dependencies

---

## ✅ Requirements Coverage

| Assignment Task                       | Our Implementation                            |
|--------------------------------------|------------------------------------------------|
| TypeScript + React (or Next.js)      | ✅ React + TypeScript (Vite)                   |
| Textarea + Submit button             | ✅ EmotionForm.tsx                             |
| Loading state after submit           | ✅ "Analyzing your reflection..." message      |
| Display result nicely                | ✅ EmotionResult card with styled output       |
| Python API (Flask or FastAPI)        | ✅ FastAPI with /analyze route                 |
| POST request handling                | ✅ JSON { "text": "..." } → mock response      |
| Return { emotion, confidence } JSON  | ✅ Returns hardcoded emotion + confidence      |
| Frontend & backend connected         | ✅ Via fetch() in emotionAPI.ts                |
| Graceful error handling              | ✅ try/catch + UI error message                |
| Code structure & polish              | ✅ Modular files, clear styles, types          |
| Mobile responsive UI                 | ✅ CSS layout, orb design, centered content    |

---

## 🚀 Setup Instructions

Follow these steps to run both the frontend and backend locally:

---

### 🔧 Backend (FastAPI)

1. Create a Python virtual environment:

```
In the terminal type
python -m venv venv
# Then activate it:
# Mac/Linux:
source venv/bin/activate
# Windows:
.\venv\Scripts\activate
```
2. Install Dependencies
```
pip install fastapi uvicorn
```
3. Run the server:
```
uvicorn main:app --reload
```
4. Your API will be available at:
```
http://127.0.0.1:8000/analyze
```
5. (Optional) Test at Swagger Docs
```
http://127.0.0.1:8000/docs
```

### 💻 Frontend (React)
1. Open a new terminal in the frontend folder.
2. Install Node dependencies:
```
npm install
```
3. Run the development server (make sure to be in the right directory)
```
npm run dev
```
4. Open the frontend at:
```
http://localhost:5173/
```

## 🧪 Example Interaction
User Input : "I feel nervous about my first job interview"
API Response: 
    {
      "emotion" : "Anxious",
      "confidence" : 0.87
   }

## 📝 Notes
App is mobile-first but responsive across screen sizes.

The orb design adds visual empathy.

Emotion results are mock/fake — for demo only.

CORS is enabled on backend for local testing.
