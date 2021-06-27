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
    overflow: auto;
    max-height: 300px;
`;

const SkillSearchBarStyled = Styled.div`
  padding: 1rem 1rem;
  width: 90%;
  margin: 0 auto;
`;

const ClassCardContainer = Styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem;
  border: 1px solid black;
`;

const ClassCardThumbNail = Styled.div`
  width: 350px;
  max-width: 350px;
  min-width: 300px;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  margin-right: 1rem;
  margin-top: 1rem;
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

const ClassInfoStyled = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 1rem;
  margin: 6px 0;
  span {
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 4px;
    color: #adb5bd;
  }
  p {
    margin-top: 0;
    margin-bottom: 6px;
    color: white;
  }
`;

const CreateClassButton = Styled.button`
  position: fixed;
  top: 5rem;
  right: 2rem;
  z-index: 99;
  width: 130px;
  height: 30px;
  font-weight: bold;
  background-color: #37b24d;
  color: white;
  border: none;
  border-radius: 4px;
`;

const SubmitContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const SubmitForm = Styled.form`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const UserTagContainer = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4px 4px;

  span {
    font-size: 1rem;
    font-weight: bold;
  }

  span:hover {
    color: #69db7c;
  }
`;

const StyledButton = Styled.button`
  height: 24px;
  margin-left: 6px;
  border: none;
  border-radius: 4px;
  background-color: #f03e3e;
  font-size: 1rem;
  padding: 4px 6px;
  
  ${(props) =>
    props.admission &&
    css`
      background-color: #37b24d;
    `}
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
  ClassInfoStyled,
  CreateClassButton,
  SubmitContainer,
  SubmitForm,
  ButtonContainer,
  UserTagContainer,
  StyledButton,
};
