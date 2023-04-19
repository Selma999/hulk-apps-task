import classNames from "classnames";
import React from "react";

function Title({ className, titleHeader, title, subTitle }) {
  return (
    <div className={classNames("title", className)}>
      {titleHeader && (
        <p className={classNames("title__header", className)}>{titleHeader}</p>
      )}
      <h1 className={classNames("title__title-text", className)}>{title}</h1>
      {subTitle && (
        <p className={classNames("title__subtitle", className)}>{subTitle}</p>
      )}
    </div>
  );
}

Title.defaultProps = {
  className: "",
};

export default Title;
