import Styled, { css } from "styled-components";

const TagStyled = Styled.button`
  height: 24px;
  margin: 6px 6px;
  border: none;
  border-radius: 4px;
  background-color: #868e96;
  color: #f8f9fa;

  ${(props) =>
    props.selected &&
    css`
      background-color: #51cf66;
    `}
`;

const TagContainerStyled = Styled.div`
    border: 1px solid black;
`;

const SkillSearchBarStyled = Styled.div`
  padding: 1rem 1rem;
  width: 90%;
  margin: 0 auto;
`;

const ClassCardContainer = Styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid black;
`;

const ClassCardThumbNail = Styled.div`
  padding: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  margin-right: 1rem;
`;

const ClassTitle = Styled.h3`

`;

const ClassDescription = Styled.p`
  color: gray;
`;

const ClassLeader = Styled.div`
  color: gray;
`;

const ClassPersonnel = Styled.div`
  color: gray;
`;

const ClassStatus = Styled.div`
  color: gray;
`;

export {
  TagStyled,
  TagContainerStyled,
  SkillSearchBarStyled,
  ClassCardContainer,
  ClassCardThumbNail,
  ClassTitle,
  ClassDescription,
  ClassLeader,
  ClassPersonnel,
  ClassStatus,
};
