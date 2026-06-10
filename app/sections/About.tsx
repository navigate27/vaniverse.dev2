import Section from "../components/Section";
import ScrambleText from "../components/ScrambleText";

const About = () => {
  return (
    <Section id="about" label="Me?">
      <ScrambleText
        className="max-w-4xl font-display text-[clamp(1.6rem,4vw,3rem)] font-medium leading-[1.25] tracking-tight"
        text="I build things that work, look good, and sometimes confuse me too. I break and fix things before anyone notices. AI helps me sometimes, but I still take full credit."
      >
        <p className="text-justify">
          I build things that <mark className="bg-transparent text-accent">work</mark>,
          look good, and sometimes confuse me too. I{" "}
          <mark className="bg-transparent text-accent">break</mark> and{" "}
          <mark className="bg-transparent text-accent">fix</mark> things before
          anyone notices.{" "}
          <mark className="bg-transparent text-accent">AI</mark> helps me
          sometimes, but I still take full credit.
        </p>
      </ScrambleText>
    </Section>
  );
};

export default About;
