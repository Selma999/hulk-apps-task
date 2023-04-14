import React from "react";

function Title({ titleHeader, title, subTitle }) {
  return (
    <div className="title-wrapper">
      <p className="title__header">{titleHeader}</p>
      <h1 className="title__title-text">{title}</h1>
      <p className="title__subtitle">{subTitle}</p>
    </div>
  );
}

export default Title;
