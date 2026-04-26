"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/page.module.css";

import Hero from "@/components/sections/Hero";
import Results from "@/components/sections/Results";
import Features from "@/components/sections/Features";
import CaseStudy from "@/components/sections/CaseStudy";
import BeforeAfterSlide from "@/components/sections/BeforeAfterSlide";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const slides = [
    <Hero key="hero" />,
    <BeforeAfterSlide key="before-after" />,
    <Results key="results" />,
    <Features key="features" />,
    <CaseStudy key="case" />,
    <Pricing key="pricing" />,
    <Testimonials key="testimonials" />,
    <Contact key="contact" />,
  ];

  const [index, setIndex] = useState(0);
  const total = slides.length;

  const next = () => setIndex((i) => Math.min(i + 1, total - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // swipe
  const startX = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - startX.current;
    if (delta > 50) prev();
    if (delta < -50) next();
  };

  return (
    <div
      className={styles.container}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <motion.div
        className={styles.slider}
        animate={{ x: `-${index * 100}%` }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
      >
        
        {slides}
      </motion.div>

      {/* NAV */}
      <div className={styles.nav}>
        <button onClick={prev} disabled={index === 0} className={styles.navBtn}>
          ‹
        </button>
        <button onClick={next} disabled={index === total - 1} className={styles.navBtn}>
          ›
        </button>
      </div>

      {/* DOTS */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <div
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ""}`}
          />
        ))}
      </div>
    </div>
  );
}