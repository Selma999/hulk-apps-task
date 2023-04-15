import React from "react";
import BiomImage from "./BiomImage/BiomImage";

function BiomImageList({ imageTextList }) {
  return (
    <div className="ready-section__biom-group">
      {imageTextList.map(({ id, textOnImageHover, src }) => {
        return (
          <BiomImage key={id} textOnImageHover={textOnImageHover} src={src} />
        );
      })}
    </div>
  );
}

export default BiomImageList;
