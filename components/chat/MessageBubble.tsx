import clsx from "clsx";
import { ChatMessage } from "@/lib/types";

export default function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={clsx("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={clsx(
          "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm",
          isUser
            ? "bg-brand-purple text-white rounded-br-sm"
            : "bg-white/90 text-slate-800 border border-brand-purple/10 rounded-bl-sm backdrop-blur"
        )}
      >
        {message.content}
        {message.timestamp && (
          <div
            className={clsx(
              "mt-1 text-[10px]",
              isUser ? "text-white/60" : "text-slate-400"
            )}
          >
            {message.timestamp}
          </div>
        )}
      </div>
    </div>
  );
}
