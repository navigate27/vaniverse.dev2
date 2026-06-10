import Section from "../components/Section";
import Reveal from "../components/Reveal";

const CV = () => {
  return (
    <Section id="resume" label="Resume">
      {/* Accent gradient backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80rem 60rem at 100% 0%, rgba(253,51,69,0.12), transparent 55%), radial-gradient(60rem 50rem at 0% 100%, rgba(172,159,214,0.1), transparent 55%)",
        }}
      />

      <Reveal>
        <h2 className="font-display text-[clamp(3rem,10vw,8rem)] font-bold uppercase leading-[0.92] tracking-[-0.03em]">
          Yes, I also
          <br />
          have a{" "}
          <span className="font-serif italic lowercase text-accent">pdf.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-6 font-serif text-xl italic text-dim">
          Decade of work. One document.
        </p>
      </Reveal>

      <Reveal delay={0.22}>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href="/ivan-ferrer-cv.pdf"
            download
            className="group relative inline-flex items-center gap-3 overflow-hidden bg-accent px-10 py-4 font-display text-sm uppercase tracking-[0.2em] text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{ willChange: "transform" }}
          >
            {/* Shimmer sweep */}
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/10 transition-transform duration-500 group-hover:translate-x-full"
              aria-hidden
            />
            <span
              className="inline-block transition-transform duration-300 group-hover:translate-y-1"
              aria-hidden
            >
              ↓
            </span>
            Download CV
          </a>

          <span className="font-display text-xs uppercase tracking-[0.2em] text-faint">
            PDF &middot; Updated 2026
          </span>
        </div>
      </Reveal>
    </Section>
  );
};

export default CV;
