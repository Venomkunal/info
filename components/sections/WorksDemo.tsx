"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../../styles/sections/WorksDemo.module.css";

const demos = [
  { name: "Business Website", url: "https://rodalitraders.shinewebtechcretions.online/" },
  { name: "E-commerce Store", url: "https://sample2-0.vercel.app/" },
  { name: "Travel Agent", url: "https://awesome-arunachal.vercel.app/" },
  { name: "Bakery Store", url: "https://bakery.shinewebtechcretions.online/" },
];

export default function WorksDemo() {
  const [active, setActive] = useState(0);
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [loaded, setLoaded] = useState(false);

  // Dynamic Iframe states
  const [scale, setScale] = useState(1);
  const [iframeSize, setIframeSize] = useState({ width: 1440, height: 900 });

  // Separate refs to ensure clean measurements when switching tabs
  const desktopScreenRef = useRef<HTMLDivElement>(null);
  const mobileScreenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Choose the active ref and the standard viewport width we want to test
    const activeRef = device === "desktop" ? desktopScreenRef.current : mobileScreenRef.current;
    const targetViewportWidth = device === "desktop" ? 1440 : 393;

    if (!activeRef) return;

    const calculateScale = () => {
      const { width, height } = activeRef.getBoundingClientRect();
      
      // Calculate scale to make the standard viewport fit the visual mockup width
      const calculatedScale = width / targetViewportWidth;
      
      setScale(calculatedScale);
      setIframeSize({
        width: targetViewportWidth + 20,
        // Calculate height inversely so it perfectly fills the mockup without letterboxing
        height: height / calculatedScale,
      });
    };

    calculateScale();

    // Use ResizeObserver to automatically adjust if the window or container resizes
    const observer = new ResizeObserver(() => calculateScale());
    observer.observe(activeRef);

    return () => observer.disconnect();
  }, [device]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Our Work Live Demos <span>Preview</span>
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

      <div className={styles.previewArea}>
        {device === "desktop" && (
          <div className={styles.macWrapper}>
            <img src="/macbook.png" alt="MacBook" className={styles.macImage} />
            <div className={styles.macScreen}>
              <div className={styles.browser}>
                <div className={styles.browserTop}>
                  <div className={styles.dots}>
                    <span className={styles.red}></span>
                    <span className={styles.yellow}></span>
                    <span className={styles.green}></span>
                  </div>
                  <div className={styles.address}>{demos[active].url}</div>
                </div>

                {/* Desktop Screen Ref attached here */}
                <div ref={desktopScreenRef} className={styles.browserBody}>
                  {!loaded && <div className={styles.loader}>Loading...</div>}
                  <iframe
                    key={demos[active].url}
                    src={demos[active].url}
                    onLoad={() => setLoaded(true)}
                    style={{
                      width: `${iframeSize.width}px`,
                      height: `${iframeSize.height}px`,
                      transform: `scale(${scale})`,
                      transformOrigin: "top left",
                      border: "none"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {device === "mobile" && (
          <div className={styles.phoneWrapper}>
            <img src="/iphone.png" alt="iPhone" className={styles.phoneImage} />
            <div className={styles.phoneScreen}>
              <div className={styles.mobileBrowser}>
                <div className={styles.mobileTop}>🔒 {demos[active].url}</div>
                
                {/* Mobile Screen Ref attached here */}
                <div ref={mobileScreenRef} className={styles.mobileBody}>
                  {!loaded && <div className={styles.loader}>Loading...</div>}
                  <iframe
                    key={demos[active].url}
                    src={demos[active].url}
                    onLoad={() => setLoaded(true)}
                    style={{
                      width: `${iframeSize.width}px`,
                      height: `${iframeSize.height}px`,
                      transform: `scale(${scale})`,
                      transformOrigin: "top left",
                      border: "none"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.actionWrap}>
        <a
          href={demos[active].url}
          target="_blank"
          rel="noreferrer"
          className={styles.btn}
        >
          Open Full Site ↗
        </a>
      </div>
    </section>
  );
}