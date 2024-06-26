"use client";

import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Stars from "@/components/3D/Stars";
import Modal from "@/components/3D/Modal";
import Overlay from "@/components/2D/Overlay/Overlay";
import Footer from "@/components/2D/Footer/Footer";
import TopBar from "@/components/2D/TopBar/TopBar";
import Loader from "@/components/2D/Loader/Loader";

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
    <div className="main_container overflow-auto h-screen">
        <TopBar />
        <div className="relative h-full overflow-auto">
          <Overlay />
          <Canvas
            camera={{ position: [0, 0, 1] }}
            style={{ width: "100%", height: "100%" }}
          >
            <Stars />
            <Modal
              position={isMobile ? [0.04, -0.3, 0] : [0.8, 0, 0]} // Adjusted Y position for mobile
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
          <Footer />
        </div>
    </div>
    </Suspense>
  );
};

export default Home;
