"use client";

import { motion } from "framer-motion";
import styles from "../../styles/sections/BeforeAfter.module.css";

const before = ["No Website", "No Leads", "Manual Work", "Low Visibility"];
const after = ["Pro Website", "Daily Leads", "Automation", "Top Ranking"];

export default function BeforeAfterSlide() {
  return (
    <section className={styles.slide}>

      {/* BACKGROUND PARTICLES */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className={styles.particle}
            animate={{ x: [0, 400], opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className={styles.container}>

        <h1 className={styles.title}>
          From Struggle → <span>Growth</span>
        </h1>

        <div className={styles.compare}>

          {/* BEFORE */}
          <motion.div
            className={`${styles.card} ${styles.before}`}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <h3>Before</h3>
            {before.map((b, i) => (
              <p key={i}>❌ {b}</p>
            ))}
          </motion.div>

          {/* FLOW LINE */}
          <div className={styles.flowLine}></div>

          {/* AFTER */}
          <motion.div
            className={`${styles.card} ${styles.after}`}
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.3 }}
          >
            <h3>After</h3>
            {after.map((a, i) => (
              <p key={i}>✅ {a}</p>
            ))}
          </motion.div>

        </div>

        <p className={styles.tagline}>
          We don’t fix websites. We transform businesses.
        </p>

      </div>
    </section>
  );
}