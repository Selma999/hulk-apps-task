import React, { useState } from "react";
import classNames from "classnames";

// component imports
import NavBarItemsGroup from "../NavBarItemsGroup/NavBarItemsGroup";
import HamburgerMenu from "../HamburgerMenu";

// data imports
import navBarItemsLeft from "../../../data/navBarItemsLeft";
import navBarItemsRight from "../../../data/navBarItemsRight";

function MobileNavigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // toggle hamburger menu on click using state
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <nav
      className={classNames("navbar-items__mobile", isOpenMenu ? "active" : "")}
    >
      <HamburgerMenu
        onClick={toggleMenu}
        className={isOpenMenu ? "active" : ""}
      />
      {isOpenMenu && (
        <div
          className={classNames(
            "navbar-items__mobile__toggle",
            isOpenMenu ? "active" : ""
          )}
        >
          <NavBarItemsGroup navBarItems={navBarItemsLeft} />
          <NavBarItemsGroup navBarItems={navBarItemsRight} />
        </div>
      )}
    </nav>
  );
}

export default MobileNavigation;
