"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { PropsWithChildren, useRef } from "react";
import styles from "../../styles/ui/Card.module.css";

export default function Card({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);

  // mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(px * 15);
    y.set(-py * 15);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.03 }}
    >
      {/* Glow Layer */}
      <div className={styles.glow} />

      {/* Content */}
      <div className={styles.inner}>{children}</div>
    </motion.div>
  );
}