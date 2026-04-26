"use client";

import { motion } from "framer-motion";
import styles from "../../styles/sections/CaseStudy.module.css";

const steps = [
  "Website Development",
  "SEO Optimization",
  "Automation Setup",
  "Performance Boost",
];

export default function CaseStudy() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* TITLE */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          From Zero → <span>3x Revenue</span>
        </motion.h1>

        {/* TIMELINE */}
        <div className={styles.timeline}>

          {/* BEFORE */}
          <motion.div
            className={`${styles.card} ${styles.before}`}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3>Day 0</h3>
            <p>❌ No Website</p>
            <p>❌ No Leads</p>
            <p>❌ Manual Work</p>
          </motion.div>

          {/* PROCESS LINE */}
          <div className={styles.process}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className={styles.step}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.3 }}
              >
                {step}
              </motion.div>
            ))}
          </div>

          {/* AFTER */}
          <motion.div
            className={`${styles.card} ${styles.after}`}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3>Day 90</h3>

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
          </motion.div>

        </div>

        {/* TAGLINE */}
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          We don’t just build websites. We build growth systems.
        </motion.p>

      </div>
    </section>
  );
}