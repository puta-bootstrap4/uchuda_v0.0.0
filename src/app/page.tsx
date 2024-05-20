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
      <div className="loading-spinner">
        Loading...
      </div>
    );
  }

  const ClientOnlyComponent = dynamic(() => import('./top'), { ssr: false });
  return (
    <>

    <ClientOnlyComponent />
</>
  );
}
