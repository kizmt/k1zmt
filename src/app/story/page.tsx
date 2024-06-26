"use client";

import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Stars from "@/components/3D/Stars";
import Overlay2 from "@/components/2D/Overlay/Overlay2";
import Footer from "@/components/2D/Footer/Footer";
import TopBar from "@/components/2D/TopBar/TopBar";
import Link from "next/link";
import style from "../../components/2D/Overlay/Overlay.module.css";

const Page: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const [showButtons, setShowButtons] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButtons(true);
    });

    return () => clearTimeout(timeout);
  }, []);

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
    <div className='main_container overflow-auto h-screen'>
        <TopBar />
        <div className="relative h-full overflow-auto">
          <Overlay2 />
          <Canvas
            camera={{ position: [0, 0, 1] }}
            style={{ width: "100%", height: "100%" }}
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
        </div>
        {showButtons && (
        <div className={style.overlay_button_container}>
          <div className={style.overlay_button_row}>
            <Link href="/work">
            <button className={style.button}>Next page</button>
            </Link>
          </div>
        </div>
        )}
        <Footer />
    </div>
  );
};

export default Page;
