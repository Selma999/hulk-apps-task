import React from "react";
import PImage from "../PImage/PImage";

function ImageSection({ imageList }) {
  return (
    <div className="image-section">
      {imageList.map(({ id, src }) => {
        return <PImage key={id} src={src} />;
      })}
    </div>
  );
}

export default ImageSection;
