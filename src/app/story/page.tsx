"use client";

import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Stars from "@/components/3D/Stars";
import Loader from "@/components/2D/Loader/Loader";
import Overlay2 from "@/components/2D/Overlay/Overlay2";
import Footer from "@/components/2D/Footer/Footer";
import TopBar from "@/components/2D/TopBar/TopBar";
import Link from "next/link";
import style from "../../components/2D/Overlay/Overlay.module.css";

const Page: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const x = window.matchMedia("(max-width: 700px)");
      setIsMobile(x.matches);
    };

    // Call once to set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main_container overflow-auto">
      <Suspense fallback={<Loader />}>
      <TopBar />  
      <Overlay2 />
        <Canvas
          className="canvas"
          camera={{ position: [0, 0, 1] }}
        >
          <Stars />
          <pointLight position={[100, 100, 100]} intensity={0.8} />
          <hemisphereLight
            color="#234fad"
            groundColor="#fff"
            position={[-7, 25, 13]}
            intensity={0.85}
          />
        </Canvas>
        <div className={style.overlay_button_container}>
          <div className={style.overlay_button_row}>
            <Link href="/work">
            <button className={style.button}>Next page</button>
            </Link>
          </div>
        </div>
          <Footer />
      </Suspense>
    </div>
  );
};

export default Page;
