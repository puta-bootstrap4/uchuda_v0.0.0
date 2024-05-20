import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const AdComponent: React.FC = () => {
  useEffect(() => {
    const loadAdScript = () => {
      // 既存のスクリプトを確認
      const existingScript = document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4549864067149386"]');
      
      if (!existingScript) {
        // 新しいスクリプト要素を作成
        const script = document.createElement('script');
        script.setAttribute('src', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4549864067149386');
        script.setAttribute('async', 'true');
        script.setAttribute('crossorigin', 'anonymous');

        script.onerror = () => {
          console.error("Failed to load the AdSense script");
        };

        document.body.appendChild(script);

        script.onload = () => {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (e) {
            console.error("AdSense script failed to load:", e);
          }
        };
      } else {
        // 既にスクリプトが存在する場合、そのスクリプトを再利用
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("AdSense script failed to load:", e);
        }
      }
    };

    loadAdScript();
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4549864067149386"
        data-ad-slot="6940109643"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdComponent;
