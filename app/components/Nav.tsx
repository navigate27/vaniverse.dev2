"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import HoverText from "./HoverText";
import logo from "@/public/if-logo.png";

const links = [
  { label: "About", id: "about" },
  { label: "EXP", id: "exp" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  const handleClick = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="shell flex items-center justify-between py-5">
        <div
          className="relative z-50"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Home"
          >
            <Image
              src={logo}
              alt="IF logo"
              width={48}
              height={48}
              className="transition-transform duration-300 ease-in-out hover:scale-110"
              priority
            />
          </a>

          {/* Vaniverse tooltip — desktop only */}
          <AnimatePresence>
            {logoHovered && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                style={{ willChange: "transform" }}
                className="absolute left-0 top-full mt-4 hidden w-72 border border-line bg-surface p-6 md:block"
              >
                {/* Arrow */}
                <span className="absolute -top-[5px] left-5 h-2 w-2 rotate-45 border-l border-t border-line bg-surface" />

                {/* Word split */}
                <div className="flex items-start gap-4">
                  <div>
                    <span className="font-display text-2xl font-bold uppercase tracking-tight text-ink">
                      Vani
                    </span>
                    <p className="mt-1 font-serif text-xs italic text-faint">
                      ivan, reversed
                    </p>
                  </div>
                  <span className="mt-1 font-display text-lg text-faint">·</span>
                  <div>
                    <span className="font-display text-2xl font-bold uppercase tracking-tight text-accent">
                      Verse
                    </span>
                    <p className="mt-1 font-serif text-xs italic text-faint">
                      as in universe
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <span className="my-4 block h-px w-full bg-line" />

                {/* Body */}
                <p className="font-serif text-sm italic leading-relaxed text-dim">
                  My universe is bigger than one job title.
                  <br />
                  Software is just the corner I chose to build in.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 font-display text-sm uppercase tracking-[0.2em] md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => handleClick(l.id)}
                className="cursor-pointer"
              >
                <HoverText text={l.label} />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block h-[2px] w-7 bg-ink transition-all duration-300 ${
              open ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-7 bg-ink transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-7 bg-ink transition-all duration-300 ${
              open ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg/95 backdrop-blur-sm transition-all duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => handleClick(l.id)}
            className="font-display text-3xl uppercase tracking-[0.1em] text-ink"
          >
            {l.label}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Nav;
