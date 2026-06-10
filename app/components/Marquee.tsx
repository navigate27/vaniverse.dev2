import React from "react";

interface MarqueeProps {
  items: string[];
  className?: string;
}

/** Lightweight CSS-only marquee. Duplicates content for a seamless loop. */
const Marquee = ({ items, className = "" }: MarqueeProps) => {
  const row = [...items, ...items];
  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <div className="animate-marquee flex shrink-0 items-center whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-serif text-2xl italic text-dim md:text-3xl">
              {item}
            </span>
            <span className="text-accent">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
