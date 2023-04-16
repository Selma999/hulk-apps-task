import React from "react";

// component imports
import Title from "../Title/Title";
import PImage from "../PImage/PImage";
import IconTextList from "../IconTextList/IconTextList";

// data imports
import iconTextListSecond from "../../data/iconTextListSecond";
import Button from "../Button/Button";

// image imports
import adobeImage from "../../assets/AdobeStock_377418446_Preview/AdobeStock_377418446_Preview.png";
import refillPackImage from "../../assets/Refill Packaging_Mockup_2/Refill Packaging_Mockup_2.png";

function BetterForYouSection() {
  return (
    <div className="better-for-section">
      <div className="better-for-section__left-group">
        <PImage src={adobeImage} />
        <PImage src={refillPackImage} />
      </div>
      <div className="better-for-section__right-group">
        <Title
          titleHeader="BIOM WIPES"
          title="Better for you, and the planet."
          subTitle="The experience of clean should feel amazing. In a time when we’re constantly sanitizing, it can be damaging to our hands and skins. We decided to load our wipes with Aloe to take care of you, while you take care of your home."
        />
        <IconTextList iconTextList={iconTextListSecond} />
        <Button buttonTitle="Subscribe now" className="secondary" />
      </div>
    </div>
  );
}

export default BetterForYouSection;
