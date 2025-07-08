import { useState } from "react";
import Orb from "./components/Orb";
import EmotionForm from "./components/EmotionForm";
import EmotionResult from "./components/EmotionResult";
import type { EmotionResponse } from "./types";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EmotionResponse | null>(null);
  const [error, setError] = useState("");

  return (
    <div className="page-container">
      <div className="app">
        <Orb />
        <h1>Hello. Let’s find out what’s going on inside.</h1>
        <EmotionForm
          onResult={setResult}
          onError={setError}
          onLoading={setLoading}
        />
        {loading && <p className="status">Analyzing your reflection...</p>}
        {result && !loading && <EmotionResult result={result} />}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default App;