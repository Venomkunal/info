"use client";

import { motion } from "framer-motion";
import styles from "../../styles/sections/Results.module.css";
import Card from "../ui/Card";
import SEOChart from "../../components/SEOChart";

export default function Results() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADER */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className={styles.title}>
            Real Results. <span>Measured Growth.</span>
          </h2>

          <p className={styles.subtitle}>
            We don’t just build websites — we create systems that generate measurable business outcomes.
          </p>
        </motion.div>

        {/* STATS */}
        <div className={styles.stats}>
          <Card>
            <h3>+300%</h3>
            <p>Organic Traffic Growth</p>
            <span>Within 90 days through SEO optimization</span>
          </Card>

          <Card>
            <h3>+180%</h3>
            <p>Lead Generation</p>
            <span>Automated funnels + conversion design</span>
          </Card>

          <Card>
            <h3>2x</h3>
            <p>Revenue Increase</p>
            <span>From optimized UX & backend automation</span>
          </Card>
        </div>

        {/* CHART + INSIGHTS */}
        <div className={styles.analytics}>
          
          {/* LEFT: CHART */}
          <div className={styles.chart}>
            <SEOChart />
          </div>

          {/* RIGHT: INSIGHTS */}
          <div className={styles.insights}>
            <h3>📊 What Drives These Results?</h3>

            <ul>
              <li>✔ Advanced SEO architecture (on-page + technical)</li>
              <li>✔ High-conversion UI/UX design principles</li>
              <li>✔ Automated lead capture & nurturing systems</li>
              <li>✔ Performance optimization (speed + mobile-first)</li>
              <li>✔ Continuous analytics & improvement loop</li>
            </ul>

            <div className={styles.note}>
              Results may vary depending on business model, competition, and execution timeline.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}