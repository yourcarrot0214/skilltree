import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import LeftMenu from "./LeftMenu.jsx";
import RightMenu from "./RightMenu.jsx";
import Footer from "../Footer/Footer";
import { NavBarContainer, MenuWrapper, LogoSpace } from "./styles/styled.js";
import { GiTreeBranch } from "react-icons/gi";

function NavBar() {
  const [display, setDisplay] = useState("none");

  const displayToggle = () => {
    setDisplay((prev) => (prev === "none" ? "block" : "none"));
    // NavBar 전체 노출 변경
  };
  return (
    <NavBarContainer className='NavBarContainer'>
      <LogoSpace onClick={displayToggle}>
        <span>Skill Tree</span>
        <GiTreeBranch style={{ color: "#95de64", fontSize: "36px" }} />
      </LogoSpace>
      <MenuWrapper className='MenuWrapper' display={display}>
        <h4>Skill Tree Menu</h4>
        <LeftMenu displayToggle={displayToggle} />
        <h4>User Board</h4>
        <RightMenu displayToggle={displayToggle} />
      </MenuWrapper>
      <Footer />
    </NavBarContainer>
  );
}

export default withRouter(NavBar);
