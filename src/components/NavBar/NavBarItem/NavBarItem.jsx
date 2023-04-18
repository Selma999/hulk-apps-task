import React from "react";

function NavBarItem({ navBarItem, navBarIcon, src, alt }) {
  return (
    <div className="navbar-items__item">
      {navBarItem}
      {navBarIcon && <img src={src} alt={alt} />}
    </div>
  );
}

export default NavBarItem;
