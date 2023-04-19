import React from "react";

function NavBarItem({ navBarItem, navBarIcon, src, alt }) {
  return (
    <span className="navbar-items__item">
      <a href="#">
        {navBarItem}
        {navBarIcon && <img src={src} alt={alt} />}
      </a>
    </span>
  );
}

export default NavBarItem;
