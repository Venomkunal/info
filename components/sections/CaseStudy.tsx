"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import styles from "../../styles/sections/CaseStudy.module.css";

const slides = [
  {
    title: "Day 0",
    content: (
      <>
        <p>❌ No Website</p>
        <p>❌ No Leads</p>
        <p>❌ Manual Work</p>
      </>
    ),
  },
  {
    title: "Process",
    content: (
      <>
        <p>⚙️ Website Development</p>
        <p>📈 SEO Optimization</p>
        <p>🤖 Automation Setup</p>
        <p>🚀 Performance Boost</p>
      </>
    ),
  },
  {
    title: "Day 90",
    content: (
      <div className={styles.results}>
        <div>
          <strong>+300%</strong>
          <span>Traffic</span>
        </div>
        <div>
          <strong>+180%</strong>
          <span>Leads</span>
        </div>
        <div>
          <strong>3x</strong>
          <span>Revenue</span>
        </div>
      </div>
    ),
  },
];

export default function CaseStudy() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = () =>
    setIndex((i) => (i + 1) % slides.length);

  const prev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);

  // 🔥 AUTO PLAY
  useEffect(() => {
    if (paused) return;

    intervalRef.current = setInterval(() => {
      next();
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* TITLE */}
        <h1 className={styles.title}>
          From Zero → <span>3x Revenue</span>
        </h1>

        {/* SLIDER */}
        <div
          className={styles.sliderWrap}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          {/* 🔥 PROGRESS BAR */}
          <div className={styles.progressBar}>
            <motion.div
              key={index}
              className={styles.progressFill}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "linear" }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className={styles.slide}
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={() => setPaused(true)}
              onDragEnd={(e, info) => {
                setPaused(false);

                if (info.offset.x < -80) next();
                if (info.offset.x > 80) prev();
              }}
            >
              <h2>{slides[index].title}</h2>

              <div className={styles.content}>
                {slides[index].content}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* DOT NAV */}
        <div className={styles.progressDots}>
          {slides.map((_, i) => (
            <div
              key={i}
              className={`${styles.dot} ${i === index ? styles.active : ""}`}
              onClick={() => {
                setIndex(i);
                setPaused(true);
              }}
            />
          ))}
        </div>

        {/* NAV */}
        <div className={styles.nav}>
          <button onClick={prev}>‹</button>
          <button onClick={next}>›</button>
        </div>

        {/* TAGLINE */}
        <p className={styles.tagline}>
          We don’t just build websites. We build growth systems.
        </p>

      </div>
    </section>
  );
}