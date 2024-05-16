"use client";

import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import styles from "./page.module.css";
import Stars from "@/components/3D/Stars";
import Modal from "@/components/3D/Modal";
import Overlay from "@/components/2D/Overlay/Overlay";
import Loader from "@/components/2D/Loader/Loader";
import TopBar from "@/components/TopBar/TopBar";

const Home: React.FC = () => {
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
    <div className={isMobile ? styles.main_container_mobile : styles.main_container}>
      <Suspense fallback={<Loader />}>
        <TopBar />
        <Overlay />
        <Canvas
          camera={{ position: [0, 0, 1] }}
          style={{ width: "100%", height: "100%" }} // Ensure the canvas takes the full height and width
        >
          <Stars />
          <Modal
            position={isMobile ? [0.04, -0.09, 0] : [0.8, 0, 0]}
            rotation={isMobile ? [0, Math.PI * -0.08, 0] : [0, Math.PI * -0.2, 0]}
            scale={isMobile ? [0.0075, 0.0075, 0.0075] : [0.0095, 0.0095, 0.0095]}
          />
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

export default Home;
