"use client";

import { ReactNode } from "react";
import styles from "./Slide.module.css";

type Props = {
  children: ReactNode;
};

export default function Slide({ children }: Props) {
  return (
    <section className={styles.slide}>
      <div className={styles.inner}>
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
}