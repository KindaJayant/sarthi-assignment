// src/api/emotionAPI.ts
import type { EmotionRequest, EmotionResponse } from "../types";

export async function analyzeEmotion(
  data: EmotionRequest
): Promise<EmotionResponse> {
  const response = await fetch("http://127.0.0.1:8000/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to analyze emotion");
  }

  return response.json();
}
