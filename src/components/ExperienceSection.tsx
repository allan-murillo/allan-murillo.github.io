import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { experienceHighlights } from "../data/siteData";

export function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Built with secure coding, structured data, and practical UX"
          description="My experience is centered on developing real business systems where usability, reporting, and long-term support matter."
        />
      </Reveal>

      <div className="timeline">
        {experienceHighlights.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="timeline__item">
              <span className="timeline__dot" />
              <div className="glass-card timeline__content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
