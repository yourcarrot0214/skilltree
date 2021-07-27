import React, { useState } from "react";
import LeftMenu from "./LeftMenu.jsx";
import RightMenu from "./RightMenu.jsx";
import {
  NavBarContainer,
  MenuDropButton,
  MenuWrapper,
} from "./styles/styled.js";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  const [display, setDisplay] = useState("none");

  const displayToggle = () => {
    setDisplay((prev) => (prev === "none" ? "display" : "none"));
  };
  return (
    <NavBarContainer className='NavBarContainer'>
      <MenuDropButton className='MenuDropButton' onClick={displayToggle}>
        <GiHamburgerMenu style={{ fontSize: "2rem", fontWeight: "bold" }} />
      </MenuDropButton>
      <MenuWrapper display={display}>
        <LeftMenu />
        <RightMenu />
      </MenuWrapper>
    </NavBarContainer>
  );
}

export default NavBar;
