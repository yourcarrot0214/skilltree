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
  color: #bfbfbf;
  text-align: center;
`;

const SkillsMainContainer = Styled.div`
  flex: 1;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-itmes: flex-start;
`;

export { HeaderStyled, SkillNameStyled, InfoStyled, SkillsMainContainer };
