<<<<<<< HEAD
'use client';
import dynamic from 'next/dynamic';
import React, { useState, useEffect,Suspense } from 'react';
=======
"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect, Suspense } from "react";
>>>>>>> d3c689e (ディレクトリ構成の変更)

// アイテムの型を定義
interface Item {
  id: number;
  name: string;
  description: string;
}
<<<<<<< HEAD

export default function Gamefunction() {


  const ClientOnlyComponent = dynamic(() => import('../typesin'), { ssr: false });
  return (
    <>

    <ClientOnlyComponent />
=======
export default function Gamefunction() {
  const ClientOnlyComponent = dynamic(() => import("../../features/game1"), {
    ssr: false,
  });
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ClientOnlyComponent />
      </Suspense>
>>>>>>> d3c689e (ディレクトリ構成の変更)
    </>
  );
}
