"use client";

import { useState } from "react";
import styles from "./DevicePreview.module.css";

export default function DevicePreview() {
  const [device, setDevice] = useState("desktop");

  return (
    <div className={styles.wrapper}>
      
      {/* CONTROLS */}
      <div className={styles.controls}>
        <button onClick={() => setDevice("desktop")}>🖥 Desktop</button>
        <button onClick={() => setDevice("tablet")}>📲 Tablet</button>
        <button onClick={() => setDevice("mobile")}>📱 Mobile</button>
      </div>

      {/* DEVICE FRAME */}
      <div className={`${styles.frame} ${styles[device]}`}>
        <iframe
          src="/"
          className={styles.iframe}
          style={{ height: '100%' }}
        />
      </div>
    </div>
  );
}