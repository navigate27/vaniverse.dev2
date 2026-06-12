import Section from "../components/Section";
import Reveal from "../components/Reveal";
import ContactLinks from "../components/ContactLinks";

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
        <div className="mt-10">
          <ContactLinks />
        </div>
      </Reveal>
    </Section>
  );
};

export default Contact;
