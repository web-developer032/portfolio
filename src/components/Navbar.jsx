import React, { useState } from "react";

const links = [
  ["about", "About"],
  ["work", "Experience"],
  ["skills", "Skills"],
  ["projects", "Projects"],
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-nav">
      <a className="brand" href="#home" onClick={() => setIsOpen(false)}>
        MM<span className="brand-mark">.</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "×" : "☰"}
      </button>
      <nav aria-label="Main navigation">
        <ul className={`nav-links${isOpen ? " is-open" : ""}`}>
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setIsOpen(false)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="nav-contact"
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              Let’s talk ↗
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
