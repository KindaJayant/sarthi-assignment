export interface EmotionRequest {
  text: string;
}

export interface EmotionResponse {
  emotion: string;
  confidence: number;
}

export async function analyzeEmotion(
  input: EmotionRequest
): Promise<EmotionResponse> {
  try {
    const response = await fetch("http://localhost:8000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      throw new Error("Server responded with an error");
    }

    const data = await response.json();
    return {
      emotion: data.emotion,
      confidence: data.confidence,
    };
  } catch (error) {
    console.error("Error analyzing emotion:", error);
    throw new Error("Something went wrong while analyzing your emotion.");
  }
}
