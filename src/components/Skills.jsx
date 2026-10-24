import React from "react";
import { motion } from "framer-motion";

const categories = {
  "Languages & core": [
    "TypeScript",
    "JavaScript ES6+",
    "Node.js",
    "SQL",
    "HTML5",
    "CSS3 / SASS",
    "OOP",
    "Data structures & algorithms",
  ],
  "Backend & data": [
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "REST APIs",
    "GraphQL",
    "Microservices",
    "Redis",
    "AWS Cognito",
    "Firebase",
  ],
  Frontend: [
    "React.js",
    "Next.js",
    "Redux",
    "Svelte.js",
    "Tailwind CSS",
    "Bootstrap",
    "State management",
  ],
  "Delivery & tools": [
    "Docker",
    "Git / GitHub",
    "Postman",
    "SendGrid",
    "CI/CD",
    "System architecture",
    "Agile / Scrum",
    "Code review & mentorship",
  ],
};

function Skills() {
  return (
    <motion.section
      id="skills"
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
    >
      <div className="section-wrap">
        <p className="eyebrow">Tools of the trade</p>
        <h2 className="section-title">A practical, full-stack toolkit.</h2>
        <div className="skills-layout">
          {Object.entries(categories).map(([category, skills]) => (
            <article className="skill-group" key={category}>
              <h3>{category}</h3>
              <motion.div
                className="skill-list"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  visible: { transition: { staggerChildren: 0.045 } },
                }}
              >
                {skills.map((skill) => (
                  <motion.span
                    className="skill-chip"
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -4, scale: 1.04 }}
                    whileFocus={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    tabIndex={0}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
