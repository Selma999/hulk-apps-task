import React from "react";

function NavBarIcon({ src, alt }) {
  return (
    <div className="navbar-items__item__icon">
      <img src={src} alt={alt} />
    </div>
  );
}

export default NavBarIcon;
