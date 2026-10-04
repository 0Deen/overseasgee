export const DEFAULT_QUICK_REPLIES = [
  "Find a Job",
  "Available Opportunities",
  "Application Process",
  "Requirements",
  "Track My Application",
  "Talk to Ajira Majuu",
];

export default function QuickReplies({
  options,
  onSelect,
  disabled,
}: {
  options: string[];
  onSelect: (value: string) => void;
  disabled?: boolean;
}) {
  if (options.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 px-1 pb-1">
      {options.map((opt) => (
        <button
          key={opt}
          disabled={disabled}
          onClick={() => onSelect(opt)}
          className="rounded-full border border-brand-purple/20 bg-white/80 px-3 py-1.5 text-xs font-medium text-brand-purple transition hover:bg-brand-purple hover:text-white disabled:opacity-50"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
