// src/components/EmotionResult.tsx

import type { EmotionResponse } from "../types";
import "./EmotionResult.css";

interface EmotionResultProps {
  result: EmotionResponse;
}

export default function EmotionResult({ result }: EmotionResultProps) {
  return (
    <div className="result-card">
      <h2>Result</h2>
      <p><strong>Emotion:</strong> {result.emotion}</p>
      <p><strong>Confidence:</strong> {(result.confidence * 100).toFixed(1)}%</p>
    </div>
  );
}
