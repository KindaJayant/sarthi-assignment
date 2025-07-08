# EMOTION-REFLECTION-TOOL

A **mobile-first web app** that allows users to reflect on their emotions through short text input, receives a **mock emotional analysis** from a Python backend (**FastAPI**), and presents the response through a calming, empathetic UI.

---

## 🎥 Loom Video

[Watch a quick walkthrough here](https://www.loom.com/share/ac62ea1792084ae9bb9f7d05aeeea965?sid=470f7d13-9df0-4bd3-a683-0bbe60d0e5c6)

---

## ✨ Features

- 📱 **Mobile-first responsive design**
- 💬 Simple input box for text reflections
- ⚡ Real-time API communication with FastAPI backend
- 🧠 Returns mock emotion + confidence score (e.g., `{ "emotion": "Anxious", "confidence": 0.85 }`)
- 🌈 Styled interactive orb + calming UI colors

---

## 🛠️ Tech Stack

### Frontend

- React + TypeScript
- Vite for fast dev server
- Custom CSS (Orb animation, responsive layout)
- REST API integration with `fetch`

### Backend

- FastAPI (Python)
- `pydantic` for request/response validation
- CORS middleware for local dev with React

---

## 📦 Project Structure

```
emotion-reflection-tool/
 ├── backend/                   # FastAPI backend
 │   ├── main.py                # FastAPI app
 │   ├── requirements.txt       # Python dependencies
 ├── frontend/                  # React frontend (Vite)
 │   ├── src/                   # React components
 │   ├── index.html
 │   ├── package.json
 ├── venv/                      # Python virtual environment (not pushed to Git)
 ├── README.md
 ├── .gitignore
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/KindaJayant/sarthi-assignment.git
cd sarthi-assignment
```

---

### 2️⃣ Start the backend (FastAPI)

```bash
# Create virtual environment
python -m venv venv

# Activate it:
# Windows:
.\venv\Scripts\activate

# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r backend/requirements.txt

# Run the FastAPI server
uvicorn backend.main:app --reload
```

Backend will be available at: [http://127.0.0.1:8000](http://127.0.0.1:8000)  
Interactive docs: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

### 3️⃣ Start the frontend (React)

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at: [http://localhost:5173](http://localhost:5173)

---

## ✅ How it works

1. User types a short reflection (e.g., *“I feel nervous about my first job interview.”*)
2. Click **Submit**
3. Frontend sends the text to `/analyze` API (FastAPI)
4. Backend returns a fake `emotion` + `confidence`
5. Frontend displays the result with an animated orb + styled card

---

## 🙌 Author

**Jayant Singh**  
[GitHub](https://github.com/KindaJayant)

---

## 📄 License

For internship assignment demo purposes only.
