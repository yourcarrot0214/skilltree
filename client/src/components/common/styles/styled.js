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

    ${(props) =>
      props.thumbnail &&
      css`
        max-height: 36px;
        overflow: auto;
      `}
`;

const SkillSearchBarStyled = Styled.div`
  padding: 1rem 1rem;
  /* width: 90%; */
  margin: 0 auto;
  max-width: 1024px;
  min-width: 320px;
`;

const SkillSearchForm = Styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 1rem;
`;

const SearchBar = Styled.input`
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
  flex-wrap: wrap;
  padding: 1rem;
  margin: 0 auto;
  justify-content: space-between;
  max-width: 1024px;
  width: 100%;
`;

const ClassCardThumbNail = Styled.div`
  width: 100%;
  max-width: 1024px;
  min-width: 300px;
  padding: 1rem 2rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  background: #dee2e6;
  display: flex;
  flex-direction: row;
  :hover {
    background: linear-gradient(145deg, #f9fdff, #d2d4d7);
  }
`;

const ClassCardHeader = Styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  width: 100px;
  padding: 1rem 0;
`;

const ClassCardSection = Styled.div`
  display: flex;
  flex-direction: row;
  flex: 5;
  height: 80px;
  justify-content: space-evenly;

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
`;

const ClassTableValue = Styled.div`
  text-align: center;
  height: 40px;
  color: #343a40;
`;

const ClassTitle = Styled.div`
  color: #343a40;
  font-size: 1.3rem;
  font-weight: bold;
  margin-left: 6px;
  margin-bottom: 14px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreateClassButton = Styled.button`
  text-align: center;
  margin-bottom: 1rem;
  width: 150px;
  height: 40px;
  font-weight: bold;
  font-size: 1rem;

  background: linear-gradient(145deg, #3bbe52, #32a045);
  color: white;
  border: none;
  border-radius: 4px;

  :hover {
    background: linear-gradient(145deg, #32a045, #3bbe52);
  }
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

export {
  TagStyled,
  TagContainerStyled,
  SkillSearchBarStyled,
  SkillSearchForm,
  SearchBar,
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
};
