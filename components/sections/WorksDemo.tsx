"use client";

import { useEffect, useRef, useState } from "react";
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

  const iframeRef = useRef<HTMLIFrameElement>(null);

  /* Auto Scroll (only works if iframe allows access) */
  useEffect(() => {
    let interval: any;

    if (loaded && iframeRef.current) {
      interval = setInterval(() => {
        try {
          const iframe = iframeRef.current;
          const doc = iframe?.contentWindow?.document;

          if (!doc) return;

          const maxScroll = doc.body.scrollHeight;
          const current = doc.documentElement.scrollTop;

          if (current + 400 >= maxScroll) {
            doc.documentElement.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            doc.documentElement.scrollBy({ top: 250, behavior: "smooth" });
          }
        } catch {
          // Cross-origin restriction (normal)
        }
      }, 2500);
    }

    return () => clearInterval(interval);
  }, [loaded, active]);

  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.container}>
        <h1 className={styles.title}>
          Our Work Live Demos <span>Preview</span>
        </h1>

        {/* Device Switch */}
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

        {/* Tabs */}
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

      {/* Preview Area */}
      <div className={styles.previewArea}>
        
        {/* Desktop */}
        {device === "desktop" && (
          <div className={styles.macWrapper}>
            <img src="/macbook.png" className={styles.macImage} />

            <div className={styles.macScreen}>
              <div className={styles.browser}>
                
                <div className={styles.browserTop}>
                  <div className={styles.dots}>
                    <span className={styles.red}></span>
                    <span className={styles.yellow}></span>
                    <span className={styles.green}></span>
                  </div>

                  <div className={styles.address}>
                    {demos[active].url}
                  </div>
                </div>

                <div className={styles.browserBody}>
                  {!loaded && <div className={styles.loader}>Loading...</div>}

                  <iframe
                    ref={iframeRef}
                    key={demos[active].url}
                    src={demos[active].url}
                    onLoad={() => setLoaded(true)}
                  />
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Mobile */}
        {device === "mobile" && (
          <div className={styles.phoneWrapper}>
            <img src="/iphone.png" className={styles.phoneImage} />

            <div className={styles.phoneScreen}>
              <div className={styles.mobileBrowser}>
                
                <div className={styles.mobileTop}>
                  🔒 {demos[active].url}
                </div>

                <div className={styles.mobileBody}>
                  {!loaded && <div className={styles.loader}>Loading...</div>}

                  <iframe
                    ref={iframeRef}
                    key={demos[active].url}
                    src={demos[active].url}
                    onLoad={() => setLoaded(true)}
                  />
                </div>

              </div>
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