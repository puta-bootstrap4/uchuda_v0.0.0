'use client';
import React, { useRef, useEffect ,useState} from 'react';
import Image from 'next/image';

const Hoge: React.FC = () => {
  const imageRef = useRef<AFRAME.Entity | null>(null);
  const newImageRef = useRef<AFRAME.Entity | null>(null);
  const [showNewImage, setShowNewImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const image = imageRef.current;
      if (image) {
        // DOMから画像エレメントを削除
        image.parentNode?.removeChild(image);
        setShowNewImage(true);

      }
    }, 3000); // 3000ミリ秒後に実行
   
    // コンポーネントのクリーンアップ時にタイマーをクリア
    return () => clearTimeout(timer);
  }, []);

  return (
    <a-scene>
      <a-assets timeout="10000">
        <Image id="my-image" src="boke.jpeg" alt=""/>
        <img id="new-image" src="eri.jpeg" />
        <img id="flying-image" src="susi.png" />

      </a-assets>

      <a-sky src="#my-image" width="1" height="5"></a-sky>


      <a-image src="#flying-image" visible={true} ref={imageRef} position="0 1 -60" scale="6 6 6"
                               animation="property: position; to: 0 1.6 -5; dir: alternate; dur: 200; easing: easeInSine; loop: true">      </a-image>
      {showNewImage && (
        <a-image src="#new-image" visible={true} ref={newImageRef} position="0 1 -60" scale="1 1 1"
                  animation__position="property: position; to: 0 1 -3; dur: 3000; easing: linear; loop: false"
                  animation__rotation="property: rotation; to: 0 360 0; dur: 10000; easing: linear; loop: true">
        </a-image>
      )}
      <a-camera position="0 1.6 0"></a-camera>
      <a-light type="ambient" color="#445451"></a-light>
      <a-light type="directional" color="#FFF" intensity="0.5" position="-1 1 1"></a-light>
    </a-scene>
  );
};

export default Hoge;