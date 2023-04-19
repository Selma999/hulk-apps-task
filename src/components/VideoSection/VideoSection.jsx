import React from "react";

// component imports
import Title from "../Title/Title";
import CustomVideo from "./CustomVideo/CustomVideo";
import Button from "../Button/Button";

function VideoSection() {
  return (
    <div className="video-section">
      <CustomVideo />
      <div className="video-section__content">
        <Title
          className="secondary"
          titleHeader="CLEANING OUR OCEANS WITH EVERY WIPE"
          title="Wipes have plastic in them. We don’t."
          subTitle="We reinvented wipes to cut out all the bad stuff —like single-use plastic that hurts the environment, and toxic chemicals that don’t belong in our oceans (or in our homes)."
        />
        <Button buttonTitle="Learn more" type="primary" />
      </div>
    </div>
  );
}

export default VideoSection;
