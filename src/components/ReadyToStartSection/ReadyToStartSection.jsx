import React from "react";

// component imports
import Title from "../Title/Title";
import Button from "../Button/Button";
import BiomImageList from "./BiomImageList/BiomImageList";

// icon import
import { Arrow } from "../../assets/svgr";

// data imports
import readyToStartList from "../../data/readyToStartList";

function ReadyToStartSection() {
  return (
    <div className="ready-section">
      <div className="ready-section__left-group">
        <Title title="Ready to start wiping out waste?" />
        <Button
          type="primary"
          buttonTitle="choose your vessel color"
          hoverAnimation={Button.HoverAnimationTypes.MOVE_ICON}
          outline
          icon={<Arrow width="18" height="18" viewBox="0 -3 18 18" />}
        />
      </div>
      <BiomImageList imageTextList={readyToStartList} />
    </div>
  );
}

export default ReadyToStartSection;
