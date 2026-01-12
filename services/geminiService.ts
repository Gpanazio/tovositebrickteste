import { GoogleGenAI, Type } from "@google/genai";
import { ManifestoContent } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateManifesto = async (): Promise<ManifestoContent> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-latest",
      contents: "Write a short, aggressive, avant-garde manifesto for a video production company called 'MONOLITH'. The tone should be disruptive, cryptic, and obsessed with visual perfection. Return a JSON object with 'headline' (3-5 words) and 'body' (2 sentences).",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING },
            body: { type: Type.STRING },
          },
          required: ["headline", "body"],
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("No text returned");
    
    return JSON.parse(text) as ManifestoContent;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback content in case of API failure or missing key
    return {
      headline: "VISUAL ENTROPY CONTROLLED",
      body: "We do not capture reality; we dismantle it to reconstruct a sharper truth. The frame is not a window, it is a weapon."
    };
  }
};
