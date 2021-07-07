import React from "react";
import LeftMenu from "./LeftMenu.jsx";
import RightMenu from "./RightMenu.jsx";
import { NavBarContainer } from "./styles/styled.js";

function NavBar() {
  return (
    <NavBarContainer>
      <LeftMenu />
      <RightMenu />
    </NavBarContainer>
  );
}

export default NavBar;
