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
  );
}
