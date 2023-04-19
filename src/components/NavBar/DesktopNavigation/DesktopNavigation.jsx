import React from "react";

// component imports
import NavBarLogo from "../NavBarLogo/NavBarLogo";
import NavBarItemsGroup from "../NavBarItemsGroup/NavBarItemsGroup";

// data imports
import navBarItemsLeft from "../../../data/navBarItemsLeft";
import navBarItemsRight from "../../../data/navBarItemsRight";

// icon imports
import logoImage from "../../../assets/svg/biom-logo-homepage.svg";
import SvgCart from "../../../assets/svgr/Cart";

function DesktopNavigation() {
  return (
    <nav className="navbar-items">
      <NavBarItemsGroup navBarItems={navBarItemsLeft} />
      <NavBarLogo logoImage={logoImage} />
      <NavBarItemsGroup navBarItems={navBarItemsRight} />
    </nav>
  );
}

export default DesktopNavigation;
