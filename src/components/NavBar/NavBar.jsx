import React from "react";
import classNames from "classnames";

import DesktopNavigation from "./DesktopNavigation/DesktopNavigation";
import MobileNavigation from "./MobileNavigation/MobileNavigation";

function NavBar({ className }) {
  return (
    <header className={classNames("navbar", className || "")}>
      <DesktopNavigation />
      <MobileNavigation isOpenMenu={true} />
    </header>
  );
}

export default NavBar;
