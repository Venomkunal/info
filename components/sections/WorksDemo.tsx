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
  const [scale, setScale] = useState(1);
  const [iframeSize, setIframeSize] = useState({
  width: 2800,
  height: 980,
});

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const updateScale = () => {
    if (!screenRef.current) return;

    const screenWidth = screenRef.current.offsetWidth;
    const screenHeight = screenRef.current.offsetHeight;

    let iframeWidth = 1765;
    let iframeHeight = 889;

    if (window.innerWidth <= 480) {
      iframeWidth = 2045;
      iframeHeight = 867;
    } else if (window.innerWidth <= 768) {
      iframeWidth = 1910;
      iframeHeight = 1024;
    } else if (window.innerWidth <= 1024) {
      iframeWidth = 1980;
      iframeHeight = 989;
    }

    setIframeSize({
      width: iframeWidth,
      height: iframeHeight,
    });

    const scaleX = screenWidth / iframeWidth;
    const scaleY = screenHeight / iframeHeight;

    setScale(Math.min(scaleX, scaleY));
  };

  updateScale();

  window.addEventListener("resize", updateScale);

  return () => {
    window.removeEventListener("resize", updateScale);
  };
}, []);

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
            <img
              src="/macbook.png"
              alt="MacBook"
              className={styles.macImage}
            />

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

                <div
                  ref={screenRef}
                  className={styles.browserBody}
                >
                  {!loaded && (
                    <div className={styles.loader}>
                      Loading...
                    </div>
                  )}

                  <iframe
  ref={iframeRef}
  key={demos[active].url}
  src={demos[active].url}
  onLoad={() => setLoaded(true)}
  style={{
    width: `${iframeSize.width}px`,
    height: `${iframeSize.height}px`,
    transform: `scale(${scale})`,
    transformOrigin: "top left",
  }}
/>
                </div>
              </div>
            </div>
          </div>
        )}

        {device === "mobile" && (
          <div className={styles.phoneWrapper}>
            <img
              src="/iphone.png"
              alt="iPhone"
              className={styles.phoneImage}
            />

            <div className={styles.phoneScreen}>
              <div className={styles.mobileBrowser}>
                <div className={styles.mobileTop}>
                  🔒 {demos[active].url}
                </div>

                <div className={styles.mobileBody}>
                  {!loaded && (
                    <div className={styles.loader}>
                      Loading...
                    </div>
                  )}

                  <iframe
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