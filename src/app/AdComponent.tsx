// AdComponent.tsx
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const AdComponent: React.FC = () => {
  useEffect(() => {
    // AdSense スクリプトの読み込み
    const adsbygoogle = (window as any).adsbygoogle || [];
    adsbygoogle.push({});
  }, []);

  return (
    <div>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4549864067149386"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
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
