"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "../../styles/sections/Contact.module.css";

export default function Contact() {
  const fullText = "Hi, I want to grow my business 🚀";
  const [text, setText] = useState("");

  // typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const phone = "917099093224";
const message = encodeURIComponent(
  "Hi, I want to grow my business 🚀. Can you help me?"
);

const whatsappLink = `https://wa.me/${phone}?text=${message}`;
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADLINE */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let’s Build Your Growth System <span>🚀</span>
        </motion.h1>

        {/* SUBTEXT */}
        <p className={styles.subtitle}>
          Start getting customers, leads, and revenue — without manual work.
        </p>

        {/* TYPING BOX */}
        <div className={styles.chatBox}>
          {text}
          <span className={styles.cursor}>|</span>
        </div>

        {/* CTA */}
        
        <motion.a
          href={whatsappLink}
          target="_blank"
          className={styles.cta}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          💬 Start Chat on WhatsApp
        </motion.a>

        {/* URGENCY */}
        <p className={styles.urgency}>
          ⚡ Limited slots this month — fast response guaranteed
        </p>

        {/* TRUST */}
        <p className={styles.trust}>
          Free consultation • No commitment • Instant reply
        </p>

      </div>
    </section>
  );
}