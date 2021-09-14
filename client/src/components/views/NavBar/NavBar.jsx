import React, { useState } from "react";
import LeftMenu from "./LeftMenu.jsx";
import RightMenu from "./RightMenu.jsx";
import { NavBarContainer, MenuWrapper, LogoSpace } from "./styles/styled.js";
import "boxicons";

function NavBar() {
  const [display, setDisplay] = useState("none");

  const displayToggle = () => {
    setDisplay((prev) => (prev === "none" ? "block" : "none"));
    // NavBar 전체 노출 변경
  };
  return (
    <NavBarContainer className='NavBarContainer'>
      <LogoSpace onClick={displayToggle}>
        <box-icon name='tree' type='solid' color='#73d13d' size='md'></box-icon>
        <span>Skill Tree</span>
      </LogoSpace>
      <MenuWrapper className='MenuWrapper' display={display}>
        <LeftMenu displayToggle={displayToggle} />
        <RightMenu displayToggle={displayToggle} />
      </MenuWrapper>
    </NavBarContainer>
  );
}

export default NavBar;
