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
  border: 1px soild black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 4rem 0;
`;

const SectionBox = Styled.div`
  padding: 2rem 0;
  margin: 0 auto;
  width: 400px;
  height: 200px;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  box-shadow:  20px 20px 40px #bdc0c4,
              -20px -20px 40px #ffffff;
`;

const SectionTitle = Styled.h1`
  text-align: center;
  color: #212529;
`;

const SectionDescription = Styled.p`
  text-align: center;
  color: #343a40;
`;

const LinkBox = Styled.div`
  a {
    text-decoration: none;
    padding: 1rem 1.5rem;
    margin: 0 auto;
    color: black;
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
      a {
        color: #fff;
      }
      a:hover {
        color: white;
      }
    `}
`;

export {
  LandingPageContainer,
  HeaderContainer,
  SectionContainer,
  SectionBox,
  SectionTitle,
  SectionDescription,
  LinkBox,
};
