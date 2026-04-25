"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Slide from "@/components/Slide";
import NavControls from "@/components/NavControls";
import SEOChart from "@/components/SEOChart";
import styles from "../styles/page.module.css";

export default function Home() {
  const [index, setIndex] = useState(0);
  const touchStart = useRef<number | null>(null);

  const playSound = () => {
    const audio = new Audio("/click.mp3");
    audio.volume = 0.2;
    audio.play();
  };

  const next = () => {
    playSound();
    setIndex((i) => Math.min(i + 1, slides.length - 1));
  };

  const prev = () => {
    playSound();
    setIndex((i) => Math.max(i - 1, 0));
  };

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;

    if (diff > 50) next();
    if (diff < -50) prev();
  };

  const slides = [

    <Slide key="1">
      <img src="/logo.jpg" width={100} />
      <h1 className={styles.neon + " " + styles.title}>
        Shineweb Tech Creations
      </h1>
      <p>Complete IT • SEO • Software • Hardware</p>
    </Slide>,

    <Slide key="2">
      <h2 className={styles.neon}>Services</h2>
      <div className={styles.grid}>
        {["Web Dev","UI Design","SEO","Profile","Upgrade"].map(s => (
          <div className={styles.card}>{s}</div>
        ))}
      </div>
    </Slide>,

    <Slide key="3">
      <h2 className={styles.neon}>Products</h2>
      <div className={styles.grid}>
        {["Parts","Laptops","Networking","Custom PC"].map(s => (
          <div className={styles.card}>{s}</div>
        ))}
      </div>
    </Slide>,

    <Slide key="4">
      <h2 className={styles.neon}>SEO Growth</h2>
      <SEOChart />
    </Slide>,

    <Slide key="5">
      <h2 className={styles.neon}>Pricing</h2>
      <div className={styles.grid}>
        {["₹10K","₹25K","₹50K+"].map(p => (
          <div className={styles.card}>{p}</div>
        ))}
      </div>
    </Slide>,

    <Slide key="6">
      <h2 className={styles.neon}>Website</h2>
      <a href="https://www.shinewebtechcretions.online" target="_blank">
        Visit Website
      </a>
    </Slide>,

    <Slide key="7">
      <h2 className={styles.neon}>Contact</h2>
      <p>support@shinewebtechcretions.online</p>
      <p>936596331</p>
    </Slide>,
  ];

  return (
    <div
      className={styles.container}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <motion.div
        className={styles.slider}
        animate={{ x: `-${index * 100}vw` }}
        transition={{ duration: 0.6 }}
      >
        {slides}
      </motion.div>

      <NavControls next={next} prev={prev} />

      <div className={styles.progress}>
        {slides.map((_, i) => (
          <div
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ""}`}
          />
        ))}
      </div>

      <div className={styles.counter}>
        {index + 1}/{slides.length}
      </div>
    </div>
  );
}