"use client";

import { useState, ReactNode } from "react";

interface AnimatedLinkProps {
  href: string;
  label: string;
  bgColor: string;
  icon: ReactNode;
}

const AnimatedLink = ({ href, label, bgColor, icon }: AnimatedLinkProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      className="group relative flex items-center justify-center overflow-hidden p-[0.85em]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={label}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span
        className={`absolute inset-0 m-auto rounded-full transition-all duration-300 ease-in-out ${
          hovered ? "h-[2.4em] w-[2.4em]" : "h-0 w-0"
        }`}
        style={{ backgroundColor: bgColor }}
      />
      <span
        className={`relative z-10 flex items-center text-xl transition-colors duration-300 ${
          hovered ? "text-white" : "text-dim"
        }`}
      >
        {icon}
      </span>
    </a>
  );
};

export default AnimatedLink;
