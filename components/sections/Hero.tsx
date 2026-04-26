"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import styles from "../../styles/sections/Hero.module.css";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // cursor tracking (spotlight)
  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className={styles.hero}>
      {/* ===== BACKGROUND ===== */}
      <div className={styles.bg}>
        <div className={styles.gradient1}></div>
        <div className={styles.gradient2}></div>
        <div className={styles.grid}></div>

        {/* Cursor spotlight */}
        <motion.div
          className={styles.spotlight}
          style={{
            left: mouseX,
            top: mouseY,
          }}
        />
      </div>

      <div className={styles.container}>
        {/* LEFT */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/logo.jpg" className={styles.logo} />

          <h1 className={styles.title}>
            We Build Systems That
            <span>Print Revenue 🚀</span>
          </h1>

          <p className={styles.subtitle}>
            Websites, SEO engines, and automation pipelines designed to grow your business on autopilot.
          </p>

          <div className={styles.cta}>
            <a href="#" className={styles.primary}>
              Start Project
            </a>
            <a href="#" className={styles.secondary}>
              View Work
            </a>
          </div>

          <div className={styles.trust}>
            ⭐ 50+ Projects • Proven ROI • Fast Delivery
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.glassCard}>
            <h3>🚀 Growth Stack</h3>
            <ul>
              <li>🌐 High-converting Websites</li>
              <li>📈 SEO Traffic Engine</li>
              <li>🤖 Automation Systems</li>
              <li>⚙️ Backend Infrastructure</li>
            </ul>
          </div>

          <div className={styles.floating1}>+300% Traffic</div>
          <div className={styles.floating2}>24/7 Automation</div>
        </motion.div>
      </div>
    </section>
  );
}