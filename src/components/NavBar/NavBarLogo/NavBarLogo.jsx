import React from "react";

function NavBarLogo({ logoImage }) {
  return (
    <div className="navbar-items__logo">
      <img src={logoImage} />
    </div>
  );
}

export default NavBarLogo;
