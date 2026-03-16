import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateAndSave(prompt: string, filename: string, aspectRatio: string) {
  console.log(`Generating ${filename}...`);
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        const buffer = Buffer.from(base64Data, 'base64');
        fs.writeFileSync(path.join(process.cwd(), 'public', filename), buffer);
        console.log(`Saved ${filename}`);
        return;
      }
    }
    console.log(`No image found for ${filename}`);
  } catch (e) {
    console.error(`Error generating ${filename}:`, e);
  }
}

async function main() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  
  await Promise.all([
    generateAndSave("A high-quality, professional photo of a historical building undergoing careful restoration and modern construction, scaffolding, sunny day, highly detailed, 8k resolution.", "hero.jpeg", "16:9"),
    generateAndSave("Close up of skilled hands restoring intricate historical architectural details on a stone facade, professional masonry, high quality.", "problem.jpeg", "4:3"),
    generateAndSave("A beautiful, grand historical theater building in Kaunas, Lithuania, restored facade, architectural photography.", "theater.jpeg", "16:9"),
    generateAndSave("A small, beautiful historical chapel in Veliuona, Lithuania, restored, surrounded by nature, architectural photography.", "chapel.jpeg", "16:9")
  ]);
  
  console.log("All images generated.");
}

main();
