import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Ejuno",
    description:
      "Enterprise REST APIs with OWASP-minded security, Stripe subscriptions and billing, secure webhooks, refunds, real-time notifications, and conflict-aware reservations.",
    tags: ["Node.js", "Stripe", "REST APIs", "Webhooks"],
  },
  {
    name: "Lucy",
    description:
      "A full-stack architectural overhaul: modularized a legacy platform, standardized errors and API responses, and introduced strict data validation to reduce critical bugs by 30%.",
    tags: ["Architecture", "Middleware", "Validation", "TypeScript"],
  },
  {
    name: "XoomMaps",
    description:
      "End-to-end frontend architecture with efficient data fetching and state management, powering real-time geospatial rendering and collaborative map sessions.",
    tags: ["React", "Google Maps", "Geospatial", "Real time"],
    link: "https://v3.xoommaps.com/",
  },
  {
    name: "ZeroDocs",
    description:
      "Document editing experience with React Context state management, rich-text editing features, and tiered subscription models.",
    tags: ["React", "Rich text", "Context API", "Subscriptions"],
    link: "https://zerodocs.com/",
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55 }}
    >
      <div className="section-wrap">
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title">
          Products made for real-world complexity.
        </h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.name}
              initial={{ opacity: 0, y: 30, rotateX: 3 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ y: -7, rotateX: -1, scale: 1.012 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              style={{
                transformPerspective: 900,
                transformOrigin: "center bottom",
              }}
            >
              <div>
                <span className="project-index">0{index + 1} / FEATURED</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              {project.link ? (
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit project ↗
                </a>
              ) : (
                <span className="project-link">
                  Private project · details on request
                </span>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
