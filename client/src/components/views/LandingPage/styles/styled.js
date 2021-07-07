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

export { LandingPageContainer, HeaderContainer };
