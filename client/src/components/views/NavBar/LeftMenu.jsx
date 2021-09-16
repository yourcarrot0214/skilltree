import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { LeftMenuContainer, LinkBox } from "./styles/styled.js";
import {
  FcHome,
  FcCommandLine,
  FcOrgUnit,
  FcCollaboration,
} from "react-icons/fc";

const logoStyle = {
  fontSize: "24px",
};

const LeftMenu = ({ displayToggle }) => {
  return (
    <LeftMenuContainer>
      <LinkBox>
        <FcHome style={logoStyle} />
        <Link to='/' onClick={displayToggle}>
          Home
        </Link>
      </LinkBox>
      <LinkBox>
        <FcCommandLine style={logoStyle} />
        <Link to='/skills' onClick={displayToggle}>
          Skills
        </Link>
      </LinkBox>
      <LinkBox>
        <FcOrgUnit style={logoStyle} />
        <Link to='/project' onClick={displayToggle}>
          Project
        </Link>
      </LinkBox>
      <LinkBox>
        <FcCollaboration style={logoStyle} />
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
