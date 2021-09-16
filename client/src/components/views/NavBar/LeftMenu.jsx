import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { LeftMenuContainer, LinkBox } from "./styles/styled.js";
import { BiCodeBlock, BiCustomize } from "react-icons/bi";
import { RiPencilFill } from "react-icons/ri";
import { FcHome } from "react-icons/fc";

const logoStyle = {
  color: "#73d13d",
  fontSize: "24px",
};

const LeftMenu = ({ displayToggle }) => {
  return (
    <LeftMenuContainer>
      <LinkBox>
        <FcHome style={{ fontSize: "24px" }} />
        <Link to='/' onClick={displayToggle}>
          Home
        </Link>
      </LinkBox>
      <LinkBox>
        <BiCodeBlock style={logoStyle} />
        <Link to='/skills' onClick={displayToggle}>
          Skills
        </Link>
      </LinkBox>
      <LinkBox>
        <BiCustomize style={logoStyle} />
        <Link to='/project' onClick={displayToggle}>
          Project
        </Link>
      </LinkBox>
      <LinkBox>
        <RiPencilFill style={logoStyle} />
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
