'use client';
import dynamic from 'next/dynamic';
import React, { useState, useEffect,Suspense } from 'react';


// アイテムの型を定義
interface Item {
  id: number;
  name: string;
  description: string;
}
export default function Gamefunction() {


  const ClientOnlyComponent = dynamic(() => import('./otonasi'), { ssr: false });
  return (
    <>
    <ClientOnlyComponent />

</>
  );
}
