import React from "react";
import PImage from "../PImage/PImage";

function ImageSection({ imageList }) {
  return (
    <div className="image-section">
      {imageList.map(({ id, src, textOverImage }) => {
        return <PImage key={id} src={src} textOverImage={textOverImage} />;
      })}
    </div>
  );
}

export default ImageSection;
