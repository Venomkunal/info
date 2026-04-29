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
    <Pricing key="pricing" />,        // long → scroll inside
    <Testimonials key="testimonials" />, // long → scroll inside
    <Contact key="contact" />,
  ];

  const [index, setIndex] = useState(0);
  const total = slides.length;

  const next = () => setIndex((i) => Math.min(i + 1, total - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Swipe (fixed)
  const startX = useRef(0);
  const startY = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - startX.current;
    const deltaY = e.changedTouches[0].clientY - startY.current;

    // Only horizontal swipe triggers slide
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 80) prev();
      if (deltaX < -80) next();
    }
  };

  // Optional: Mouse wheel navigation (desktop)
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 60) next();
      if (e.deltaY < -60) prev();
    };

    window.addEventListener("wheel", onWheel);
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      className={styles.container}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <motion.div
        className={styles.slider}
        animate={{ x: `-${index * 100}%` }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {slides}
      </motion.div>

      {/* NAV */}
      <div className={styles.nav}>
        <button onClick={prev} disabled={index === 0} className={styles.navBtn}>
          ‹
        </button>
        <button
          onClick={next}
          disabled={index === total - 1}
          className={styles.navBtn}
        >
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