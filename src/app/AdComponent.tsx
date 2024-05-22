'use client';
import React, { useEffect } from "react";
import styles from "./styles.module.css";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

export const AdsInFeed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("async", "true"); // asyncの設定
    script.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4549864067149386"); // srcの設定
    script.setAttribute("crossorigin", "anonymous"); // crossOriginの設定

    document.body.appendChild(script);

    script.onload = () => {
        script.onload = () => {
            if (window.adsbygoogle && !window.adsbygoogle.loaded) {
              window.adsbygoogle = window.adsbygoogle || [];
              window.adsbygoogle.push({});
            }
          };
      };
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.adsContainer}>
    <ins className={`adsbygoogle ${styles.adsInArticle}`}
      style={{ display: "block" }}
      data-ad-client="ca-pub-4549864067149386"
      data-ad-slot="2969075044"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
    </div>
  );
};
