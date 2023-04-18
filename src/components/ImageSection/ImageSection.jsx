import React from "react";
import PImage from "../PImage/PImage";

function ImageSection({ imageList }) {
  return (
    <div className="image-section">
      {imageList.map(({ id, src, placeholder, alt, textOverImage }) => {
        return (
          <PImage
            key={id}
            src={src}
            placeholder={placeholder}
            alt={alt}
            textOverImage={textOverImage}
          />
        );
      })}
    </div>
  );
}

export default ImageSection;
