import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { HeaderContainer, LinkBox } from "./styles/styled.js";

const Header = ({ title, subTitle, userData }) => {
  const { isAuth } = userData;
  return (
    <HeaderContainer>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      {isAuth ? null : (
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
