import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { HeaderContainer, LinkBox } from "./styles/styled.js";
import useUserData from "../../hooks/useUserData";

const Header = ({ title, subTitle }) => {
  const { isAuth } = useUserData();
  return (
    <HeaderContainer>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      {isAuth ? (
        <LinkBox signup>
          <Link to='/profile'>Profile 바로가기</Link>
        </LinkBox>
      ) : (
        <LinkBox signup>
          <Link to='/register'>Sign Up</Link>
        </LinkBox>
      )}
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default React.memo(Header);
