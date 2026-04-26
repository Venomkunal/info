"use client";

import { motion } from "framer-motion";
import styles from "../../styles/sections/Features.module.css";

const items = [
  {
    title: "Get More Customers",
    desc: "Rank higher on Google and attract high-quality leads actively searching for your services.",
    stat: "+300% Traffic",
    details: [
      "✔ Keyword-focused SEO strategy",
      "✔ Technical optimization (speed, structure)",
      "✔ Google ranking improvements",
    ],
    icon: "📈",
  },
  {
    title: "Automate Your Business",
    desc: "Turn your website into a 24/7 sales machine that captures and converts leads automatically.",
    stat: "24/7 Automation",
    details: [
      "✔ Auto lead capture forms",
      "✔ WhatsApp & email automation",
      "✔ CRM integration",
    ],
    icon: "🤖",
  },
  {
    title: "Increase Revenue",
    desc: "Convert more visitors into paying customers with optimized UI/UX and funnel design.",
    stat: "2x Revenue",
    details: [
      "✔ Conversion-focused design",
      "✔ Sales funnel optimization",
      "✔ Performance tracking",
    ],
    icon: "💰",
  },
];

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADER */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className={styles.title}>
            We Don’t Build Websites.
            <span> We Build Growth Systems.</span>
          </h2>

          <p className={styles.subtitle}>
            Every feature is designed with one goal: generate more leads, more customers, and more revenue for your business.
          </p>
        </motion.div>

        {/* FEATURES GRID */}
        <div className={styles.grid}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className={styles.icon}>{item.icon}</div>

              <h3>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>

              {/* DETAILS LIST */}
              <ul className={styles.list}>
                {item.details.map((d, index) => (
                  <li key={index}>{d}</li>
                ))}
              </ul>

              {/* RESULT STAT */}
              <div className={styles.stat}>{item.stat}</div>
            </motion.div>
          ))}
        </div>

        {/* SUPPORTING FEATURES */}
<div className={styles.techStack}>
  <div>⚡ Fast Website</div>
  <div>📈 SEO Growth</div>
  <div>📱 Mobile Ready</div>
  <div>🔒 Secure System</div>
</div>

        {/* TRUST / PROOF SECTION */}
        <div className={styles.trustBox}>
          <h3>Why Businesses Choose Us</h3>
          <div className={styles.trustGrid}>
            <div>
              <strong>50+</strong>
              <span>Projects Delivered</span>
            </div>
            <div>
              <strong>95%</strong>
              <span>Client Satisfaction</span>
            </div>
            <div>
              <strong>Fast</strong>
              <span>Delivery & Support</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <a href="https://wa.me/917099093224" className={styles.primary}>
            Start Your Project
          </a>
          <p className={styles.note}>
            Free consultation • No commitment
          </p>
        </div>

      </div>
    </section>
  );
}