# EMOTION-REFLECTION-TOOL

A **mobile-first web app** that allows users to reflect on their emotions through text, receives a mock emotional analysis via a Python backend (**FastAPI**), and presents the response with an empathetic UI.

## 🎥 Loom Video
 - https://www.loom.com/share/ac62ea1792084ae9bb9f7d05aeeea965?sid=470f7d13-9df0-4bd3-a683-0bbe60d0e5c6

---

## ✨ Features

- 📱 Mobile-first responsive design
- 💬 Input box for emotional reflection
- ⚡ Real-time API communication
- 🧠 Returns mock emotion + confidence score
- 🌈 Styled orb + calming UI

---

## 🛠️ Tech Stack

**Frontend**
- React + TypeScript
- Vite
- Custom CSS
- REST API integration

**Backend**
- FastAPI (Python)
- Pydantic for request/response validation
- CORS middleware

---

## 📦 Project Structure

### Frontend (React)
emotion-reflection-tool/
├── backend/ # FastAPI backend
│ ├── main.py # FastAPI app
│ ├── requirements.txt # Python dependencies
├── frontend/ # React frontend (Vite)
│ ├── src/ # React components
│ ├── index.html
│ ├── package.json
├── venv/ # Python virtual environment (not pushed to Git)
├── README.md
├── .gitignore


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/KindaJayant/sarthi-assignment.git
cd sarthi-assignment
```
### 2️⃣ Start the backend (FastAPI)
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

The backend will be available at http://127.0.0.1:8000
Interactive API docs: http://127.0.0.1:8000/docs

### 3️⃣ Start the fronted (React)

cd frontend
npm install
npm run dev

### ✅ How it works

User types a short reflection, e.g. “I feel nervous about my first job interview.”

Click Submit

Frontend sends the text to /analyze API (FastAPI)

Backend returns a fake emotion and confidence

Frontend displays the result with an animated orb and styled card

🙌 Author
Jayant Singh
GitHub

