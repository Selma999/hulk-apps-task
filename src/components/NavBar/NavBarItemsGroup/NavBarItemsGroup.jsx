import React from "react";
import NavBarItem from "../NavBarItem/NavBarItem";

function NavBarItemsGroup({ navBarItems }) {
  return (
    <div className="navbar-items__group">
      {navBarItems.map(({ id, navBarItem }) => {
        return <NavBarItem key={id} navBarItem={navBarItem} />;
      })}
    </div>
  );
}

export default NavBarItemsGroup;
