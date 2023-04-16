import React from "react";

// component imports
import Title from "../Title/Title";
import Button from "../Button/Button";
import BiomImageList from "./BiomImageList/BiomImageList";

// icon import
import arrowLeft from "../../assets/svg/arrow.svg";

// data imports
import readyToStartList from "../../data/readyToStartList";

function ReadyToStartSection() {
  return (
    <div className="ready-section">
      <div className="ready-section__left-group">
        <Title title="Ready to start wiping out waste?" />
        <Button
          className="ghost"
          buttonTitle="choose your vessel color"
          icon
          iconSrc={arrowLeft}
        />
      </div>
      <BiomImageList imageTextList={readyToStartList} />
    </div>
  );
}

export default ReadyToStartSection;
