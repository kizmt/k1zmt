"use client";

import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Stars from "@/components/3D/Stars";
import Loader from "@/components/2D/Loader/Loader";
import Overlay3 from "@/components/2D/Overlay/Overlay3";
import Footer from "@/components/2D/Footer/Footer";
import TopBar from "@/components/2D/TopBar/TopBar";

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
    <div className='main_container overflow-auto'>
      <Suspense fallback={<Loader />}>
      <TopBar />
        <Overlay3 />
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
        <Footer />
      </Suspense>
    </div>
  );
};

export default Page;
