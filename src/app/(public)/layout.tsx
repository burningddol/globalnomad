import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CloudSceneWrapper from "@/components/three/CloudSceneWrapper";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <CloudSceneWrapper />
      <div className="relative z-10">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
