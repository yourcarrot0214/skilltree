import Styled from "styled-components";

const NavBarContainer = Styled.div`
  position: fixed;
  top:0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: #141414;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 50px;
    width: 100%;
  }
`;

const LeftMenuContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const RightMenuContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const LinkBox = Styled.div`
  height: 100%;
  text-align: center;
  padding-bottom: 1rem;
  a {
    text-decoration: none;
    color: #e5dbff;
    font-size: 1.3rem;
  }
  a:hover {
      color: #69db7c;
      transition: all .3s ease-out;
  }

  div {
      color: black;
  }

  div:hover {
      color: orangered;
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

const MenuWrapper = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    display: ${(props) => props.display};
    flex-direction: column;
    margin-bottom: 1rem;
    position: fixed;
    top: 50px;
    left: 0;
    z-index: 99;
    background-color: #e9ecef
  }
`;

const LogoSpace = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin: 0 auto;
  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }
`;

export {
  NavBarContainer,
  LeftMenuContainer,
  RightMenuContainer,
  LinkBox,
  MenuWrapper,
  LogoSpace,
};
