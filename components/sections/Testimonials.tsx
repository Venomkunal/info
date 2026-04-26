"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../styles/sections/Testimonials.module.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    text: "Within 2 months, our sales doubled. The system works.",
  },
  {
    name: "Priya Das",
    role: "Startup Founder",
    text: "We now get leads daily without manual work.",
  },
  {
    name: "Amit Verma",
    role: "Service Provider",
    text: "Professional work and real business growth.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // auto play
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2 className={styles.title}>
          What Clients Say <span>About Us</span>
        </h2>

        <div className={styles.carousel}>

          {/* LEFT BUTTON */}
          <button onClick={prev} className={styles.navBtn}>‹</button>

          {/* TESTIMONIAL */}
          <div className={styles.center}>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -40 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.stars}>⭐⭐⭐⭐⭐</div>

                <p className={styles.text}>
                  "{testimonials[index].text}"
                </p>

                <div className={styles.user}>
                  <strong>{testimonials[index].name}</strong>
                  <span>{testimonials[index].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* RIGHT BUTTON */}
          <button onClick={next} className={styles.navBtn}>›</button>

        </div>

        {/* DOTS */}
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`${styles.dot} ${i === index ? styles.active : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}