
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
      <meta name="google-adsense-account" content="ca-pub-4549864067149386"></meta>
      <body className={inter.className}>{children}

      <Script src="https://aframe.io/releases/1.5.0/aframe.min.js" strategy="beforeInteractive" />
      <Script src="https://aframe.io/releases/1.2.0/aframe.min.js" async />
      <Script src="https://unpkg.com/aframe-particle-system-component/dist/aframe-particle-system-component.min.js"  async/>

      </body>
      {/*bodyの下にaframe Script書いたらエラーブラウザのコンソールでエラーが見受けられる*/}
    </html>
  );
}
