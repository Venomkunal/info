"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/page.module.css";

export default function Home() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => Math.min(i + 1, slides.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  const slides = [

    // HERO
    <section className={styles.slide} key="hero">
      <div className={styles.hero}>
        <img src="/logo.jpg" className={styles.logo} />

        <h1 className={styles.title}>
          Shineweb Tech Creations
        </h1>

        <p className={styles.subtitle}>
          Complete IT • SEO • Software • Hardware Solutions
        </p>

        <a
          href="https://www.shinewebtechcretions.online"
          target="_blank"
          className={styles.btn}
        >
          Visit Website
        </a>
      </div>
    </section>,

    // SERVICES
    <section className={styles.slide} key="services">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Services</h2>

        <div className={styles.grid}>
          {[
            "Web Development",
            "UI/UX Design",
            "SEO (Local + Global)",
            "Business Profile Setup",
            "Website Upgrade",
          ].map((item, i) => (
            <div key={i} className={styles.card}>{item}</div>
          ))}
        </div>
      </div>
    </section>,

    // PRODUCTS
    <section className={styles.slide} key="products">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Products</h2>

        <div className={styles.grid}>
          {[
            "Computer Parts",
            "Laptops & Desktops",
            "Networking Devices",
            "Custom PC Builds",
          ].map((item, i) => (
            <div key={i} className={styles.card}>{item}</div>
          ))}
        </div>
      </div>
    </section>,

    // PRICING
    <section className={styles.slide} key="pricing">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Pricing</h2>

        <div className={styles.grid}>
          {[
            "Starter ₹10K",
            "Growth ₹25K",
            "Pro ₹50K+",
          ].map((item, i) => (
            <div key={i} className={styles.cardHighlight}>{item}</div>
          ))}
        </div>
      </div>
    </section>,

    // CONTACT
    <section className={styles.slide} key="contact">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Contact</h2>

        <p>support@shinewebtechcretions.online</p>
        <p>+91 9365963310</p>

        <a
          href="https://wa.me/917099093224"
          className={styles.btn}
        >
          WhatsApp Now
        </a>
      </div>
    </section>,
  ];

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.slider}
        animate={{ x: `-${index * 100}vw` }}
        transition={{ duration: 0.6 }}
      >
        {slides}
      </motion.div>

      <div className={styles.nav}>
        <button onClick={prev}>←</button>
        <button onClick={next}>→</button>
      </div>

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