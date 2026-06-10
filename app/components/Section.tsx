import React from "react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** Eyebrow label shown above the section content. */
  label?: string;
}

export const Section = ({ id, children, className = "", label }: SectionProps) => {
  return (
    <section id={id} className={`shell py-[var(--section-gap)] ${className}`}>
      {label && (
        <p className="mb-10 font-display text-xs uppercase tracking-[0.35em] text-faint">
          <span className="text-accent">/</span> {label}
        </p>
      )}
      {children}
    </section>
  );
};

export default Section;
