"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect, Suspense } from "react";

// アイテムの型を定義
interface Item {
  id: number;
  name: string;
  description: string;
}
export default function Gamefunction() {
  const ClientOnlyComponent = dynamic(() => import("../../features/game1"), {
    ssr: false,
  });
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ClientOnlyComponent />
      </Suspense>
    </>
  );
}
