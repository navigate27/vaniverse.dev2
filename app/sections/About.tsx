import Image from "next/image";
import Section from "../components/Section";
import ScrambleText from "../components/ScrambleText";

const About = () => {
  return (
    <Section id="about" label="Me?">
      <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16 lg:gap-24">
        {/* Photo */}
        <div className="relative shrink-0 self-start md:order-last">
          <div className="relative h-72 w-60 overflow-hidden md:h-96 md:w-72">
            <Image
              src="/me.png"
              alt="Ivan Ferrer"
              fill
              className="object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
              sizes="(max-width: 768px) 240px, 288px"
            />
            {/* Red accent corner */}
            <span className="absolute bottom-0 left-0 h-1 w-12 bg-accent" />
          </div>
        </div>

        {/* Text */}
        <ScrambleText
          className="font-display text-[clamp(1.6rem,4vw,3rem)] font-medium leading-[1.25] tracking-tight"
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
      </div>
    </Section>
  );
};

export default About;
