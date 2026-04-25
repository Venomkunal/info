"use client";

import React, {
  useEffect,
  useRef,
  useState,
  PropsWithChildren,
} from "react";
import { motion } from "framer-motion";
import styles from "../styles/page.module.css";
import SEOChart from "../components/SEOChart";

export default function Home() {
  const slides: React.ReactNode[] = [
    // HERO
   <section className={styles.slide} key="hero">
  <div className={styles.heroGrid}>
    
    {/* LEFT SIDE */}
    <div className={styles.heroContent}>
      <img src="/logo.jpg" className={styles.logo} />

      <h1 className={styles.bigTitle}>
        Shineweb Tech Creations 🚀
      </h1>

      <p className={styles.subtitle}>
        We build websites, SEO systems, and automation that generate real business growth.
      </p>

      <div className={styles.ctaRow}>
        <a
          href="https://www.shinewebtechcretions.online"
          target="_blank"
          className={styles.btnPrimary}
        >
          Visit Website
        </a>

        <a
          href="https://wa.me/917099093224"
          className={styles.btnGhost}
        >
          Contact Now
        </a>
      </div>

      {/* TRUST LINE */}
      <div className={styles.trust}>
        ⭐ Trusted by local businesses • Fast delivery • Real results
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className={styles.heroVisual}>
      <div className={styles.heroCard}>
        <h3>🚀 What We Do</h3>

        <ul>
          <li>🌐 Website Development</li>
          <li>📈 SEO Optimization</li>
          <li>🖥️ Hardware & Networking</li>
          <li>⚙️ Business Automation</li>
        </ul>
      </div>

      {/* FLOATING MINI CARDS */}
      <div className={styles.floatingCard}>+300% Traffic</div>
      <div className={styles.floatingCard2}>24/7 Support</div>
    </div>

  </div>
</section>,

    // RESULTS
    <section className={styles.slide} key="results">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Results</h2>

        <div className={styles.statsGrid}>
          <Card><h3>+300%</h3><p>Traffic</p></Card>
          <Card><h3>+180%</h3><p>Leads</p></Card>
          <Card><h3>2x</h3><p>Revenue</p></Card>
        </div>

        <div className={styles.chartBox}>
          <SEOChart />
        </div>
      </div>
    </section>,

    // FEATURES
    <section className={styles.slide} key="features">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Features</h2>

        <div className={styles.grid}>
          {[
            "⚡ Fast Website",
            "📈 SEO Optimized",
            "🤖 Automation",
            "📊 Analytics",
            "🔒 Secure",
            "📱 Mobile Ready",
          ].map((item, i) => (
            <Card key={i}>{item}</Card>
          ))}
        </div>
      </div>
    </section>,

    // CASE STUDY
    <section className={styles.slide} key="case">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Case Study</h2>

        <div className={styles.caseBox}>
          <h3>Local Business Growth</h3>
          <p>From zero online presence to 3x revenue.</p>
          <ul>
            <li>✔ SEO Ranking #1</li>
            <li>✔ Automated Leads</li>
            <li>✔ Website Redesign</li>
          </ul>
        </div>
      </div>
    </section>,

    // PRICING
    <section className={styles.slide} key="pricing">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Pricing</h2>

        <div className={styles.pricingGrid}>
          <div className={styles.priceCard}>
            <h3>Starter</h3>
            <h1>₹10K</h1>
            <p>Basic Website</p>
          </div>

          <div className={styles.priceCardPremium}>
            <h3>Growth</h3>
            <h1>₹25K</h1>
            <p>SEO + Automation</p>
          </div>

          <div className={styles.priceCard}>
            <h3>Pro</h3>
            <h1>₹50K+</h1>
            <p>Full System</p>
          </div>
        </div>
      </div>
    </section>,

    // TESTIMONIALS
    <section className={styles.slide} key="testimonials">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Clients</h2>

        <div className={styles.grid}>
          {[
            "Sales doubled!",
            "Best service!",
            "Highly recommended!",
          ].map((t, i) => (
            <Card key={i}>
              ⭐⭐⭐⭐⭐
              <p>{t}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>,

    // CONTACT
    <section className={styles.slide} key="contact">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Contact</h2>

        <a
          href="https://wa.me/917099093224"
          className={styles.btnPrimary}
        >
          WhatsApp Now
        </a>
      </div>
    </section>,
  ];

  const [index, setIndex] = useState(0);
  const total = slides.length;

  const next = () => setIndex((i) => Math.min(i + 1, total - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // swipe
  const startX = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - startX.current;
    if (delta > 50) prev();
    if (delta < -50) next();
  };

  return (
    <div
      className={styles.container}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <motion.div
        className={styles.slider}
        animate={{ x: `-${index * 100}%` }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
      >
        {slides}
      </motion.div>

      <div className={styles.nav}>
        <button onClick={prev} disabled={index === 0} className={styles.navBtn}>‹</button>
        <button onClick={next} disabled={index === total - 1} className={styles.navBtn}>›</button>
      </div>

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <div key={i} className={`${styles.dot} ${i === index ? styles.active : ""}`} />
        ))}
      </div>
    </div>
  );
}

const Card = ({ children }: PropsWithChildren) => (
  <motion.div className={styles.card}>{children}</motion.div>
);