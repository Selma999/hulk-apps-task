import React from "react";
import classNames from "classnames";

// component imports
import Title from "../Title/Title";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";

function PImage({
  src,
  placeholder,
  alt,
  width,
  height,
  textOverImage,
  className,
}) {
  return (
    <div className={classNames("image-section__image", className || "")}>
      <div className="image-section__img-wrapper">
        <ProgressiveImage
          src={src}
          placeholder={placeholder}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
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
