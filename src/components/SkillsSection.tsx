import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { skills } from "../data/siteData";

export function SkillsSection() {
  return (
    <section className="section" id="skills">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Core technologies I use to build stable systems"
          description="A mix of desktop engineering, full-stack web development, and cloud deployment experience."
          align="center"
        />
      </Reveal>

      <div className="skill-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <Reveal key={skill.label} delay={index * 0.05}>
              <article className="glass-card skill-card">
                <Icon size={20} />
                <span>{skill.label}</span>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
