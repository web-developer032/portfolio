import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
    >
      <div className="section-wrap">
        <p className="eyebrow">A little context</p>
        <div className="about-grid">
          <div>
            <h2 className="section-title">
              Engineering with a systems mindset.
            </h2>
            <p className="about-copy">
              I’m a <strong>Senior Full-Stack &amp; Backend Engineer</strong>{" "}
              with 6+ years of experience architecting, scaling, and maintaining
              high-throughput web applications and distributed cloud systems. I
              work across Node.js, TypeScript, data stores, and product
              interfaces, with a focus on reliable APIs, thoughtful
              architecture, and teams that ship well together.
            </p>
            <p className="about-copy">
              From FinTech payment flows to modular SaaS platforms, I care about
              the details that make software secure, observable, and
              maintainable long after launch.
            </p>
          </div>
          <div className="stat-grid" aria-label="Career highlights">
            <div className="stat">
              <span className="stat-number">6+</span>
              <span className="stat-label">Years building software</span>
            </div>
            <div className="stat">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">System availability</span>
            </div>
            <div className="stat">
              <span className="stat-number">−25%</span>
              <span className="stat-label">API latency</span>
            </div>
            <div className="stat">
              <span className="stat-number">−30%</span>
              <span className="stat-label">Critical bugs</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
