import React from "react";

import NavBarLogo from "./NavBarLogo/NavBarLogo";
import NavBarItemsGroup from "./NavBarItemsGroup/NavBarItemsGroup";

// data imports
import navBarItemsLeft from "../../data/navBarItemsLeft";
import navBarItemsRight from "../../data/navBarItemsRight";

function NavBar() {
  return (
    <div className="navbar-items">
      <NavBarItemsGroup navBarItems={navBarItemsLeft} />
      <NavBarLogo />
      <NavBarItemsGroup navBarItems={navBarItemsRight} />
    </div>
  );
}

export default NavBar;
