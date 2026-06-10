"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Lightbox from "../components/Lightbox";
import { projects } from "../data/projects";

const INITIAL_COUNT = 6;

const ProjectCard = ({
  p,
  i,
  onImageClick,
}: {
  p: (typeof projects)[0];
  i: number;
  onImageClick?: (src: string, alt: string) => void;
}) => (
  <a
    href={p.link}
    className="group flex h-full flex-col justify-between gap-10 bg-bg p-8 transition-colors duration-300 hover:bg-surface md:p-10"
  >
    <div className="flex items-start justify-between">
      <span className="font-display text-sm text-faint">
        {String(i + 1).padStart(2, "0")}
      </span>
      <span className="font-display text-sm text-faint">{p.year}</span>
    </div>

    <div
      className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-line bg-surface-2"
      onClick={
        p.image && onImageClick
          ? (e) => {
              e.preventDefault();
              e.stopPropagation();
              onImageClick(p.image!, p.title);
            }
          : undefined
      }
      role={p.image && onImageClick ? "button" : undefined}
      aria-label={p.image ? `Preview ${p.title}` : undefined}
      style={{ cursor: p.image ? "zoom-in" : undefined }}
    >
      {p.image ? (
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      ) : (
        <div
          className="absolute inset-0 opacity-60 transition-transform duration-500 group-hover:scale-105"
          style={{
            background:
              "radial-gradient(120% 120% at 0% 0%, rgba(253,51,69,0.18), transparent 50%), radial-gradient(120% 120% at 100% 100%, rgba(172,159,214,0.16), transparent 50%)",
          }}
        />
      )}
      {!p.image && (
        <span className="absolute bottom-4 left-5 font-display text-3xl font-bold uppercase tracking-tight text-ink/80">
          {p.title}
        </span>
      )}
    </div>

    <div>
      <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
        {p.title}
      </h3>
      <p className="mt-3 max-w-md font-serif text-lg italic text-dim">
        {p.blurb}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-wider text-faint"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  </a>
);

const Projects = () => {
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const visible = projects.slice(0, INITIAL_COUNT);
  const rest = projects.slice(INITIAL_COUNT);

  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);

  return (
    <Section id="projects" label="Proof of work">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-[clamp(2rem,7vw,5rem)] font-bold uppercase leading-none tracking-tight">
          <span className="font-serif italic lowercase text-accent-soft">
            projects
          </span>
        </h2>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {visible.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <ProjectCard p={p} i={i} onImageClick={openLightbox} />
          </Reveal>
        ))}

        <AnimatePresence>
          {expanded &&
            rest.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <ProjectCard p={p} i={INITIAL_COUNT + i} onImageClick={openLightbox} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {rest.length > 0 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="group flex items-center gap-3 border border-line px-8 py-3 font-display text-xs uppercase tracking-[0.25em] text-faint transition-colors duration-300 hover:border-ink hover:text-ink"
          >
            <span>{expanded ? "Show less" : `Load more (${rest.length})`}</span>
            <span
              className={`inline-block transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            >
              ↓
            </span>
          </button>
        </div>
      )}
      <AnimatePresence>
        {lightbox && (
          <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;
