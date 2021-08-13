import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { LeftMenuContainer, LinkBox } from "./styles/styled.js";

const LeftMenu = ({ displayToggle }) => {
  return (
    <LeftMenuContainer>
      <LinkBox>
        <Link to='/' onClick={displayToggle}>
          HOME
        </Link>
      </LinkBox>
      <LinkBox>
        <Link to='/skills' onClick={displayToggle}>
          Skills
        </Link>
      </LinkBox>
      <LinkBox>
        <Link to='/project' onClick={displayToggle}>
          Project
        </Link>
      </LinkBox>
      <LinkBox>
        <Link to='/study' onClick={displayToggle}>
          Study
        </Link>
      </LinkBox>
    </LeftMenuContainer>
  );
};

LeftMenu.propTypes = {
  displayToggle: PropTypes.func,
};

export default withRouter(LeftMenu);
