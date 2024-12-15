import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/all";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

type ParticleImageProps = {
  imageSrc: string; // 表示する画像のパス
};

const ParticleImage: React.FC<ParticleImageProps> = ({ imageSrc }) => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const app = useRef<PIXI.Application | null>(null);
  const particles = useRef<PIXI.Graphics[]>([]);

  useEffect(() => {
    if (app.current) return;

    const loadImageAndCreateParticles = async () => {
      const image = new Image();
      image.src = imageSrc;

      image.onerror = () => {
        console.error("画像の読み込みに失敗しました:", imageSrc);
      };

      await image.decode();

      // PIXI Application 作成
      app.current = new PIXI.Application({
        backgroundAlpha: 0,
        width: canvasRef.current?.clientWidth || 800,
        height: canvasRef.current?.clientHeight || 600,
        antialias: true,
      });

      if (canvasRef.current) {
        canvasRef.current.innerHTML = "";
        canvasRef.current.appendChild(app.current.view);
      }

      const imageW = image.width;
      const imageH = image.height;
      const canvasW = app.current.screen.width;
      const canvasH = app.current.screen.height;

      // スケールとオフセットを計算
      const scale = Math.min(canvasW / imageW, canvasH / imageH);
      const offsetX = (canvasW - imageW * scale) / 2;
      const offsetY = (canvasH - imageH * scale) / 2;

      // オフスクリーンキャンバスでピクセルデータを取得
      const offscreenCanvas: any = document.createElement("canvas");
      offscreenCanvas.width = imageW;
      offscreenCanvas.height = imageH;
      const context = offscreenCanvas.getContext("2d");
      context?.drawImage(image, 0, 0);
      const imageData = context?.getImageData(0, 0, imageW, imageH).data;

      const particleContainer = new PIXI.Container();
      app.current.stage.addChild(particleContainer);

      const step = 3; // パーティクル間隔

      for (let y = 0; y < imageH; y += step) {
        for (let x = 0; x < imageW; x += step) {
          const index = (y * imageW + x) * 4;
          const r = imageData[index];
          const g = imageData[index + 1];
          const b = imageData[index + 2];
          const alpha = imageData[index + 3];

          if (alpha === 0) continue;

          // PIXI.Graphics を作成し、色情報を設定
          const particle = new PIXI.Graphics();
          particle.beginFill(
            PIXI.utils.rgb2hex([r / 255, g / 255, b / 255]),
            alpha / 255
          );
          particle.drawRect(0, 0, step * scale, step * scale);
          particle.endFill();

          particle.x = x * scale + offsetX;
          particle.y = y * scale + offsetY;

          particles.current.push(particle);
          particleContainer.addChild(particle);
        }
      }

      animateParticles();
    };

    const animateParticles = () => {
      particles.current.forEach((particle) => {
        const originalX = particle.x;
        const originalY = particle.y;

        gsap.to(particle, {
          x: originalX + (Math.random() - 0.5) * 10000, // 軽微な動き
          y: originalY + (Math.random() - 0.5) * 10000,
          duration: 2,
          //repeat: -1,
          delay: 2,
          yoyo: true,
          ease: "power1.inOut",
        });
      });
    };

    loadImageAndCreateParticles();

    return () => {
      if (app.current) {
        app.current.destroy(true, { children: true });
        app.current = null;
      }
    };
  }, [imageSrc]);

  return (
    <div
      ref={canvasRef}
      style={{ width: "100%", height: "300px", marginBottom: "-3000px" }}
      className="text-center"
    />
  );
};

export default ParticleImage;
