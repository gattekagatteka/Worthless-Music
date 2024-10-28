import React from "react";
import "./styles/style.css";
import bg from "../assets/wm-background.mp4";

function Home() {
  const hrefClick = () => {
    window.location.href = "https://vk.me/w0rthl3ssmusic";
  };
  return (
    <div className="block">
      <video src={bg} autoPlay loop muted />

      <div
        className="info"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h1>СТАНЬ НАШЕЙ ЧАСТЬЮ</h1>
      </div>
      <div
        className="btn-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button onClick={hrefClick} className="hrefBtn">
          НАПИСАТЬ НАМ
        </button>
      </div>
    </div>
  );
}

export { Home };
