export interface Project {
  title: string;
  year: string;
  blurb: string;
  stack: string[];
  link: string;
}

// Placeholder projects — realistic stand-ins. Swap copy/links/screenshots when ready.
export const projects: Project[] = [
  {
    title: "Aurora Commerce",
    year: "2025",
    blurb: "A headless storefront that loads before you finish blinking.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    link: "#",
  },
  {
    title: "Pulse Dashboard",
    year: "2024",
    blurb: "Real-time analytics that make 500 errors feel personal.",
    stack: ["Angular", "NodeJS", "PostgreSQL", "Docker"],
    link: "#",
  },
  {
    title: "Nomad Mobile",
    year: "2024",
    blurb: "Cross-platform app that works on the emulator and occasionally on real phones.",
    stack: ["Ionic", "Capacitor", "Firebase"],
    link: "#",
  },
];
