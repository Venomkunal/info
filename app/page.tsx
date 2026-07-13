"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/page.module.css";
import Hero from "@/components/sections/Hero";
import Results from "@/components/sections/Results";
import Features from "@/components/sections/Features";
import CaseStudy from "@/components/sections/CaseStudy";
import BeforeAfterSlide from "@/components/sections/BeforeAfterSlide";
import WorksDemo from "@/components/sections/WorksDemo";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [index, setIndex] = useState(0);

  const goToSlide = (slide: number) => {
    setIndex(slide);
  };

  const slides = [
    <Hero key="hero" goToSlide={goToSlide} />,
    <BeforeAfterSlide key="before-after" />,
    <Results key="results" />,
    <CaseStudy key="case" />,
    <Features key="features" />,
    <WorksDemo key="works" />,
    <Pricing key="pricing" />,
    <Testimonials key="testimonials" />,
    <Contact key="contact" />,
  ];

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

  // Swipe
  const startX = useRef(0);
  const startY = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - startX.current;
    const deltaY = e.changedTouches[0].clientY - startY.current;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 80) prev();
      if (deltaX < -80) next();
    }
  };

  // Mouse wheel
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

      <div className={styles.nav}>
        <button
          onClick={prev}
          disabled={index === 0}
          className={styles.navBtn}
        >
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

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <div
            key={i}
            className={`${styles.dot} ${
              i === index ? styles.active : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}