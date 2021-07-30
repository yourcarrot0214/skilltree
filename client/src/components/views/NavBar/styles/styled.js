import Styled from "styled-components";

const NavBarContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftMenuContainer = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

const RightMenuContainer = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
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

  @media screen and (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    
    a {
      display: block;
      padding: 0.5rem 0;
    }

    :first-child {
      margin-left: 0;
    }

    div:last-child {
      margin-right: 0;
      padding: 0.5rem 0;
    }
  }
`;

const MenuDropButton = Styled.div`
  display: none;
  margin: 0 auto;
  padding: 0.5rem 0;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MenuWrapper = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: ${(props) => props.display};
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

export {
  NavBarContainer,
  LeftMenuContainer,
  RightMenuContainer,
  LinkBox,
  MenuDropButton,
  MenuWrapper,
};
