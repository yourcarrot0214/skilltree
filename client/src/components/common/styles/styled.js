import Styled, { css } from "styled-components";

const TagStyled = Styled.button`
  height: 24px;
  margin: 6px 6px;
  border: none;
  border-radius: 4px;
  background-color: #343a40;
  color: #f8f9fa;

  ${(props) =>
    props.selected &&
    css`
      background-color: #2f9e44;
    `}
`;

const TagContainerStyled = Styled.div`
    overflow: auto;
    max-height: 300px;
    min-height: 36px;

    /* scroll bar hidden */
    /* Chrome, Safari, Opera */
    ::-webkit-scrollbar {
      display: none;
    }
    /* IE and Edge */
    -ms-overflow-style: none;
    /* Firefox */
    scrollbar-width: none;

    @media screen and (max-width: 450px) {
      max-height: 200px;
      width: 100%;
    }
`;

const SkillSearchBarStyled = Styled.div`
  padding: 1rem 1rem;
  margin: 0 auto;
  max-width: 1024px;
  min-width: 320px;

  @media screen and (max-width: 450px) {
    width: 100%;
    padding: 0;
    min-width: 100%;
  }
`;

const SkillSearchForm = Styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 1rem;
  align-items: flex-end;

  @media screen and (max-width: 450px) {
    padding: 1rem;
  }
`;

const SearchBarInput = Styled.input`
  width: 170px;
  height: 30px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid black;
  background-color : rgba(255, 255, 255, 0);
  ::placeholder {
    color: #495057;
  }
  :focus {
    outline: none;
  }
  -webkit-appearance: none;
  border-radius: 0;
`;

const SearchButton = Styled.button`
  width: 100px;
  height: 35px;
  font-weight: bold;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid black;
  background-color : rgba(255, 255, 255, 0);
`;

const ClassCardContainer = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  margin: 0 auto;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media screen and (max-width: 450px) {
    padding: 0.5rem 0;
    margin: 0 auto;
  }
`;

const ClassCardThumbNail = Styled.div`
  padding: 1rem 2rem;
  border-radius: 6px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background: #dee2e6;
  display: flex;
  flex-direction: row;
  :hover {
    background: linear-gradient(145deg, #f9fdff, #d2d4d7);
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }

  @media screen and (max-width: 500px) {
    max-width: 450px;
    flex-direction: column;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    padding: 0.5rem;
    padding-bottom: 1rem;
  }
`;

const ClassCardHeader = Styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  padding: 1rem 0;

  @media screen and (max-width: 768px) {
    padding: 0.5rem 0;
    flex: 6;
  }
`;

const ClassCardSection = Styled.div`
  display: flex;
  flex-direction: row;
  flex: 5;
  height: 80px;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    flex: 4;
  }
`;

const ClassTable = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ClassTableMenu = Styled.div`
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 1rem 0;
  width: 100px;
  color: #343a40;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 0;
    width: 100%;
  }
`;

const ClassTableValue = Styled.div`
  text-align: center;
  height: 40px;
  color: #343a40;

  @media screen and (max-width: 768px) {
    width: 60px;
    height: auto;
  }
`;

const ClassTitle = Styled.div`
  color: #343a40;
  font-size: 1.3rem;
  font-weight: bold;
  margin-left: 6px;
  margin-bottom: 14px;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0;
    padding: 0.5rem 0;
  }
`;

const ClassDescription = Styled.p`
  color: #343a40;
`;

const ClassLeader = Styled.div`
  color: #343a40;
  padding-left: 4px;
  padding-top: 4px;
  margin-top: 1rem;
`;

const ClassPersonnel = Styled.div`
  color: #343a40;
  padding-left: 4px;
  padding-top: 4px;
`;

const ClassStatus = Styled.div`
  color: #343a40;
  padding-left: 4px;
  padding-top: 4px;
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
    color: #343a40;
  }
  p {
    margin-top: 0;
    margin-bottom: 6px;
    color: #212529;
  }
`;

const DetailContainer = Styled.div`
  margin: 0 auto;
  padding: 1rem 0;

  @media screen and (max-width: 450px) {
    padding: 0.5rem 0;
  }
`;

const CreateClassButton = Styled.button`
  text-align: center;
  display: block;
  width: 150px;
  height: 40px;
  font-weight: bold;
  font-size: 1rem;
  margin: 0 auto;

  background: linear-gradient(145deg, #3bbe52, #32a045);
  color: white;
  border: none;
  border-radius: 4px;

  :hover {
    background: linear-gradient(145deg, #32a045, #3bbe52);
  }

  a {
    text-decoration: none;
    color: white;
  }

  @media screen and (max-width: 450px) {
    margin: 0.5rem auto;
  }
`;

const SubmitContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  h3 {
    text-align: center;
  }

  .goBack {
    width: 70px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 0;
    margin-left: auto;
    border: none;
    background-color: #f03e3e;
    border-radius: 6px;
    color: white;
  }
`;

const SubmitForm = Styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: center;
  margin-top: 2rem;
  
  label {
    font-size: 1rem;
    color: #495057;
  }

  input {
    height: 30px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 3px solid black;
    background-color: rgba(255, 255, 255, 0);
    margin-bottom: 2rem;

    :focus {
      outline: none;
      border-bottom: 3px solid #40c057;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  textarea {
    min-height: 300px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 3px solid black;
    background-color: rgba(255, 255, 255, 0);
    margin-bottom: 2rem;

    :focus {
      outline: none;
      border-bottom: 3px solid #40c057;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  button {
    width: 100%;
    padding: 0.7rem;
    margin: 1rem auto;
    border: none;
    border-radius: 0.3rem;
    background-color: #51cf66;
    color: white;
    font-size: 1rem;
    font-weight: bold;

    :hover {
      background-color: #40c057;
      transition: 0.5s;
    }
  }
`;

const ButtonContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const UserTagContainer = Styled.div`
  padding: 4px 4px;

  span {
    font-size: 1rem;
    font-weight: bold;
  }

  span:hover {
    color: #69db7c;
  }
`;

const UserListWrapper = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

const SetupBoard = Styled.div`
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  text-align: center;
  a {
    text-decoration: none;
    color: white;
    background-color: #37b24d;
    font-size: 1rem;
    padding: 0.4rem;
    margin-right: 1rem;
    border-radius: 6px;
  }

  button {
    color: white;
    background-color: #f03e3e;
    border: none;
    font-size: 1rem;
    padding: 0.4rem;
    border-radius: 6px;
  }
`;

const UserInfoName = Styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const UserInfoMenu = Styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  padding-left: 6px;
`;

export {
  TagStyled,
  TagContainerStyled,
  SkillSearchBarStyled,
  SkillSearchForm,
  SearchBarInput,
  SearchButton,
  ClassCardContainer,
  ClassCardThumbNail,
  ClassCardHeader,
  ClassCardSection,
  ClassTable,
  ClassTableMenu,
  ClassTableValue,
  ClassTitle,
  ClassDescription,
  ClassLeader,
  ClassPersonnel,
  ClassStatus,
  ClassInfoStyled,
  DetailContainer,
  CreateClassButton,
  SubmitContainer,
  SubmitForm,
  ButtonContainer,
  UserTagContainer,
  StyledButton,
  UserListWrapper,
  SetupBoard,
  UserInfoName,
  UserInfoMenu,
};
