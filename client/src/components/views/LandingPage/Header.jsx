import React from "react";
import { HeaderContainer } from "./styles/styled.js";

const Header = ({ title, subTitle }) => {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </HeaderContainer>
  );
};

export default Header;
