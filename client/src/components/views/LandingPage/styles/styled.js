import Styled from "styled-components";

const LandingPageContainer = Styled.div`
  background-color: #343a40;
  height: 100%;
`;

const HeaderContainer = Styled.div`
  padding: 2rem 0;

  h1 {
      text-align: center;
      color: #f1f3f5;
  }

  p {
      text-align: center;
      color: #ced4da;
  }
`;

const SectionBox = Styled.div`
  padding: 2rem 0;
  border: 1px solid black;
  max-width: 1024px;
`;

const SectionTitle = Styled.h3`
  text-align: center;
  color: #f1f3f5;
`;

const SectionDescription = Styled.p`
  text-align: center;
  color: #ced4da;
`;

const LinkBox = Styled.div`
  text-align: center;
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
      color: #69db7c;
  }
`;

export {
  LandingPageContainer,
  HeaderContainer,
  SectionBox,
  SectionTitle,
  SectionDescription,
  LinkBox,
};
