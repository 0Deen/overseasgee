export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  role: ChatRole;
  content: string;
  timestamp?: string;
}

export type LeadIntent =
  | "HIGH"
  | "MEDIUM"
  | "LOW"
  | "SUPPORT"
  | "EMPLOYER"
  | "GENERAL";

export interface LeadData {
  sessionId: string;
  name?: string;
  phone?: string;
  email?: string;
  preferredCountry?: string;
  preferredJob?: string;
  experience?: string;
  passportStatus?: string;
  applicationStatus?: string;
  intent: LeadIntent;
  leadScore: number;
  language?: string;
  summary: string;
  transcript: ChatMessage[];
  timestamp: string;
}

export interface ChatRequestBody {
  sessionId: string;
  messages: ChatMessage[];
}

export interface ChatResponseBody {
  reply: string;
  quickReplies?: string[];
}
