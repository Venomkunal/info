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
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  
  // NEW: State to track orientation
  const [isLandscape, setIsLandscape] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const [scale, setScale] = useState(1);
  const [iframeSize, setIframeSize] = useState({ width: 1440, height: 900 });

  const desktopScreenRef = useRef<HTMLDivElement>(null);
  const tabletScreenRef = useRef<HTMLDivElement>(null);
  const mobileScreenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeRef =
      device === "desktop"
        ? desktopScreenRef.current
        : device === "tablet"
        ? tabletScreenRef.current
        : mobileScreenRef.current;

    // NEW: Calculate standard widths based on device AND orientation
    let targetViewportWidth = 1440;
    if (device === "tablet") {
      targetViewportWidth = isLandscape ? 1024 : 768;
    } else if (device === "mobile") {
      targetViewportWidth = isLandscape ? 852 : 393;
    }

    if (!activeRef) return;

    const calculateScale = () => {
      const { width, height } = activeRef.getBoundingClientRect();
      const calculatedScale = width / targetViewportWidth;
      
      setScale(calculatedScale);
      setIframeSize({
        width: targetViewportWidth + 20, 
        height: height / calculatedScale,
      });
    };

    calculateScale();

    const observer = new ResizeObserver(() => calculateScale());
    observer.observe(activeRef);

    const preventWrapperScroll = () => {
      if (activeRef.scrollTop !== 0) activeRef.scrollTop = 0;
      if (activeRef.scrollLeft !== 0) activeRef.scrollLeft = 0;
    };
    
    activeRef.addEventListener("scroll", preventWrapperScroll);

    return () => {
      observer.disconnect();
      activeRef.removeEventListener("scroll", preventWrapperScroll);
    };
  }, [device, isLandscape]); // Added isLandscape to dependencies

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
              setIsLandscape(false); // Reset on switch
              setLoaded(false);
            }}
          >
            💻 Desktop
          </button>
          <button
            className={device === "tablet" ? styles.active : ""}
            onClick={() => {
              setDevice("tablet");
              setIsLandscape(false); // Reset on switch
              setLoaded(false);
            }}
          >
            📟 Tablet
          </button>
          <button
            className={device === "mobile" ? styles.active : ""}
            onClick={() => {
              setDevice("mobile");
              setIsLandscape(false); // Reset on switch
              setLoaded(false);
            }}
          >
            📱 Mobile
          </button>

          {/* NEW: Rotate Button (Hidden on Desktop) */}
          {device !== "desktop" && (
            <button
              className={styles.rotateBtn}
              onClick={() => {
                setIsLandscape(!isLandscape);
                setLoaded(false);
              }}
            >
              🔄 {isLandscape ? "Landscape" : "Portrait"}
            </button>
          )}
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
        {/* DESKTOP */}
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

                <div ref={desktopScreenRef} className={styles.browserBody}>
                  {!loaded && <div className={styles.loader}>Loading...</div>}
                  <iframe
                    key={demos[active].url}
                    src={demos[active].url}
                    onLoad={() => setLoaded(true)}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: `${iframeSize.width}px`,
                      height: `${iframeSize.height}px`,
                      transform: `scale(${scale})`,
                      transformOrigin: "top left",
                      border: "none",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TABLET */}
        {device === "tablet" && (
          <div className={isLandscape ? styles.tabletLandscape : styles.tabletWrapper}>
            {!isLandscape && <img src="/ipad.png" alt="Tablet" className={styles.tabletImage} />}
            
            <div className={isLandscape ? styles.landscapeScreen : styles.tabletScreen}>
              <div className={styles.tabletBrowser}>
                <div className={styles.tabletTop}>🔒 {demos[active].url}</div>
                
                <div ref={tabletScreenRef} className={styles.tabletBody}>
                  {!loaded && <div className={styles.loader}>Loading...</div>}
                  <iframe
                    key={demos[active].url}
                    src={demos[active].url}
                    onLoad={() => setLoaded(true)}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: `${iframeSize.width}px`,
                      height: `${iframeSize.height}px`,
                      transform: `scale(${scale})`,
                      transformOrigin: "top left",
                      border: "none",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MOBILE */}
        {device === "mobile" && (
          <div className={isLandscape ? styles.phoneLandscape : styles.phoneWrapper}>
            {!isLandscape && <img src="/iphone.png" alt="iPhone" className={styles.phoneImage} />}
            
            <div className={isLandscape ? styles.landscapeScreen : styles.phoneScreen}>
              <div className={styles.mobileBrowser}>
                <div className={styles.mobileTop}>🔒 {demos[active].url}</div>
                
                <div ref={mobileScreenRef} className={styles.mobileBody}>
                  {!loaded && <div className={styles.loader}>Loading...</div>}
                  <iframe
                    key={demos[active].url}
                    src={demos[active].url}
                    onLoad={() => setLoaded(true)}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: `${iframeSize.width}px`,
                      height: `${iframeSize.height}px`,
                      transform: `scale(${scale})`,
                      transformOrigin: "top left",
                      border: "none",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.actionWrap}>
        <a href={demos[active].url} target="_blank" rel="noreferrer" className={styles.btn}>
          Open Full Site ↗
        </a>
      </div>
    </section>
  );
}