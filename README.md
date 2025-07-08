Of course! Here is the content you provided, formatted as a clean README.md file. You can copy and paste the entire content below.

EMOTION-REFLECTION-TOOL

A mobile-first web app that allows users to reflect on their emotions through text, receives a mock emotional analysis via a Python backend (FastAPI), and presents the response with an empathetic UI.

🎥 Loom Video

View Demo on Loom

✨ Features

📱 Mobile-first responsive design

💬 Input box for emotional reflection

⚡ Real-time API communication

🧠 Returns mock emotion + confidence score

🌈 Styled orb + calming UI

🛠️ Tech Stack
Frontend

React + TypeScript

Vite

Custom CSS

REST API integration (using fetch)

Backend

FastAPI (Python)

Pydantic for request/response validation

CORS middleware

📦 Project Structure
Generated code
.
├── backend/                  # FastAPI backend
│   ├── main.py               # FastAPI app
│   └── requirements.txt      # Python dependencies
├── frontend/                 # React frontend (Vite)
│   ├── public/
│   ├── src/                  # React components, hooks, and styles
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
├── venv/                     # Python virtual environment (ignored by Git)
├── .gitignore
└── README.md

⚙️ Setup and Installation
1️⃣ Clone the repository
Generated bash
git clone https://github.com/KindaJayant/sarthi-assignment.git
cd sarthi-assignment
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Bash
IGNORE_WHEN_COPYING_END
2️⃣ Start the Backend (FastAPI)

Create and activate a virtual environment:

Generated bash
# Create the environment
python -m venv venv

# Activate it
# On Windows:
.\venv\Scripts\activate

# On macOS/Linux:
source venv/bin/activate
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Bash
IGNORE_WHEN_COPYING_END

Install dependencies:

Generated bash
pip install -r backend/requirements.txt
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Bash
IGNORE_WHEN_COPYING_END

Run the FastAPI server:

Generated bash
uvicorn backend.main:app --reload
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Bash
IGNORE_WHEN_COPYING_END

The backend will now be running at http://127.0.0.1:8000.
You can view the interactive API documentation at http://127.0.0.1:8000/docs.

3️⃣ Start the Frontend (React)

In a new terminal window, navigate to the frontend directory and run the following commands:

Go to the frontend directory:

Generated bash
cd frontend
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Bash
IGNORE_WHEN_COPYING_END

Install dependencies:

Generated bash
npm install
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Bash
IGNORE_WHEN_COPYING_END

Run the React development server:

Generated bash
npm run dev
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Bash
IGNORE_WHEN_COPYING_END

The frontend will be available at http://localhost:5173 (or another port if 5173 is in use).

✅ How It Works

A user types a short reflection into the text area, for example: “I feel nervous about my first job interview.”

The user clicks the Submit button.

The React frontend sends the text to the /analyze API endpoint on the FastAPI backend.

The backend processes the request and returns a JSON response with a fake emotion and a confidence score (e.g., {"emotion": "Anxious", "confidence": 0.88}).

The frontend receives the response and dynamically displays the result with a color-coded, animated orb and a styled information card.

🙌 Author

Jayant Singh

GitHub: @KindaJayant
