import Styled, { css } from "styled-components";
import HeaderImage from "../images/header.jpeg";

const LandingPageContainer = Styled.div`
  width: 100%;
`;

const HeaderContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  width: 100%;
  margin: 0 auto;
  height: 500px;
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${HeaderImage});
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
      text-align: center;
      color: #f8f9fa;
      font-size: 3rem;
  }
  p {
      text-align: center;
      color: #f8f9fa;
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
  a {
    text-decoration: none;
    color: white;
    padding: 1rem 1.5rem;
    margin: 0 auto;
  }
  a:hover {
      color: #69db7c;
  }

  ${(props) =>
    props.signup &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      border-radius: 6px;
      border: 3px solid #40c057;
      margin-top: 1.5rem;
      :hover {
        background-color: #40c057;
      }
      a:hover {
        color: black;
      }
    `}
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
