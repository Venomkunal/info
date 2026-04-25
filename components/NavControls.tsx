import styles from "../styles/NavControls.module.css";

type Props = {
  next: () => void;
  prev: () => void;
};

export default function NavControls({ next, prev }: Props) {
  return (
    <div className={styles.controls}>
      <button onClick={prev} className={styles.btn}>←</button>
      <button onClick={next} className={styles.btn}>→</button>
    </div>
  );
}