import { useState } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { stats } from "../data/siteData";

const heroCopyVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export function HeroSection() {
  const [profileImage, setProfileImage] = useState("./allan-profile.jpg");

  return (
    <section className="hero" id="top">
      <motion.div
        className="hero__copy"
        variants={heroCopyVariants}
        initial="hidden"
        animate="show"
      >
        <motion.span
          className="hero__eyebrow hero__eyebrow--animated"
          variants={heroItemVariants}
        >
          <Sparkles size={16} />
          Available for freelance and full-time opportunities
        </motion.span>
        <motion.h1 variants={heroItemVariants}>
          Allan Murillo
          <motion.span
            className="hero__title-line"
            initial={{ opacity: 0, letterSpacing: "0.18em" }}
            animate={{ opacity: 1, letterSpacing: "0em" }}
            transition={{ duration: 0.85, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            Software Developer
          </motion.span>
        </motion.h1>
        <motion.p variants={heroItemVariants}>
          I build reliable desktop, web, and cloud-based business systems with
          strong database foundations, practical UX, and maintainable code.
        </motion.p>
        <motion.div className="hero__actions" variants={heroItemVariants}>
          <a className="button button--primary" href="#projects">
            View Projects
            <ArrowRight size={18} />
          </a>
          <a className="button button--secondary" href="#contact">
            Contact Me
            <Download size={18} />
          </a>
        </motion.div>
        <div className="hero__stats">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="hero-stat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.55 + index * 0.1 }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="hero__visual" aria-hidden="true">
        <motion.div
          className="hero__bubble hero__bubble--one"
          animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero__bubble hero__bubble--two"
          animate={{ y: [0, 22, 0], x: [0, -10, 0] }}
          transition={{ duration: 10.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero__bubble hero__bubble--three"
          animate={{ y: [0, -14, 0], x: [0, -8, 0] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero__bubble hero__bubble--four"
          animate={{ y: [0, 16, 0], x: [0, 9, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero__bubble hero__bubble--five"
          animate={{ y: [0, -12, 0], x: [0, 14, 0] }}
          transition={{ duration: 9.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-orbit hero-orbit--outer"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="hero-orbit hero-orbit--inner"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="hero__portrait-card"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__portrait-frame">
            <div className="hero__portrait-ring hero__portrait-ring--one" />
            <div className="hero__portrait-ring hero__portrait-ring--two" />
            <div className="hero__portrait-glow" />
            <div className="hero__portrait-shell">
              <img
                className="hero__portrait-image"
                src={profileImage}
                alt="Allan Murillo portrait"
                onError={() => setProfileImage("./profile-placeholder.svg")}
              />
            </div>
          </div>
          <div className="hero__floating-badge hero__floating-badge--left">
            <strong>Desktop App Development</strong>
          </div>
          <div className="hero__floating-badge hero__floating-badge--top">
            <strong>Web-Based Business Systems</strong>
          </div>
          <div className="hero__floating-badge hero__floating-badge--right">
            <strong>Cloud Deployment with AWS</strong>
          </div>
          <div className="hero__floating-badge hero__floating-badge--bottom">
            <strong>Database Design and Automation</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
