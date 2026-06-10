import Section from "../components/Section";
import ScrambleText from "../components/ScrambleText";

const Exp = () => {
  return (
    <Section id="exp" label="I've been">
      <ScrambleText
        className="max-w-4xl font-display text-[clamp(1.6rem,4vw,3rem)] font-medium leading-[1.25] tracking-tight"
        text="From startups to corporate, I've worked impossible deadlines, and confusing requirements that tested my sanity but taught me to swim in chaos. I also developed the rare skill of fixing problems I didn't cause."
      >
        <p className="text-justify">
          From <mark className="bg-transparent text-accent">startups</mark>{" "}to
          corporate, I&apos;ve worked with {" "}
          <mark className="bg-transparent text-accent">impossible</mark> deadlines
          and confusing requirements that tested my{" "}
          <mark className="bg-transparent text-accent">sanity</mark> but taught me
          to swim in chaos. 
        </p> <br />
        <p>
          I also developed the{" "}
          <mark className="bg-transparent text-accent">rare skill</mark>{" "} of fixing
          problems I didn&apos;t cause.
        </p>
      </ScrambleText>
    </Section>
  );
};

export default Exp;
