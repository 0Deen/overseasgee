"use client";

import { useEffect, useRef, useState } from "react";
import { ChatMessage } from "@/lib/types";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import QuickReplies, { DEFAULT_QUICK_REPLIES } from "./QuickReplies";

const WELCOME: ChatMessage = {
  role: "assistant",
  content:
    "Hi 👋 Welcome to Ajira Majuu. I'm the Ajira Majuu recruitment assistant — I can help you learn about overseas job opportunities, requirements, applications, and next steps. What would you like help with today?",
};

export default function ChatWindow({ sessionId }: { sessionId: string }) {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState<string[]>(DEFAULT_QUICK_REPLIES);
  const [errorBanner, setErrorBanner] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    setErrorBanner("");
    setQuickReplies([]);
    const nextMessages = [...messages, { role: "user", content: trimmed } as ChatMessage];
    setMessages(nextMessages);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, messages: nextMessages }),
      });

      if (!res.ok && res.status !== 429) {
        throw new Error("Request failed");
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setErrorBanner(
        "I'm having trouble responding right now. Please try again in a moment, or leave your details below and our team will reach out."
      );
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div className="flex h-full flex-col">
      <div ref={scrollRef} className="chat-scroll flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((m, i) => (
          <MessageBubble key={i} message={m} />
        ))}
        {isTyping && <TypingIndicator />}
        {errorBanner && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
            {errorBanner}
          </div>
        )}
      </div>

      <QuickReplies options={quickReplies} onSelect={sendMessage} disabled={isTyping} />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(input);
        }}
        className="flex items-center gap-2 border-t border-brand-purple/10 bg-white/60 p-3 backdrop-blur"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message…"
          className="flex-1 rounded-full border border-brand-purple/15 bg-white px-4 py-2.5 text-sm focus:border-brand-purple focus:outline-none"
          aria-label="Message"
        />
        <button
          type="submit"
          disabled={isTyping || !input.trim()}
          className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-purple text-white transition hover:bg-brand-purple-deep disabled:opacity-40"
          aria-label="Send message"
        >
          ➤
        </button>
      </form>
    </div>
  );
}
