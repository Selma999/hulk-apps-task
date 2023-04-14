import React from "react";

import iconTextList from "../../data/iconTextList";
import IconTextList from "../IconTextList/IconTextList";
import Button from "../Button/Button";
import Title from "../Title/Title";

function MeetBiomSection() {
  return (
    <div className="meet-biom-section-wrapper">
      <div className="meet-biom-section__left-group">
        <h1 className="meet-biom-section__text">meet biom</h1>
      </div>
      <div className="meet-biom-section__right-group">
        <Title
          titleHeader="THE BIOM DISPENSER"
          title="Redefine your experience of clean."
          subTitle="A quality engineered wipes dispenser that looks beautiful in your home, making better habits for your home and planet always within reach."
        />
        <IconTextList iconTextList={iconTextList} />
        <Button className="secondary" buttonTitle="shop now" />
      </div>
    </div>
  );
}

export default MeetBiomSection;
