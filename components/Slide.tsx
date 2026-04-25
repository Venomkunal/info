import { ReactNode } from "react";
import styles from "../styles/Slide.module.css";

type Props = {
  children: ReactNode;
};

export default function Slide({ children }: Props) {
  return (
    <section className={styles.slide}>
      <div className={styles.content}>{children}</div>
    </section>
  );
}