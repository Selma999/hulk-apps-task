import React from "react";
import classNames from "classnames";

function Button({ className, buttonTitle }) {
  return (
    <div className='btn-wrapper'>
      <button type="button" className={classNames("btn", className || "")}>
        {buttonTitle}
      </button>
    </div>
  );
}

export default Button;
