// src/types/index.ts
export interface EmotionRequest {
  text: string;
}

export interface EmotionResponse {
  emotion: string;
  confidence: number;
}
