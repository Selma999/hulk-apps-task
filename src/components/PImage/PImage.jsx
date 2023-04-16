import React from "react";
import Title from "../Title/Title";

function PImage({ src, textOverImage }) {
  return (
    <div className="image-section__image">
      <img src={src} />
      {textOverImage && (
        <div className="image-section__image__text">
          <Title
            titleHeader="where you need it,"
            title="when you need it."
            className="image-text"
          />
        </div>
      )}
    </div>
  );
}

export default PImage;
