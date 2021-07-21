import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, LinkBox } from "./styles/styled.js";

const Header = ({ title, subTitle }) => {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <LinkBox signup>
        <Link to='/register'>Sign Up</Link>
      </LinkBox>
    </HeaderContainer>
  );
};

export default Header;
