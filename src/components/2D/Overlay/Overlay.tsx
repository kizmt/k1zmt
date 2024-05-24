"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "./Overlay.module.css";
import "../../../../public/styles/ff7-ui-fonts.css";
import TextAnimator from "@/components/2D/Text/TextAnimator";
import { FaGithub, FaVolumeMute, FaMusic } from "react-icons/fa";
import useAudioPlayerStore from "@/stores/useAudioPlayerStore";

function Overlay() {
  const [showButtons, setShowButtons] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const isPlaying = useAudioPlayerStore((state) => state.isPlaying);
  const isStopped = useAudioPlayerStore((state) => state.isStopped);
  const setIsPlaying = useAudioPlayerStore((state) => state.setIsPlaying);
  const setIsStopped = useAudioPlayerStore((state) => state.setIsStopped);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButtons(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMusicToggle = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setIsStopped(true);
    } else {
      setIsPlaying(true);
      setIsStopped(false);
    }
  };

  return (
    <div className={style.overlay_container}>
      <div className={style.overlay_innerContainer}>
        <h1>
          <TextAnimator text="hi, I'm Scott" />
        </h1>
        <div className="ff7-text">
          <TextAnimator
            text="This page is dedicated to my work as a builder and fullstack web developer within the blockchain space, 
            showcasing user apps, open source contributions and other milestone achievements.
            Click the view profile button to begin navigating the site, or scroll down for direct contact details."
          />
        </div>
        {showButtons && (
          <div className={style.overlay_button_container}>
            <div className={style.overlay_button_container_inner}>
              <div className={`${style.overlay_button_row} ${isMobile ? style.mobile_button_row : ''}`}>
                <Link href="/story">
                  <button className={style.button}>View Profile</button>
                </Link>
                <div className={`${style.overlay_button_icon_row} ${isMobile ? style.mobile_icon_row : ''}`}>
                  <button
                    className={`${style.icon_button} ${style.music_button}`}
                    onClick={handleMusicToggle}
                  >
                    {isPlaying ? <FaMusic /> : <FaVolumeMute />}
                  </button>
                  <Link href="https://github.com/kizmt" target="_blank">
                    <button className={style.icon_button}>
                      <FaGithub />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Overlay;
