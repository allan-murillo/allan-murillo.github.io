import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  return (
    <section className="section section--contact" id="contact">
      <div className="contact-layout">
        <Reveal>
          <div className="contact-copy">
            <SectionHeading
              eyebrow="Contact"
              title="Have a project or role in mind?"
              description="If you need a developer for desktop software, management systems, cloud-backed tools, or database-heavy applications, let's talk."
            />

            <div className="contact-list">
              <a href="mailto:allanpayuyomurillo@gmail.com">
                <Mail size={18} />
                allanpayuyomurillo@gmail.com
              </a>
              <a href="tel:+639614843223">
                <Phone size={18} />
                +63 961 484 3223
              </a>
              <span>
                <MapPin size={18} />
                Makati, Philippines
              </span>
            </div>

            <div className="social-row">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Github size={18} />
                GitHub
              </a>
              <a href="www.linkedin.com/in/allan-murillo" target="_blank" rel="noreferrer">
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            className="glass-card contact-form"
            action="mailto:allan@example.com"
            method="post"
            encType="text/plain"
          >
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="your@email.com" />
            </label>
            <label>
              Message
              <textarea
                name="message"
                placeholder="Tell me about your project, system, or hiring need."
                rows={6}
              />
            </label>
            <button className="button button--primary" type="submit">
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
