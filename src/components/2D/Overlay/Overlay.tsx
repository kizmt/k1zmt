import React, { useEffect, useState } from "react";
import style from "./Overlay.module.css";
import "../../../../public/styles/ff7-ui-fonts.css"; // Import the external CSS file
import TextAnimator from "@/components/2D/Text/TextAnimator";
import Link from "next/link";

function Overlay() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButtons(true);
    },3000);

    return () => clearTimeout(timeout);
  }, []);
  
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
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Overlay;
