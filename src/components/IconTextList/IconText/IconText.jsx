import React from "react";

function IconText({ icon, text }) {
  return (
    <div className="icon-text__group">
      <div className="icon-text__icon"><img src={icon}/></div>
      <p className="icon-text__text">{text}</p>
    </div>
  );
}

export default IconText;
