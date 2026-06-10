"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "../components/Section";

interface Tech {
  label: string;
  logo: string;
}

interface SkillGroup {
  title: string;
  note: string;
  tech: Tech[];
}

const groups: SkillGroup[] = [
  {
    title: "Web & Design",
    note: "I don't have a favorite framework, just different levels of trauma.",
    tech: [
      { label: "Angular", logo: "/tech-logos/angular-logo.png" },
      { label: "Next.js", logo: "/tech-logos/next-js-logo.png" },
      { label: "React", logo: "/tech-logos/react-logo.png" },
      { label: "TypeScript", logo: "/tech-logos/ts-logo.png" },
      { label: "Tailwind", logo: "/tech-logos/tailwindcss-logo.png" },
      { label: "jQuery", logo: "/tech-logos/jquery-logo.png" },
      { label: "WordPress", logo: "/tech-logos/wordpress-logo.png" },
      { label: "Bootstrap", logo: "/tech-logos/bootstrap-logo.png" },
      { label: "Karma", logo: "/tech-logos/karmajs-logo.png" },
      { label: "Jasmine", logo: "/tech-logos/jasmine-logo.png" },
      { label: "Material", logo: "/tech-logos/angular-material-logo.png" },
    ],
  },
  {
    title: "Backend",
    note: "Anxiety still hits me when my API returns 500.",
    tech: [
      { label: "Laravel", logo: "/tech-logos/laravel-logo.png" },
      { label: "NodeJS", logo: "/tech-logos/nodejs-logo.png" },
      { label: "Express", logo: "/tech-logos/expressjs-logo.png" },
      { label: "Firebase", logo: "/tech-logos/firebase-logo.png" },
      { label: "MySQL", logo: "/tech-logos/mysql-logo.png" },
      { label: "PostgreSQL", logo: "/tech-logos/pgsql-logo.png" },
      { label: "SQL Server", logo: "/tech-logos/sql-server-logo.png" },
      { label: "SQLite", logo: "/tech-logos/sqlite-logo.png" },
      { label: "C#", logo: "/tech-logos/csharp-logo.png" },
      { label: "MongoDB", logo: "/tech-logos/mongodb-logo.png" },
      { label: "Django", logo: "/tech-logos/django-logo.png" },
    ],
  },
  {
    title: "DevOps",
    note: "Still searching how to restart a service in 10 different ways.",
    tech: [
      { label: "Docker", logo: "/tech-logos/docker-logo.png" },
      { label: "Jenkins", logo: "/tech-logos/jenkins-logo.png" },
      { label: "Octopus", logo: "/tech-logos/octopus-logo.png" },
      { label: "AWS", logo: "/tech-logos/aws-logo.png" },
      { label: "Lambda", logo: "/tech-logos/aws-lambda-logo.png" },
      { label: "Heroku", logo: "/tech-logos/heroku-logo.png" },
      { label: "Azure", logo: "/tech-logos/azure-logo.png" },
      { label: "XAMPP", logo: "/tech-logos/xampp-logo.png" },
      { label: "Nginx", logo: "/tech-logos/nginx-logo.png" },
      { label: "Apache", logo: "/tech-logos/apache-logo.png" },
      { label: "Filezilla", logo: "/tech-logos/filezilla-logo.png" },
      { label: "Linux", logo: "/tech-logos/linux-logo.png" },
    ],
  },
  {
    title: "Mobile",
    note: "Testing on an emulator? Works fine. Testing on a real phone? Instant crash.",
    tech: [
      { label: "Ionic", logo: "/tech-logos/ionic-logo.png" },
      { label: "Cordova", logo: "/tech-logos/codova-logo.png" },
      { label: "Capacitor", logo: "/tech-logos/capacitor-logo.png" },
      { label: "Flutter", logo: "/tech-logos/flutter-logo.png" },
      { label: "Android", logo: "/tech-logos/android-studio-logo.png" },
    ],
  },
];

const Skills = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <Section id="skills" label="I can do">
      <ul className="border-t border-line">
        {groups.map((group, i) => {
          const isOpen = active === i;
          return (
            <li key={group.title} className="border-b border-line">
              <button
                onClick={() => setActive(isOpen ? -1 : i)}
                className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                aria-expanded={isOpen}
              >
                <span
                  className={`font-display text-[clamp(1.6rem,5vw,3.5rem)] font-bold uppercase tracking-tight transition-colors duration-300 ${
                    isOpen ? "text-ink" : "text-faint group-hover:text-dim"
                  }`}
                >
                  {group.title}
                </span>
                <span
                  className={`shrink-0 text-2xl transition-transform duration-300 ${
                    isOpen ? "rotate-45 text-accent" : "text-faint"
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-500 ease-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-9">
                    <div className="flex flex-wrap gap-2.5">
                      {group.tech.map((t) => (
                        <span
                          key={t.label}
                          className="flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-sm text-dim"
                        >
                          <Image
                            src={t.logo}
                            alt={t.label}
                            width={18}
                            height={18}
                            loading="lazy"
                            className="h-[18px] w-[18px] object-contain"
                          />
                          {t.label}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 max-w-xl font-serif text-lg italic text-faint">
                      {group.note}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Skills;
