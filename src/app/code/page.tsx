"use client";

import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import styles from "../page.module.css";
import Stars from "@/components/3D/Stars";
import Loader from "@/components/2D/Loader/Loader";
// import MusicPlayer from "@/components/Audio/AudioPlayer";
import TopBar from "@/components/TopBar/TopBar";
import Footer from "@/components/Footer/Footer";
import Overlay2 from "@/components/2D/Overlay/Overlay2";

const Code: React.FC = () => {
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
    <div className={styles.main_container}>
      <Suspense fallback={<Loader />}>
        <TopBar />
        <Overlay2 />
        <Canvas
          camera={{ position: [0, 0, 1] }}
          style={{ width: "100%", height: "100%" }} // Ensure the canvas takes the full height and width
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
      </Suspense>
    </div>
  );
};

export default Code;
