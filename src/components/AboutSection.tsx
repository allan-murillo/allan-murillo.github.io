import { Briefcase, DatabaseZap, Settings2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  {
    title: "Business Application Specialist",
    text:
      "I focus on systems that support accounting, operations, records, and process-heavy business environments.",
    icon: Briefcase
  },
  {
    title: "Database-Driven Architecture",
    text:
      "I design software around stable data models, reliable reporting, and workflows that remain maintainable over time.",
    icon: DatabaseZap
  },
  {
    title: "Automation and Usability",
    text:
      "I streamline repetitive work and build interfaces that are clear for day-to-day staff, managers, and administrators.",
    icon: Settings2
  }
];

export function AboutSection() {
  return (
    <section className="section" id="about">
      <Reveal>
        <SectionHeading
          eyebrow="About Me"
          title="Software built around real business operations"
          description="I specialize in business applications, accounting systems, management systems, automation, and database-driven software that helps teams work faster and with fewer errors."
        />
      </Reveal>

      <div className="about-grid">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;

          return (
            <Reveal key={pillar.title} delay={index * 0.08}>
              <article className="glass-card feature-card">
                <div className="feature-card__icon">
                  <Icon size={22} />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
