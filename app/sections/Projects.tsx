"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Lightbox from "../components/Lightbox";
import { projects, type Category } from "../data/projects";

const INITIAL_COUNT = 6;
const ALL_CATEGORIES: Category[] = ["Web", "Mobile", "Game", "Desktop", "Tool", "IoT"];

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
      <div className="mt-4 flex flex-wrap gap-2">
        {p.categories.map((cat) => (
          <span
            key={cat}
            className="rounded-sm border border-accent/30 px-2 py-0.5 text-[10px] uppercase tracking-widest text-accent/70"
          >
            {cat}
          </span>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
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
  const [activeFilters, setActiveFilters] = useState<Category[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  // Reset expanded when filters change
  useEffect(() => {
    setExpanded(false);
  }, [activeFilters]);

  const toggleFilter = (cat: Category) => {
    setActiveFilters((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filtered =
    activeFilters.length === 0
      ? projects
      : projects.filter((p) =>
          p.categories.some((cat) => activeFilters.includes(cat))
        );

  const visible = filtered.slice(0, INITIAL_COUNT);
  const rest = filtered.slice(INITIAL_COUNT);

  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);

  return (
    <Section id="projects" label="Proof of work">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-[clamp(2rem,7vw,5rem)] font-bold uppercase leading-none tracking-tight">
          <span className="font-serif italic lowercase text-accent-soft">
            projects
          </span>
        </h2>
      </div>

      {/* Filter bar */}
      <div className="mb-8 -mx-1 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setActiveFilters([])}
          className={`shrink-0 px-4 py-1.5 font-display text-xs uppercase tracking-[0.2em] transition-colors duration-200 border ${
            activeFilters.length === 0
              ? "border-ink bg-ink text-bg"
              : "border-line text-faint hover:border-ink hover:text-ink"
          }`}
        >
          All
        </button>
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => toggleFilter(cat)}
            className={`shrink-0 px-4 py-1.5 font-display text-xs uppercase tracking-[0.2em] transition-colors duration-200 border ${
              activeFilters.includes(cat)
                ? "border-accent bg-accent text-white"
                : "border-line text-faint hover:border-ink hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
        {activeFilters.length > 0 && (
          <span className="ml-2 shrink-0 font-display text-xs text-faint">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilters.join(",")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2"
        >
          {visible.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
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
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <ProjectCard p={p} i={INITIAL_COUNT + i} onImageClick={openLightbox} />
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="mt-16 text-center font-serif italic text-faint">
          Nothing here yet — check back soon.
        </p>
      )}

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
