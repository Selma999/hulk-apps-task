import React from "react";
import classNames from "classnames";

function Button({ className, buttonTitle, icon, iconSrc }) {
  return (
    <div className="btn-wrapper">
      <button type="button" className={classNames("btn", className || "")}>
        {buttonTitle}
        {icon && (
          <span className="btn__icon">
            <img src={iconSrc} />
          </span>
        )}
      </button>
    </div>
  );
}

export default Button;
