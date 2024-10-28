// About.js
import React from "react";
import "./styles/style.css";
import VkWidgets from "./VkWidgets";
import ArtistBlock from "./ArtistBlock";

function About() {
  return (
    <div
      className="block"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>КТО МЫ?</h1>

      <ArtistBlock />

      <VkWidgets />
    </div>
  );
}

export { About };
