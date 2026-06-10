import Section from "../components/Section";
import Reveal from "../components/Reveal";
import AnimatedLink from "../components/AnimatedLink";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiThreadsFill } from "react-icons/ri";

const Contact = () => {
  return (
    <Section id="contact" label="Contact me">
      <Reveal>
        <h2 className="max-w-4xl font-display text-[clamp(2rem,6vw,4.5rem)] font-bold uppercase leading-[1.02] tracking-tight">
          I <span className="text-accent">didn&apos;t</span> build any contact
          forms.
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-6 font-serif text-xl italic text-dim">
          'cause I bet you'd still DM, anyway.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-wrap items-center gap-2">
          <AnimatedLink
            href="mailto:ivanmatthewferrer@gmail.com"
            bgColor="#f55041"
            label="Gmail"
            icon={<SiGmail />}
          />
          <AnimatedLink
            href="https://www.linkedin.com/in/ivan-matthew-ferrer-664a71123"
            bgColor="#1469c7"
            label="LinkedIn"
            icon={<FaLinkedinIn />}
          />
          <AnimatedLink
            href="https://www.instagram.com/vani.verse_/"
            bgColor="#f7236e"
            label="Instagram"
            icon={<FaInstagram />}
          />
          <AnimatedLink
            href="https://www.threads.com/@vani.verse_"
            bgColor="#070707"
            label="Threads"
            icon={<RiThreadsFill />}
          />
        </div>
      </Reveal>
    </Section>
  );
};

export default Contact;
