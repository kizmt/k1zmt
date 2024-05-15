import React from "react";
import style from "./Overlay.module.css";
import "../../../styles/ff7-ui-fonts.css"; // Import the external CSS file
// import "../../../styles/ff7-ui.css"; // Import the external CSS file

function Overlay() {
  return (
    <div className={style.overlay_container}>
      <div className={style.overlay_innerContainer}>
        <h1 className="ff7-text">hi, I&apos;m scott</h1>
        <p className="ff7-text">
          This page is dedicated to my work as a fullstack web developer within the blockchain
          space, showcasing user apps, open source contributions and other milestone achievements.
        </p>
      </div>
    </div>
  );
}

export default Overlay;
