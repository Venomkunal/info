"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "../styles/Slide.module.css";

export default function Slide({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={styles.slide}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : {}
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}