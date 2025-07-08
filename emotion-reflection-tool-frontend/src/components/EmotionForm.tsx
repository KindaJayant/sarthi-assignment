import React, { useState } from "react";
import type { EmotionResponse } from "../types";
import { analyzeEmotion } from "../api/emotionAPI";
import "./EmotionForm.css";

interface Props {
  onResult: (result: EmotionResponse) => void;
  onError: (error: string) => void;
  onLoading: (loading: boolean) => void;
}

const EmotionForm: React.FC<Props> = ({ onResult, onError, onLoading }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onError("");        // Clear previous error
    onLoading(true);    // Show loading state

    try {
      const result = await analyzeEmotion({ text });
      onResult(result); // Pass result to App.tsx
    } catch (err) {
      onError("Something went wrong. Please try again.");
    } finally {
      onLoading(false); // Hide loading state
    }
  };

  return (
    <form onSubmit={handleSubmit} className="emotion-form">
      <textarea
        placeholder="Type how you feel..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Reflect</button>
    </form>
  );
};

export default EmotionForm;
