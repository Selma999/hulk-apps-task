import React from "react";
import ProgressiveImage from "../../ProgressiveImage";

function IconText({ src, placeholder, text, width, height }) {
  return (
    <div className="icon-text__group">
      <div className="icon-text__icon">
        <ProgressiveImage
          src={src}
          placeholder={placeholder}
          width={width}
          height={height}
          alt={text}
        />
      </div>
      <p className="icon-text__text">{text}</p>
    </div>
  );
}

export default IconText;
