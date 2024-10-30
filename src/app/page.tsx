<<<<<<< HEAD
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


  const ClientOnlyComponent = dynamic(() => import('./top'), { ssr: false });
  return (
    <>
        <Suspense fallback={<h1>Loading...</h1>}>

    <ClientOnlyComponent />
</Suspense>
</>
=======
"use client";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

export default function Gamefunction() {
  const ClientOnlyComponent = dynamic(() => import("../features/top"), {
    ssr: false,
  });
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ClientOnlyComponent />
      </Suspense>
    </>
>>>>>>> d3c689e (ディレクトリ構成の変更)
  );
}
