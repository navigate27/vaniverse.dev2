"use client";

import { useState } from "react";
import Image from "next/image";
import HoverText from "./HoverText";
import logo from "@/public/vani.verse-logo.png";

const links = [
  { label: "About", id: "about" },
  { label: "Work", id: "exp" },
  { label: "Proof", id: "projects" },
  { label: "Contact", id: "contact" },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="shell flex items-center justify-between py-5">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="relative z-50"
          aria-label="Home"
        >
          <Image
            src={logo}
            alt="vani.verse logo"
            width={44}
            height={44}
            className="transition-transform duration-300 ease-in-out hover:rotate-[25deg]"
            priority
          />
        </a>

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
