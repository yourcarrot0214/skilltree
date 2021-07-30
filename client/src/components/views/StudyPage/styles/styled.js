import Styled from "styled-components";

const StudyMainContainer = Styled.div`
  padding-bottom: 2rem;
  max-width: 1024px;
  margin: 0 auto;
  h2 {
      text-align: center;
      color: #212529;
  }

  @media screen and (max-width: 450px) {
    padding-bottom: 0.5rem;

    h2 {
      font-size: 1em;
    }
  }
`;

export { StudyMainContainer };
