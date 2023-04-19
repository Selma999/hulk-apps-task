import React from "react";

// component imports
import HeroSectionTitleText from "./HeroSectionTitleText/HeroSectionTitleText";
import Button from "../Button/Button";

function HeroSection() {
  return (
    <div className="hero-section-wrapper">
      <div className="hero-section">
        <div className="hero-section__text-group">
          <HeroSectionTitleText heroSectionTitleText="So fresh." />
          <HeroSectionTitleText heroSectionTitleText="So green." />
          <p className="hero-section__text-paragraph">
            We believe that a more eco-friendly everyday makes a happier you and
            me. We’re on a mission to put sustainability in reach with
            better-for-the-planet wipes that are easy, effective, and
            plastic-free.
          </p>
          <Button type="primary" buttonTitle="Get Started" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
