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
  height: 100vh;
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

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2em;
    }
    p {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 1.3em;
    }
    p {
      font-size: 1em;
      padding: 1rem;
      line-height: 1.5rem;
    }
  }
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
        transition: 0.5s;
      }
      a {
        color: #fff;
      }
      a:hover {
        color: white;
        transition: 0.5;
      }
    `}
`;

const BannerContainer = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 0;

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const Wrapper = Styled.div`
  width: 100%;
  background-color: #dee2e6;
  display: flex;
  flex-direction: row;
  max-width: 1024px;
  margin: 0 2rem;
  align-items: center;
  justify-content: space-around;
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 500px;
    max-width: 500px;
    flex-direction: column;
  }

  @media screen and (max-width: 500px) {
    margin: 0 auto;
    max-width: 450px;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
    height: 370px;
  }
`;

const BannerImage = Styled.div`
  width: 100%;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 4;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;

  @media screen and (max-width: 768px) {
    flex: 6;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 0;
  }

  @media screen and (max-width: 450px) {
    flex: 6;
  }
`;

const BannerContents = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
  width: 400px;
  flex: 6;

  h1 {
    color: #212529;
  }

  div {
    color: #495057;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 768px) {
    flex: 4;
  }

  @media screen and (max-width: 450px) {
    flex: 4;
    width: 300px;
    padding: 0.5rem;
    h1 {
      font-size: 1.5em;
    }

    div {
      font-size: 0.8rem;
    }
  }
`;

export {
  LandingPageContainer,
  HeaderContainer,
  LinkBox,
  BannerContainer,
  Wrapper,
  BannerImage,
  BannerContents,
};
