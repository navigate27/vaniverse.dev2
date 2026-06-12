import { site } from "../data/site";

interface AvailabilityBadgeProps {
  compact?: boolean;
}

const AvailabilityBadge = ({ compact = false }: AvailabilityBadgeProps) => {
  const { availability } = site;

  if (!availability.isOpen) return null;

  return (
    <div
      className="flex items-center gap-2 border border-line bg-surface px-3 py-1.5"
      aria-label={availability.label}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span className="font-display text-[0.65rem] uppercase tracking-[0.15em] text-dim md:text-xs md:tracking-[0.2em]">
        {compact ? "Open" : availability.label}
      </span>
    </div>
  );
};

export default AvailabilityBadge;
