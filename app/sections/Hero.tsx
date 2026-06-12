"use client";

import WordStagger from "../components/WordStagger";
import { motion } from "framer-motion";
import { site } from "../data/site";

const Hero = () => {
  return (
    <section
      id="top"
      className="shell relative flex min-h-screen flex-col justify-center pt-28"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="mb-8 font-display text-xs uppercase tracking-[0.4em] text-accent-soft md:text-sm"
      >
        {site.name}
        <span className="text-faint"> · {site.location.code}</span>
      </motion.p>

      <h1 className="font-display text-[clamp(2.75rem,11vw,9rem)] font-bold uppercase leading-[0.92] tracking-[-0.03em]">
        <span className="block">
          <WordStagger parts={["Building"]} delay={0.15} />
        </span>
        <span className="block text-accent">
          <WordStagger parts={["worlds"]} delay={0.28} />
        </span>
        <span className="block">
          <WordStagger parts={["one", "\u00A0line"]} delay={0.4} />
        </span>
        <span className="block">
          <WordStagger
            parts={[
              "at",
              "\u00A0a\u00A0",
              <span key="t" className="font-serif italic text-accent-soft lowercase pr-[0.12em]">
                time
              </span>,
              ".",
            ]}
            delay={0.52}
          />
        </span>
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.9 }}
        className="mt-12 mb-12 max-w-md font-body text-base leading-relaxed text-dim"
      >
        Technical Lead & Software Engineer crafting fast, thoughtful web, mobile,
        and backend experiences.
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="mt-auto pb-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-faint"
      >
        <span className="inline-block h-8 w-px animate-pulse bg-faint" />
        Scroll
      </motion.div>
    </section>
  );
};

export default Hero;
