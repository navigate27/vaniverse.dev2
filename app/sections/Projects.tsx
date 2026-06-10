import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <Section id="projects" label="Proof of work">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-[clamp(2rem,7vw,5rem)] font-bold uppercase leading-none tracking-tight">
          Selected
          <br />
          <span className="font-serif italic lowercase text-accent-soft">
            projects
          </span>
        </h2>
        <p className="max-w-xs text-sm text-faint">
          A few things I&apos;ve shipped. Placeholders for now &mdash; the real
          ones are loading.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
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

              {/* Lightweight CSS placeholder instead of a heavy screenshot */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-line bg-surface-2">
                <div
                  className="absolute inset-0 opacity-60 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background:
                      "radial-gradient(120% 120% at 0% 0%, rgba(253,51,69,0.18), transparent 50%), radial-gradient(120% 120% at 100% 100%, rgba(172,159,214,0.16), transparent 50%)",
                  }}
                />
                <span className="absolute bottom-4 left-5 font-display text-3xl font-bold uppercase tracking-tight text-ink/80">
                  {p.title}
                </span>
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
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
