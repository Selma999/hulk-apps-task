import React from "react";
import PImage from "../PImage/PImage";

function ImageSection({ imageList }) {
  return (
    <div className="image-section">
      {imageList.map(
        ({ id, src, placeholder, alt, width, height, textOverImage }) => {
          return (
            <PImage
              key={id}
              src={src}
              placeholder={placeholder}
              alt={alt}
              textOverImage={textOverImage}
              width={width}
              height={height}
            />
          );
        }
      )}
    </div>
  );
}

export default ImageSection;
