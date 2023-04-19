import classNames from "classnames";
import React, { useState } from "react";

import ProgressiveImage from "../../../ProgressiveImage";

function BiomImage({ textOnImageHover, src, placeholder, width, height }) {
  const [isHovered, setIsHovered] = useState(false);

  const showTextOnHover = () => {
    setIsHovered(true);
  };

  const hideTextOnHover = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="ready-section__biom"
      onMouseOver={showTextOnHover}
      onMouseLeave={hideTextOnHover}
    >
      <div
        className={classNames("ready-section__biom__text-section", {
          hover: isHovered,
        })}
      >
        <h4 className="ready-section__biom__text-section__title">
          Biom Dispenser
        </h4>
        <p className="ready-section__biom__text-section__text">
          {textOnImageHover}
        </p>
      </div>

      <ProgressiveImage
        className={classNames("ready-section__biom__image", {
          hover: isHovered,
        })}
        src={src}
        placeholder={placeholder}
        width={width}
        height={height}
      />
    </div>
  );
}

export default BiomImage;
