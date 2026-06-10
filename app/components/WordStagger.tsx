"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface WordStaggerProps {
  /** Each entry is rendered as its own animated line/word. ReactNode allows accents. */
  parts: ReactNode[];
  className?: string;
  delay?: number;
  stagger?: number;
}

const WordStagger = ({
  parts,
  className = "",
  delay = 0,
  stagger = 0.09,
}: WordStaggerProps) => {
  return (
    <span className={className}>
      {parts.map((part, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * stagger,
            }}
          >
            {part}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default WordStagger;
