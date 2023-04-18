import React from "react";
import NavBarItem from "../NavBarItem/NavBarItem";

function NavBarItemsGroup({ navBarItems }) {
  return (
    <div className="navbar-items__group">
      {navBarItems.map(({ id, navBarItem, navBarIcon, src, alt }) => {
        return (
          <NavBarItem
            key={id}
            navBarItem={navBarItem}
            navBarIcon
            src={src}
            alt={alt}
          />
        );
      })}
    </div>
  );
}

export default NavBarItemsGroup;
