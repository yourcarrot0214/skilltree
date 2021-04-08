import React from "react";
import LeftMenu from "./LeftMenu.jsx";
import RightMenu from "./RightMenu.jsx";
import styled from "styled-components";

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 5px;
  border-bottom: 2px solid gray;
`;

function NavBar() {
  return (
    <NavBarContainer>
      <LeftMenu />
      <RightMenu />
    </NavBarContainer>
  );
}

export default NavBar;

/*
  1. Logo
    - path: "/"
  2. HOME
    - path: "/"
  3. Skills
    - path: "/skills"
  4. Project
    - path: "/project"
  5. Study
    - path: "/study"
  
  6. Profile
    - path: "/users._id"
  7. Sign Up
    - path: "/register"
  8. Log In
    - path: "/login"
  9. Log Out
    - path: "/logout"

  6 ~ 9 조건부 렌더링
    비회원 => Sign Up, Log In
    회원 => Profile, Log Out
*/
