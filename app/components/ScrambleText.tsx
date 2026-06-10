"use client";

import { useEffect, useMemo, useRef, useState, ReactNode } from "react";

interface ScrambleTextProps {
  /** Final styled content (can include <mark> for accents). */
  children: ReactNode;
  /** Plain-text version used to drive the scramble animation. */
  text: string;
  className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^*";

type Phase = "idle" | "animating" | "done";

const ScrambleText = ({ children, text, className = "" }: ScrambleTextProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [output, setOutput] = useState("");

  // Deterministic placeholder — identical on server and first client render.
  const placeholder = useMemo(
    () =>
      text
        .split("")
        .map((c) => (c === " " ? " " : "\u2022"))
        .join(""),
    [text]
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (reduced) {
          setPhase("done");
          return;
        }

        setPhase("animating");
        let step = 0;
        const interval = setInterval(() => {
          step += 0.04;
          const cut = Math.floor(Math.min(step, 1) * text.length);
          const next = text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < cut) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("");
          setOutput(next);
          if (step >= 1) {
            clearInterval(interval);
            setPhase("done");
          }
        }, 45);
      },
      { threshold: 0.6 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [text]);

  if (phase === "done") {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className} aria-label={text}>
      <span aria-hidden className="text-faint">
        {phase === "animating" ? output : placeholder}
      </span>
    </div>
  );
};

export default ScrambleText;
