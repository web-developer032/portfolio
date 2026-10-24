import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    dates: "MAR 2025 — PRESENT",
    role: "Senior Software Engineer",
    company: "Turing · Remote",
    highlights: [
      "Architect distributed backend microservices and high-throughput Node.js/TypeScript applications, maintaining 99.9% availability.",
      "Optimized APIs and refactored legacy services, reducing latency by 25%.",
      "Standardized local and staging environments with Docker and CI/CD improvements.",
    ],
  },
  {
    dates: "OCT 2022 — SEP 2025",
    role: "Senior Software Engineer",
    company: "Skylinx Technologies · Lahore",
    highlights: [
      "Engineered enterprise MERN and TypeScript applications, delivering production features to demanding timelines.",
      "Led code reviews and mentored developers in asynchronous programming and clean code.",
      "Built React and Next.js interfaces integrated with secure backend authentication.",
    ],
  },
  {
    dates: "MAR 2022 — OCT 2022",
    role: "Software Engineer / Senior Frontend Engineer",
    company: "TheHelpDesk · Lahore",
    highlights: [
      "Designed Node.js and Express REST APIs to improve data access across core platform features.",
      "Modernized component architecture and optimized web application performance.",
    ],
  },
  {
    dates: "JUN 2020 — PRESENT",
    role: "Web Developer",
    company: "ZonedWeb · Wyoming, US",
    highlights: [
      "Built reusable UI libraries and transformed static websites into dynamic React and Svelte applications.",
      "Integrated third-party APIs, authentication, and cloud services for reliable real-time data sync.",
    ],
  },
  {
    dates: "MAR 2019 — MAR 2022",
    role: "Web Developer",
    company: "CodeFix · Bahawalpur",
    highlights: [
      "Created responsive cross-browser interfaces and secure backend endpoints for data processing.",
    ],
  },
];

function Work() {
  return (
    <motion.section
      id="work"
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55 }}
    >
      <div className="section-wrap">
        <p className="eyebrow">Where I’ve been</p>
        <h2 className="section-title">Experience built in production.</h2>
        <div className="experience-list">
          {experience.map((item) => (
            <article
              className="experience-item"
              key={`${item.company}-${item.dates}`}
            >
              <p className="experience-date">{item.dates}</p>
              <div>
                <div className="experience-role">
                  <h3>{item.role}</h3>
                  <span>{item.company}</span>
                </div>
                <ul className="experience-bullets">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
