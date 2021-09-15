import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import LeftMenu from "./LeftMenu.jsx";
import RightMenu from "./RightMenu.jsx";
import Footer from "../Footer/Footer";
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
        <Link to='/'>
          <span>Skill Tree</span>
          <box-icon name='tree' type='solid' color='#135200' size='md' />
          <box-icon name='tree' type='solid' color='#73d13d' size='sm' />
        </Link>
      </LogoSpace>
      <MenuWrapper className='MenuWrapper' display={display}>
        <LeftMenu displayToggle={displayToggle} />
        <RightMenu displayToggle={displayToggle} />
      </MenuWrapper>
      <Footer />
    </NavBarContainer>
  );
}

export default withRouter(NavBar);
