import React from "react";

function NavBarItem({ navBarItem, navBarIcon }) {
  return (
    <span className="navbar-items__item">
      <a className="navbar-items__item__link" href="#">
        <div className="navbar-items__item__link__text">{navBarItem}</div>
        <div className="navbar-items__item__link__icon">{navBarIcon}</div>
      </a>
    </span>
  );
}

export default NavBarItem;
