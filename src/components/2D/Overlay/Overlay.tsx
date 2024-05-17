import React, { useEffect, useState } from "react";
import style from "./Overlay.module.css";
import "../../../../public/styles/ff7-ui-fonts.css"; // Import the external CSS file
import TextAnimator from "@/components/2D/Text/TextAnimator";
import Link from "next/link";
import { FaGithub, FaVolumeMute, FaMusic } from "react-icons/fa";
import useAudioPlayerStore from "@/stores/useAudioPlayerStore";

function Overlay() {
  const [showButtons, setShowButtons] = useState(false);
  const isPlaying = useAudioPlayerStore((state) => state.isPlaying);
  const isStopped = useAudioPlayerStore((state) => state.isStopped);
  const setIsPlaying = useAudioPlayerStore((state) => state.setIsPlaying);
  const setIsStopped = useAudioPlayerStore((state) => state.setIsStopped);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButtons(true);
    }, 3000);

    return () => clearTimeout(timeout);
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
        <h1 className="ff7-text">
          <TextAnimator text="hi, I'm Scott" />
        </h1>
        <div className="ff7-text">
          <TextAnimator
            text={`This page is dedicated to my work as a fullstack web developer within the blockchain space, 
            showcasing user apps, open source contributions and other milestone achievements.\n\n
            Click the 'view profile' button to begin navigating the site, or scroll down for direct contact details.`}
          />
        </div>
        {showButtons && (
          <div className={style.overlay_button_container}>
            <div className={style.overlay_button_container_inner}>
              <div className={style.overlay_button_row}>
                <Link href="https://github.com/kizmt" target="_blank">
                  <button className={style.button}>View Profile</button>
                </Link>
                <div className={style.overlay_button_icon_row}>
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
