import React from "react";

// component imports
import Title from "../Title/Title";
import PImage from "../PImage/PImage";
import Button from "../Button/Button";
import IconTextList from "../IconTextList/IconTextList";

// data imports
import iconTextListSecond from "../../data/iconTextListSecond";

// image imports
import adobeImage from "../../assets/AdobeStock_377418446_Preview/AdobeStock_377418446_Preview.png";
import adobeImageHD from "../../assets/AdobeStock_377418446_Preview/AdobeStock_377418446_Preview@2x.png";
import refillPackImage from "../../assets/Refill Packaging_Mockup_2/Refill Packaging_Mockup_2.png";
import refillPackImageHD from "../../assets/Refill Packaging_Mockup_2/Refill Packaging_Mockup_2@2x.png";

function BetterForYouSection() {
  return (
    <div className="better-for-section">
      <div className="better-for-section__left-group">
        <PImage src={adobeImageHD} placeholder={adobeImage} alt="biom image" />
        <PImage
          src={refillPackImageHD}
          placeholder={refillPackImage}
          alt="refill packaging"
        />
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
