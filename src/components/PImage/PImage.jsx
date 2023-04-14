import React from "react";

function PImage({ src }) {
  return (
    <div className="image-section__image">
      <img src={src} />
    </div>
  );
}

export default PImage;
