import React from "react";
import HeroSectionTitleText from "./HeroSectionTitleText/HeroSectionTitleText";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-section__text-group">
        <HeroSectionTitleText heroSectionTitleText="So Fresh." />
        <HeroSectionTitleText heroSectionTitleText="So Green." />
        <p className="hero-section__text-paragraph">
          We believe that a more eco-friendly everyday makes a happier you and
          me. We’re on a mission to put sustainability in reach with
          better-for-the-planet wipes that are easy, effective, and
          plastic-free.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
