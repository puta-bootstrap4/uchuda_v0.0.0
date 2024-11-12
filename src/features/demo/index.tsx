import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/all";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI); // Link PixiPlugin with PIXI
type ParticleImageProps = {
  imageSrc: string;
  width: number;
  height: number;
  particleSize?: number; // Optional property for adjusting particle size
};

const ParticleImage: React.FC<ParticleImageProps> = ({
  imageSrc,
  width,
  height,
  particleSize = 10,
}) => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const app = useRef<PIXI.Application>();
  const particles: PIXI.Sprite[] = [];

  useEffect(() => {
    app.current = new PIXI.Application({ width, height, backgroundAlpha: 0 });
    if (canvasRef.current) {
      canvasRef.current.appendChild(app.current.view);
    }

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
            const particle = new PIXI.Sprite(PIXI.Texture.WHITE);
            particle.position.set(x, y);
            particle.width = particleSize;
            particle.height = particleSize;
            particle.alpha = alpha / 255;
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
        pixi: { x: particle.x + randomX, y: particle.y + randomY }, // Use `pixi` property for PixiPlugin
        duration: 5,
        ease: "expo.out", // Use a smooth ease-out effect for the outward motion
        delay: 2, // Add a 2-second delay before the animation starts
      });
    });
  };

  return <div ref={canvasRef}></div>;
};

export default ParticleImage;
