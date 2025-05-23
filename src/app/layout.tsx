import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import StoreWrapper from "./storeWrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "宇宙打",
  description: "宇宙空間でできるタイピングゲーム",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-4549864067149386"
        ></meta>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4549864067149386"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        <StoreWrapper>{children}</StoreWrapper>
        <Script
          src="https://aframe.io/releases/1.5.0/aframe.min.js"
          strategy="beforeInteractive"
        />
        <Script src="https://aframe.io/releases/1.2.0/aframe.min.js" async />
        <Script
          src="https://unpkg.com/aframe-particle-system-component/dist/aframe-particle-system-component.min.js"
          async
        />
      </body>
      {/*bodyの下にaframe Script書いたらエラーブラウザのコンソールでエラーが見受けられる*/}
    </html>
  );
}
