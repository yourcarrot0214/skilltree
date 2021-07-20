import Styled from "styled-components";

const NavBarContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  /* background-color: #343a40; */
`;

const LeftMenuContainer = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  font-weight: bold;
`;

const RightMenuContainer = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  font-weight: bold;
`;

const LinkBox = Styled.div`
  margin-left: 16px;
  height: 100%;
  text-align: center;
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
      color: #69db7c;
  }

  div {
      color: black;
  }

  div:hover {
      color: orangered;
  }

  div:last-child {
      margin-right: 16px;
  }

  :first-child {
      margin-left: 8px;
  }
`;

export { NavBarContainer, LeftMenuContainer, RightMenuContainer, LinkBox };
