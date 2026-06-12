"use client";

import { useState, ReactNode } from "react";

interface AnimatedLinkProps {
  href?: string;
  label: string;
  bgColor: string;
  icon: ReactNode;
  copyValue?: string;
  onCopy?: () => void;
}

const AnimatedLink = ({
  href,
  label,
  bgColor,
  icon,
  copyValue,
  onCopy,
}: AnimatedLinkProps) => {
  const [hovered, setHovered] = useState(false);
  const isCopy = Boolean(copyValue);
  const isExternal = href?.startsWith("http") ?? false;

  const sharedProps = {
    className:
      "group relative flex cursor-pointer items-center justify-center overflow-hidden p-[0.85em]",
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    title: label,
    "aria-label": isCopy ? "Copy email address" : label,
  };

  const content = (
    <>
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
    </>
  );

  if (isCopy) {
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(copyValue!);
        onCopy?.();
      } catch {
        // Clipboard API unavailable — fail silently
      }
    };

    return (
      <button type="button" onClick={handleCopy} {...sharedProps}>
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      {...sharedProps}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
};

export default AnimatedLink;
