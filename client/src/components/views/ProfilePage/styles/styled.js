import Styled, { css } from "styled-components";

const ProfileMainStyled = Styled.div`
  background-color: #343a40;
  color: white;
  padding-bottom: 2rem;
`;

const UserProfileCardStyled = Styled.div`
  padding-top: 6px;
  padding-right: 2rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
  background-color: #212529;
  margin: 1rem 1rem;
  border-radius: 6px;
`;

const ContentsContainer = Styled.div`
  background-color: #343a40;
  border-radius: 6px;
  padding: 6px 6px;
  margin-bottom: 2rem;
`;

const ButtonBox = Styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
`;

const Button = Styled.button`
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
    min-width: 60px;
    margin: 0 auto;
    font-weight: bold;
    border: none;
`;

const ButtonStyled = Styled.button`
  min-width: 60px;
  font-weight: bold;
  background-color: #495057;
  border: none;
  border-radius: 4px;
  color: white;
`;

const EmailStyled = Styled.div`
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
  }
`;

const LearnStyled = Styled.div`
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
  }
`;

const Form = Styled.form`
  display: flex;
  flex-direction: column;
  label {
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 4px;
    color: #adb5bd;
  }
  input {
    background-color : #212529;
    border: 1px solid black;
    border-radius: 6px;
    outline: none;
    padding: 6px 6px;
    color: white;
    margin-bottom: 2rem;
  }
  button {
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
    min-width: 60px;
    margin: 0 auto;
    font-weight: bold;
    border: none;
  }
`;

const ModalStyled = Styled.div`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);

    ${(props) =>
      props.openModal &&
      css`
        display: flex;
        align-items: center;
        animation: modal-bg-show 0.3s;
      `}
`;

const ModalHeaderButton = Styled.button`
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
`;

const ModalSection = Styled.section`
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 6px;
    background-color: #495057;
    animation: modal-show .3s;
    overflow: hidden;
`;

const ModalHeader = Styled.header`
  position: relative;
  padding: 16px 64px 16px 16px;
  width: 90%;
  font-weight: 700;
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ModalMain = Styled.main`
  width: 90%;
  max-width: 450px;
  min-height: 200px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  color: black;
`;

const PasswordStyled = Styled.div`
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
  }
`;

const TagStyled = Styled.button`
  height: 24px;
  margin: 6px 6px;
  border: none;
  border-radius: 4px;
  background-color: #868e96;
  color: #f8f9fa;
`;

const TagContainerStyled = Styled.div`
    border: 1px solid black;
`;

const TechStyled = Styled.div`
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
  }
`;

const UserNameStyled = Styled.div`
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
  }
`;

export {
  ProfileMainStyled,
  UserProfileCardStyled,
  ContentsContainer,
  ButtonBox,
  Button,
  ButtonStyled,
  EmailStyled,
  LearnStyled,
  Form,
  ModalStyled,
  ModalHeaderButton,
  ModalSection,
  ModalHeader,
  ModalMain,
  PasswordStyled,
  TagStyled,
  TagContainerStyled,
  TechStyled,
  UserNameStyled,
};
