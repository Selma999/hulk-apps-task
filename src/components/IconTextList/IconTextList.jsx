import React from "react";
import IconText from "./IconText";

function IconTextList({ iconTextList }) {
  return (
    <div className="icon-text">
      {iconTextList.map(({ id, icon, text }) => {
        return <IconText key={id} icon={icon} text={text} />;
      })}
    </div>
  );
}

export default IconTextList;
