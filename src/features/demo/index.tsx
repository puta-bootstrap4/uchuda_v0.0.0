import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { gsap } from "gsap";

type ParticleImageProps = {
  imageSrc: string;
  width: number;
  height: number;
  particleSize?: number; // 粒子のサイズを調整するためのオプションプロパティ
};

const ParticleImage: React.FC<ParticleImageProps> = ({
  imageSrc,
  width,
  height,
  particleSize = 1, // デフォルトの粒子サイズを5に設定
}) => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const app = useRef<PIXI.Application>();
  const particles: PIXI.Sprite[] = [];

  useEffect(() => {
    // PixiJSアプリケーションの初期化
    app.current = new PIXI.Application({ width, height, backgroundAlpha: 0 });
    if (canvasRef.current) {
      canvasRef.current.appendChild(app.current.view);
    }

    // 画像読み込みと粒子生成
    const loadImageAndCreateParticles = async () => {
      const img = new Image();
      img.src = imageSrc;
      await img.decode();

      const imageCanvas = document.createElement("canvas") as any;
      imageCanvas.width = img.width;
      imageCanvas.height = img.height;
      const context = imageCanvas.getContext("2d");
      if (!context) return;
      context.drawImage(img, 0, 0);

      const imageData = context.getImageData(0, 0, img.width, img.height);
      for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
          const index = (y * img.width + x) * 4;
          const r = imageData.data[index];
          const g = imageData.data[index + 1];
          const b = imageData.data[index + 2];
          const alpha = imageData.data[index + 3];

          if (alpha > 0) {
            // PIXI.Spriteで粒子を生成
            const particle = new PIXI.Sprite(PIXI.Texture.WHITE);
            particle.position.set(x, y);
            particle.width = particleSize; // 粒子の幅
            particle.height = particleSize; // 粒子の高さ
            particle.alpha = alpha / 255;

            // 色の設定：RGB値を使って色を設定
            particle.tint = (r << 16) | (g << 8) | b;

            particles.push(particle);
            app.current?.stage.addChild(particle);
          }
        }
      }

      animateParticles();
    };

    loadImageAndCreateParticles();

    return () => {
      app.current?.destroy(true, { children: true });
    };
  }, [imageSrc, width, height, particleSize]);

  const animateParticles = () => {
    const stageWidth = width;
    const stageHeight = height;

    particles.forEach((particle) => {
      const randomX = (Math.random() - 0.5) * stageWidth;
      const randomY = (Math.random() - 0.5) * stageHeight;

      gsap.to(particle, {
        x: particle.x + randomX,
        y: particle.y + randomY,
        duration: 4,
        ease: "expo.inOut",
        repeat: -1,
        yoyo: true,
      });
    });
  };

  return <div ref={canvasRef}></div>;
};

export default ParticleImage;
