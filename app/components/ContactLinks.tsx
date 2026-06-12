"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import AnimatedLink from "./AnimatedLink";
import { site } from "../data/site";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiThreadsFill } from "react-icons/ri";

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 20,
  mass: 0.8,
};

const ContactLinks = () => {
  const [copied, setCopied] = useState(false);
  const [copyTick, setCopyTick] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    setCopied(true);
    setCopyTick((t) => t + 1);
    timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
  };

  const chipVariants = reducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.2 } },
      }
    : {
        hidden: { opacity: 0, y: 14, scale: 0.88 },
        visible: { opacity: 1, y: 0, scale: 1, transition: springTransition },
        exit: {
          opacity: 0,
          y: -6,
          scale: 0.95,
          transition: { duration: 0.2, ease: "easeOut" as const },
        },
      };

  const suffixVariants = reducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      }
    : {
        hidden: { opacity: 0, y: 6 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { ...springTransition, delay: 0.06 },
        },
      };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <AnimatedLink
          copyValue={site.email}
          onCopy={handleCopy}
          bgColor="#f55041"
          label="Gmail"
          icon={<SiGmail />}
        />
        <AnimatedLink
          href={site.social.linkedin}
          bgColor="#1469c7"
          label="LinkedIn"
          icon={<FaLinkedinIn />}
        />
        <AnimatedLink
          href={site.social.instagram}
          bgColor="#f7236e"
          label="Instagram"
          icon={<FaInstagram />}
        />
        <AnimatedLink
          href={site.social.threads}
          bgColor="#070707"
          label="Threads"
          icon={<RiThreadsFill />}
        />
      </div>

      <AnimatePresence>
        {copied && (
          <motion.p
            key={copyTick}
            variants={chipVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ transformOrigin: "left center" }}
            className="mt-3 inline-block border border-line bg-surface px-3 py-1.5 font-serif text-sm italic text-dim"
            aria-live="polite"
          >
            <span className="text-ink not-italic">{site.email}</span>
            <motion.span
              variants={suffixVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {" "}
              — copied.
            </motion.span>
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactLinks;
