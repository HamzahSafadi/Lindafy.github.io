import React from "react";
import MobileMockup from "../../assets/MobileMockup";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="Container">
      <div className="HeroContent">
        <h1>Organise Projects.</h1>
        <h1>Get More Done.</h1>
        <button>Get Started</button>
      </div>
      <div className="HeroImage">
        <MobileMockup />
      </div>
    </div>
  );
}

export default HeroSection;
