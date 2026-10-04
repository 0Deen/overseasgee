export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-brand-purple/10 bg-white/90 px-4 py-3 backdrop-blur">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-purple/50 [animation-delay:-0.3s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-purple/50 [animation-delay:-0.15s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-purple/50" />
      </div>
    </div>
  );
}
