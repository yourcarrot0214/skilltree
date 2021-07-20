import Styled from "styled-components";
import HeaderImage from "../images/header.jpeg";

const LandingPageContainer = Styled.div`
  width: 100%;
`;

const HeaderContainer = Styled.div`
  padding: 2rem 0;
  width: 100%;
  margin: 0 auto;
  height: 500px;
  position: relative;
  
  &:after {
    content: "";
    width: 100%;
    height: 500px;
    margin: 0 auto;
    padding: 2rem 0;
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${HeaderImage});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  h1 {
      text-align: center;
      color: #f8f9fa;
      position: relative;
      top: 3rem;
      font-size: 3rem;
  }
  p {
      text-align: center;
      color: #f8f9fa;
      position: relative;
      top: 5rem;
  }
`;

const SectionContainer = Styled.div`
  width: 100%;
`;

const SectionBox = Styled.div`
  padding: 2rem 0;
  border: 1px solid black;
  margin: 0 auto;
  width: 100%;
  height: 100px;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionLogo = Styled.div`
  font-size: 3rem;
  padding: 0 1rem;
`;

const SectionTitle = Styled.h3`
  text-align: center;
  color: black;
`;

const SectionDescription = Styled.p`
  text-align: center;
  color: black;
`;

const LinkBox = Styled.div`
  text-align: center;
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
      color: #69db7c;
  }
`;

export {
  LandingPageContainer,
  HeaderContainer,
  SectionContainer,
  SectionBox,
  SectionLogo,
  SectionTitle,
  SectionDescription,
  LinkBox,
};
