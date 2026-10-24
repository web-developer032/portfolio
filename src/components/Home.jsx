import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Resume from "../assets/MUBASHER MUKHTAR - Resume.pdf";

function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let frameId;
    let points = [];
    let active = true;
    let width = 0;
    let height = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(48, Math.max(18, Math.floor(width / 28)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        dx: (Math.random() - 0.5) * 0.18,
        dy: (Math.random() - 0.5) * 0.18,
      }));
    };

    const draw = () => {
      if (!active) return;
      context.clearRect(0, 0, width, height);
      points.forEach((point, index) => {
        if (!reducedMotion) {
          point.x += point.dx;
          point.y += point.dy;
          if (point.x < 0 || point.x > width) point.dx *= -1;
          if (point.y < 0 || point.y > height) point.dy *= -1;
        }
        points.slice(index + 1).forEach((other) => {
          const distance = Math.hypot(point.x - other.x, point.y - other.y);
          if (distance < 145) {
            context.strokeStyle = `rgba(203, 243, 106, ${0.12 * (1 - distance / 145)})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        });
        context.fillStyle = "rgba(203, 243, 106, .55)";
        context.fillRect(point.x - 1, point.y - 1, 2, 2);
      });
      if (!reducedMotion) frameId = window.requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting;
      if (active) draw();
      else window.cancelAnimationFrame(frameId);
    });
    resize();
    observer.observe(canvas);
    window.addEventListener("resize", resize);
    draw();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas className="hero-canvas" ref={canvasRef} aria-hidden="true" />;
}

function Home() {
  const specialties = [
    "Distributed systems",
    "Backend architecture",
    "Full-stack products",
  ];
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return undefined;
    const intervalId = window.setInterval(() => {
      setSpecialtyIndex((current) => (current + 1) % specialties.length);
    }, 2800);
    return () => window.clearInterval(intervalId);
  }, [specialties.length]);

  return (
    <section id="home" className="hero">
      <motion.div
        className="reading-progress"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
      <NetworkCanvas />
      <div className="hero-orbit" aria-hidden="true" />
      <motion.div
        className="hero-content"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="hero-kicker">
          SENIOR SOFTWARE &amp; AI ENGINEER / LAHORE, PK
        </p>
        <h1>
          Mubasher
          <br />
          <span>Mukhtar.</span>
        </h1>
        <p className="hero-subtitle">
          I build dependable products and distributed systems, from the first
          API contract to the last production edge case.
        </p>
        <p className="hero-specialty" aria-live="polite">
          <span>FOCUS /</span>
          <AnimatePresence mode="wait">
            <motion.strong
              key={specialtyIndex}
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {specialties[specialtyIndex]}
            </motion.strong>
          </AnimatePresence>
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View work <span aria-hidden="true">↗</span>
          </a>
          <a
            className="button button-secondary"
            href={Resume}
            target="_blank"
            rel="noreferrer"
          >
            Download resume <span aria-hidden="true">↓</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
