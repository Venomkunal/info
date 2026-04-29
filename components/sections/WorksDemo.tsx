"use client";

import { useState } from "react";
import styles from "../../styles/sections/WorksDemo.module.css";

const demos = [
  {
    name: "Business Website",
    url: "https://rodalitraders.shinewebtechcretions.online/",
  },
  {
    name: "E-commerce Store",
    url: "https://sample2-0.vercel.app/",
  },
  {
    name: "Travel Agent",
    url: "https://awesome-arunachal.vercel.app/",
  },
  {
    name: "Bakery Store",
    url: "https://bakery.shinewebtechcretions.online/",
  },
];

export default function WorksDemo() {
  const [active, setActive] = useState(0);
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [loaded, setLoaded] = useState(false);

  return (
    <section className={styles.section}>
      
      {/* HEADER (FIXED STYLE) */}
      <div className={styles.container}>
        <h1 className={styles.title}>
          Live Demo <span>Preview</span>
        </h1>

        <div className={styles.deviceSwitch}>
          <button
            className={device === "desktop" ? styles.active : ""}
            onClick={() => {
              setDevice("desktop");
              setLoaded(false);
            }}
          >
            💻 Desktop
          </button>

          <button
            className={device === "mobile" ? styles.active : ""}
            onClick={() => {
              setDevice("mobile");
              setLoaded(false);
            }}
          >
            📱 Mobile
          </button>
        </div>

        <div className={styles.tabs}>
          {demos.map((demo, i) => (
            <button
              key={i}
              onClick={() => {
                setActive(i);
                setLoaded(false);
              }}
              className={active === i ? styles.active : ""}
            >
              {demo.name}
            </button>
          ))}
        </div>
      </div>

      {/* SCROLLABLE DEVICE AREA */}
      <div className={styles.scrollArea}>

        {device === "desktop" && (
          <div className={styles.macWrapper}>
            <img src="/macbook.png" className={styles.macImage} />

            <div className={styles.macScreen}>
              {!loaded && <div className={styles.loader}>Loading...</div>}

              <iframe
                key={demos[active].url}
                src={demos[active].url}
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>
        )}

        {device === "mobile" && (
          <div className={styles.phoneWrapper}>
            <img src="/iphone.png" className={styles.phoneImage} />

            <div className={styles.phoneScreen}>
              {!loaded && <div className={styles.loader}>Loading...</div>}

              <iframe
                key={demos[active].url}
                src={demos[active].url}
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>
        )}

      </div>

      {/* CTA */}
      <div className={styles.actionWrap}>
        <a href={demos[active].url} target="_blank" className={styles.btn}>
          Open Full Site ↗
        </a>
      </div>

    </section>
  );
}