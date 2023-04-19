import React from "react";
import NavBarItem from "../NavBarItem/NavBarItem";

function NavBarItemsGroup({ navBarItems }) {
  return (
    <div className="navbar-items__group">
      {navBarItems.map(({ id, navBarItem, icon }) => {
        return (
          <NavBarItem key={id} navBarItem={navBarItem} navBarIcon={icon} />
        );
      })}
    </div>
  );
}

export default NavBarItemsGroup;
