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
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  font-weight: bold;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
    padding: 0;
    background-color: #141414;
  }
`;

const RightMenuContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  font-weight: bold;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
    padding: 0;
    background-color: #141414;
  }
`;

const LinkBox = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 8px;
  :hover {
    background-color: #1f1f1f; 
  }
  a {
    margin-left: 0.5rem;
    text-decoration: none;
    color: #e5dbff;
    font-size: 1rem;
    
  }
  a:hover {
      color: #69db7c;
      transition: all .3s ease-out;
  }

  div {
      color: white;
      font-size: 1rem;
      margin-left: 0.3rem;
  }

  div:hover {
      color: orangered;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    
    a {
      display: block;
      padding: 0.5rem 0;
    }
  }
`;

const MenuWrapper = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h4 {
    color: #bfbfbf;
    margin: 0;
    padding-left: 0.5rem;
  }

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
  margin: 1rem auto;
  a {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    z-index: 0

  }
  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: #faad14;
  }
  box-icon:last-child {
    margin-left: -2.3rem;
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
