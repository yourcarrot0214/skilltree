import React from "react";
import { Link, withRouter } from "react-router-dom";
import { LeftMenuContainer, LinkBox } from "./styles/styled.js";

const LeftMenu = () => {
  return (
    <LeftMenuContainer>
      <LinkBox>
        <Link to='/'>HOME</Link>
      </LinkBox>
      <LinkBox>
        <Link to='/skills'>Skills</Link>
      </LinkBox>
      <LinkBox>
        <Link to='/project'>Project</Link>
      </LinkBox>
      <LinkBox>
        <Link to='/study'>Study</Link>
      </LinkBox>
    </LeftMenuContainer>
  );
};

export default withRouter(LeftMenu);
