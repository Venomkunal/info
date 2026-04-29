"use client";

import { motion } from "framer-motion";
import styles from "../../styles/sections/Pricing.module.css";

const plans = [
  {
    name: "Starter",
    price: "₹10K",
    desc: "For basic online presence",
    features: ["1-3 Pages", "Mobile Ready", "Basic SEO"],
  },
  {
    name: "Growth",
    price: "₹25K",
    desc: "Best for real business growth",
    highlight: true,
    features: [
      "Full Website",
      "Advanced SEO",
      "Automation System",
      "Lead Generation",
    ],
  },
  {
    name: "Pro",
    price: "₹50K+",
    desc: "Complete business system",
    features: [
      "Custom System",
      "Full Automation",
      "CRM Integration",
      "Scaling Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className={styles.section}>
      
      {/* 🔥 SCROLL WRAPPER */}
      <div className={styles.scrollInner}>
        
        <div className={styles.container}>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Investment → <span>Returns</span>
          </motion.h1>

          <div className={styles.grid}>
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                className={`${styles.card} ${
                  plan.highlight ? styles.highlight : styles.side
                }`}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {plan.highlight && (
                  <div className={styles.badge}>Most Chosen</div>
                )}

                <h3>{plan.name}</h3>

                <motion.h1
                  className={styles.price}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  {plan.price}
                </motion.h1>

                <p className={styles.desc}>{plan.desc}</p>

                <ul>
                  {plan.features.map((f, idx) => (
                    <li key={idx}>✔ {f}</li>
                  ))}
                </ul>

                <a href="#" className={styles.btn}>
                  Choose Plan
                </a>
              </motion.div>
            ))}
          </div>

          <motion.p
            className={styles.roi}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            One good client can recover your entire investment.
          </motion.p>

        </div>
      </div>
    </section>
  );
}