import React, { useState } from "react";
import classNames from "classnames";

// component imports
import NavBarLogo from "./NavBarLogo/NavBarLogo";
import NavBarItemsGroup from "./NavBarItemsGroup/NavBarItemsGroup";

// data imports
import navBarItemsLeft from "../../data/navBarItemsLeft";
import navBarItemsRight from "../../data/navBarItemsRight";

// image imports
import logoImage from "../../assets/svg/biom-logo-homepage.svg";
import cart from "../../assets/svg/cart.svg";

function NavBar({ className }) {
  return (
    <header className={classNames("navbar", className || "")}>
      <nav className="navbar-items">
        <NavBarItemsGroup navBarItems={navBarItemsLeft} />
        <NavBarLogo logoImage={logoImage} />
        <NavBarItemsGroup
          navBarItems={navBarItemsRight}
          navBarIcon
          src={cart}
          alt="cart"
        />
      </nav>
    </header>
  );
}

export default NavBar;
