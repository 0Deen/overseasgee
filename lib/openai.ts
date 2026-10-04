import OpenAI from "openai";

let client: OpenAI | null = null;

/**
 * Lazily instantiate the OpenAI client server-side only.
 * Never import this file from a client component.
 */
export function getOpenAIClient(): OpenAI {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not configured on the server.");
  }
  if (!client) {
    client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return client;
}
