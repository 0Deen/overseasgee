"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ChatWindow from "./ChatWindow";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");

  useEffect(() => {
    // one session id per browser tab/session
    const existing = sessionStorage.getItem("ajira-session-id");
    if (existing) {
      setSessionId(existing);
    } else {
      const id = uuidv4();
      sessionStorage.setItem("ajira-session-id", id);
      setSessionId(id);
    }
  }, []);

  useEffect(() => {
    // prevent background scroll when the mobile full-screen sheet is open
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!sessionId) return null;

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat with Ajira Majuu"}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-brand-purple-light text-white shadow-glass-lg transition hover:scale-105 sm:bottom-6 sm:right-6"
      >
        {open ? (
          <span className="text-2xl leading-none">×</span>
        ) : (
          <span className="text-xl">💬</span>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed inset-0 z-40 sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[600px] sm:w-[380px]"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="flex h-full w-full flex-col overflow-hidden border border-white/40 bg-white/85 shadow-glass-lg backdrop-blur-xl sm:rounded-2xl">
            <div className="flex items-center justify-between bg-gradient-to-r from-brand-purple to-brand-purple-deep px-4 py-3 text-white">
              <div>
                <div className="font-display text-base font-bold">Ajira Majuu</div>
                <div className="flex items-center gap-1.5 text-xs text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Your Job Beyond Borders
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-full p-1 text-white/80 hover:bg-white/10 hover:text-white sm:hidden"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-hidden">
              <ChatWindow sessionId={sessionId} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
