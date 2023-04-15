import classNames from "classnames";
import React, { useState } from "react";

function BiomImage({ textOnImageHover, src }) {
  const [showedTextOnImageHover, setShowedTextOnImageHover] = useState(false);

  const showTextOnImageHoverHandler = () => {
    setShowedTextOnImageHover(true);
  };

  const hideTextOnImageHoverHandler = () => {
    setShowedTextOnImageHover(false);
  };

  return (
    <div className="ready-section__biom">
      <div
        className={classNames(
          "ready-section__biom__text-section",
          showedTextOnImageHover ? "hover" : ""
        )}
      >
        <h4 className="ready-section__biom__text-section__title">
          Biom Dispenser
        </h4>
        <p className="ready-section__biom__text-section__text">
          {textOnImageHover}
        </p>
      </div>

      <img
        className="ready-section__biom__image"
        src={src}
        onMouseOver={showTextOnImageHoverHandler}
        onMouseLeave={hideTextOnImageHoverHandler}
      />
    </div>
  );
}

export default BiomImage;
