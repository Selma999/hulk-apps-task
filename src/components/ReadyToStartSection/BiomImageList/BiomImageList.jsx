import React from "react";
import BiomImage from "./BiomImage/BiomImage";

function BiomImageList({ imageTextList }) {
  return (
    <div className="ready-section__biom-group">
      {imageTextList.map(
        ({ id, textOnImageHover, src, placeholder, width, height }) => {
          return (
            <BiomImage
              key={id}
              textOnImageHover={textOnImageHover}
              src={src}
              placeholder={placeholder}
              width={width}
              height={height}
            />
          );
        }
      )}
    </div>
  );
}

export default BiomImageList;
