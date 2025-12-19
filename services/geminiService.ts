
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getShiftInsights = async (context: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze the following shift data and provide operational insights: ${context}`,
    config: {
      systemInstruction: "You are the ShiftFlow AI Optimizer. Provide professional, concise staffing advice based on the provided data. Focus on efficiency and employee well-being.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          insights: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                recommendation: { type: Type.STRING },
                impact: { type: Type.STRING, enum: ['High', 'Medium', 'Low'] }
              },
              required: ['title', 'description', 'recommendation', 'impact']
            }
          }
        },
        required: ['insights']
      }
    }
  });

  try {
    return JSON.parse(response.text || '{"insights": []}');
  } catch (e) {
    console.error("Failed to parse AI response", e);
    return { insights: [] };
  }
};

export const chatWithShiftFlow = async (message: string, history: any[]) => {
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "You are the ShiftFlow System V Assistant. Help users manage their workforce, answer questions about labor laws, and suggest shift optimizations."
    }
  });
  
  // Note: Simplification of history for demonstration
  const response = await chat.sendMessage({ message });
  return response.text;
};
