import React from "react";
import "./Main.css";

function LandingComponent() {
  return (
    <div className="main-page-container">
      <div className="main_page">
        <h1 className="main_tagline">
          <span>Listening is </span>
          <span>everything</span>
        </h1>

        <h4 className="description">
          Millions of songs and podcasts. No credit card needed.
        </h4>
        <a href="/">GET SPOTIFY FREE</a>
      </div>
    </div>
  );
}
export default LandingComponent;
