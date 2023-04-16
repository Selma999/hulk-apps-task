import React from "react";

// compontent imports
import NavBarLogo from "../NavBar/NavBarLogo/NavBarLogo";
import NavBarItemsGroup from "../NavBar/NavBarItemsGroup/NavBarItemsGroup";

// data imports
import navBarItemsLeft from "../../data/navBarItemsLeft";
import footerItemsRight from "../../data/footerItemsRight";

// image imports
import logoImage from "../../assets/svg/biom-logo-footer.svg";
import AllRightsReserved from "./AllRightsReserved/AllRightsReserved";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-items">
        <NavBarItemsGroup navBarItems={navBarItemsLeft} />
        <NavBarLogo logoImage={logoImage} />
        <NavBarItemsGroup navBarItems={footerItemsRight} />
        <AllRightsReserved />
      </nav>
    </footer>
  );
}

export default Footer;
