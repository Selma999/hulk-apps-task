import classNames from "classnames";
import React from "react";

function Title({ className, titleHeader, title, subTitle }) {
  return (
    <div className={classNames("title-wrapper", className || "")}>
      <p className={classNames("title-header", className || "")}>
        {titleHeader}
      </p>
      <h1 className={classNames("title__title-text", className || "")}>
        {title}
      </h1>
      <p className={classNames("title__subtitle", className || "")}>
        {subTitle}
      </p>
    </div>
  );
}

export default Title;
