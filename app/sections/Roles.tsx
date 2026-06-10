import Section from "../components/Section";
import Reveal from "../components/Reveal";

const roles = [
  { name: "Technical Lead", companies: ["Multiverse IT", "AntX Solutions"] },
  {
    name: "Senior Software Engineer",
    companies: ["Accenture Inc", "Nemo Interactive Group"],
  },
  {
    name: "Software Engineer",
    companies: ["Amihan Solutions", "Mortgage House Australia", "Extend Resourcing"],
  },
  {
    name: "Mobile App Developer",
    companies: ["Yondu Inc", "Synchro Global Developers Inc"],
  },
  {
    name: "Fullstack Web Developer",
    companies: [
      "Sociov Innovations Technology",
      "Furukawa Automotive Systems Lima PH",
      "PCS Mind IT Solutions",
    ],
  },
];

const Roles = () => {
  return (
    <Section id="roles" label="Company history">
      <ul>
        {roles.map((role, i) => (
          <Reveal key={role.name} delay={i * 0.06}>
            <li className="grid gap-2 border-b border-line py-7 md:grid-cols-[1fr_1.2fr] md:items-baseline md:gap-10">
              <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {role.name}
              </h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-dim">
                {role.companies.map((company, j) => (
                  <span key={company} className="flex items-center gap-3">
                    {j > 0 && <span className="text-accent">&bull;</span>}
                    {company}
                  </span>
                ))}
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
};

export default Roles;
