import React from "react";

function NavBarLogo({ logoImage }) {
  return (
    <div className="navbar-items__logo">
      <a href="#">
        <img src={logoImage} alt="" />
      </a>
    </div>
  );
}

export default NavBarLogo;
