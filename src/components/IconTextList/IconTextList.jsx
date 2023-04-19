import React from "react";
import IconText from "./IconText";

function IconTextList({ iconTextList }) {
  return (
    <div className="icon-text">
      {iconTextList.map(({ id, src, placeholder, text, width, height }) => {
        return (
          <IconText
            key={id}
            src={src}
            placeholder={placeholder}
            text={text}
            width={width}
            height={height}
          />
        );
      })}
    </div>
  );
}

export default IconTextList;
