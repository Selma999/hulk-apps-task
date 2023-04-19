import React from "react";
import classNames from "classnames";

const HoverAnimationTypes = {
  MOVE_ICON: "move-icon",
  FILL_BACKGROUND: "fill-background",
};

function Button({
  className,
  type,
  outline,
  hoverAnimation,
  buttonTitle,
  icon,
}) {
  return (
    <div className={classNames("btn-wrapper")}>
      <button
        type="button"
        className={classNames("btn", className, type, hoverAnimation, {
          "has-icon": icon,
          outline,
        })}
      >
        <span className="btn__text">{buttonTitle}</span>
        {icon && <span className="btn__icon">{icon}</span>}
      </button>
    </div>
  );
}

Button.defaultProps = {
  className: "",
  type: "primary",
  hoverAnimation: HoverAnimationTypes.MOVE_ICON,
};

Button.HoverAnimationTypes = HoverAnimationTypes;

export default Button;
