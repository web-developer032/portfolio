import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <motion.section
        id="contact"
        className="section"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55 }}
      >
        <div className="section-wrap">
          <p className="eyebrow">Start a conversation</p>
          <h2 className="section-title">Have a thoughtful problem to solve?</h2>
          <div className="contact-layout">
            <div className="contact-copy">
              <p>
                For product engineering, backend architecture, or a good
                conversation about building reliable software, reach out
                directly or send a note.
              </p>
              <a
                className="contact-email"
                href="mailto:mubasherali0331@gmail.com"
              >
                mubasherali0331@gmail.com ↗
              </a>
              <div className="social-links">
                <a
                  href="https://pk.linkedin.com/in/expert-mernstack-developer"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://github.com/web-developer032"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
              <p>Lahore, Pakistan · BCS, Islamia University Bahawalpur</p>
            </div>
            <form
              className="contact-form"
              method="POST"
              action="https://getform.io/f/2e8bfb49-40b7-428e-8bb9-560c70eb858a"
            >
              <div className="form-row">
                <label>
                  Your name
                  <input type="text" name="name" autoComplete="name" required />
                </label>
                <label>
                  Email address
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>
              <label>
                Message
                <textarea name="message" rows="5" required />
              </label>
              <button className="button button-primary" type="submit">
                Send a message <span aria-hidden="true">↗</span>
              </button>
            </form>
          </div>
        </div>
      </motion.section>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Mubasher Mukhtar</span>
        <span>Built with care · Lahore, Pakistan</span>
      </footer>
    </>
  );
}

export default Contact;
