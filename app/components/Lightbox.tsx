"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "framer-motion";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const Lightbox = ({ src, alt, onClose }: LightboxProps) => {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const content = (
    /* Backdrop — no blur, solid dark bg, no opacity animation (instant) */
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/95 p-4 md:p-10"
      onClick={onClose}
    >
      {/* Content card — only this animates */}
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ willChange: "transform" }}
        className="relative max-h-full w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full overflow-hidden rounded-xl border border-line" style={{ maxHeight: "calc(100dvh - 8rem)" }}>
          <Image
            src={src}
            alt={alt}
            width={3840}
            height={3840}
            className="h-auto max-h-[calc(100dvh-8rem)] w-full object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </div>
        <p className="mt-3 text-center font-display text-xs uppercase tracking-[0.25em] text-faint">
          {alt}
        </p>
      </motion.div>

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close preview"
        className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-line text-faint transition-colors duration-200 hover:border-ink hover:text-ink"
      >
        ✕
      </button>
    </div>
  );

  return createPortal(content, document.body);
};

export default Lightbox;
