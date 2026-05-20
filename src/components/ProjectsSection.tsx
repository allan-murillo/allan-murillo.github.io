import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { projects } from "../data/siteData";

export function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Selected systems and product work"
          description="Representative project areas showing the type of business software and workflows I can build."
          align="center"
        />
      </Reveal>

      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05}>
            <article className={`project-card project-card--${project.accent}`}>
              <div className="project-card__glow" />
              <div className="project-card__image-wrap">
                <img
                  className="project-card__image"
                  src={project.image}
                  alt={`${project.title} preview`}
                />
              </div>
              <span className="project-card__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#contact" className="project-card__link">
                Discuss a similar project
                <ArrowUpRight size={16} />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
