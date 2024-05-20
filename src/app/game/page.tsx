'use client';
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';

// アイテムの型を定義
interface Item {
  id: number;
  name: string;
  description: string;
}
export default function Gamefunction() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // データの取得や初期化処理をここで行う
    const fetchData = async () => {
      try {
        // 例えば、フェイクのAPI呼び出し
        await new Promise(resolve => setTimeout(resolve, 2000));
        // データ取得完了
      } catch (error) {
        console.error("Error loading data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  if (isLoading) {
    return (
      <div className="loading-container">
      <div className="spinner"></div>
      <style jsx>{`
        .loading-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: white; /* 任意の背景色に変更 */
        }
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border-left-color: #09f;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
    );
  }

  const ClientOnlyComponent = dynamic(() => import('../typesin'), { ssr: false });
  return (
    <>

    <ClientOnlyComponent />
</>
  );
}
