import Section from "../components/Section";
import Reveal from "../components/Reveal";

const Motto = () => {
  return (
    <Section id="motto" label="I believe">
      <Reveal>
        <blockquote className="max-w-5xl font-display text-[clamp(2.2rem,8vw,6.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em]">
          <span className="text-faint">&ldquo;</span>Consistency{" "}
          <span className="font-serif italic lowercase text-accent">opens</span>{" "}
          doors<span className="text-faint">&rdquo;</span>
        </blockquote>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-8 font-serif text-xl italic text-faint">
          &mdash; if not, just knock louder.
        </p>
      </Reveal>
    </Section>
  );
};

export default Motto;
