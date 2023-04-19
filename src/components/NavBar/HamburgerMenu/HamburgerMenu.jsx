import React from "react";
import classNames from "classnames";

function HamburgerMenu({ className, onClick }) {
  return (
    <div className="navbar__hamburger-menu-wrapper">
      <div
        onClick={onClick}
        className={classNames("navbar__hamburger-menu", className || "")}
      ></div>
    </div>
  );
}

export default HamburgerMenu;
