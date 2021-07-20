import Styled from "styled-components";

const HeaderStyled = Styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  height: 200px;
`;

const SkillNameStyled = Styled.div`
  padding: 1rem;
  width: 250px;
  text-align: center;
  font-weight: 800;
  font-size: 2rem;
  color: #37b24d;
`;

const InfoStyled = Styled.div`
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin: 0 auto;
  color: #343a40;
  text-align: center;
`;

export { HeaderStyled, SkillNameStyled, InfoStyled };
