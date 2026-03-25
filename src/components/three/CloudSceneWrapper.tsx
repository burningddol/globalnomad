"use client";

import dynamic from "next/dynamic";

const CloudScene = dynamic(() => import("./CloudScene"), { ssr: false });

export default function CloudSceneWrapper() {
  return (
    <div className="w-full h-full fixed z-0 bg-gradient-to-b from-sky-300 to-white">
      <CloudScene />
    </div>
  );
}
