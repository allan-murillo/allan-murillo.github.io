import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { services } from "../data/siteData";

export function ServicesSection() {
  return (
    <section className="section" id="services">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title="Professional development support for business software"
          description="From internal tools to cloud-ready systems, the focus stays on performance, clarity, and reliability."
        />
      </Reveal>

      <div className="service-grid">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <Reveal key={service.title} delay={index * 0.06}>
              <article className="glass-card service-card">
                <div className="service-card__icon">
                  <Icon size={22} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
