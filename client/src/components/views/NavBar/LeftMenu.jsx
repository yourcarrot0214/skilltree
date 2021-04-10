import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const LeftMenuContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  /* flex: 7; */
  font-weight: bold;
`;

const LinkBox = styled.div`
  margin-left: 16px;
  width: 100%;
  height: 100%;
  background: tomato;
  text-align: center;
  a {
    text-decoration: none;
  }
`;

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
