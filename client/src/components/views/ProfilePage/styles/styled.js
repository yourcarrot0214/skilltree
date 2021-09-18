import Styled, { css } from "styled-components";

const ProfileMainStyled = Styled.div`
  color: #212529;
  padding-bottom: 2rem;
  margin: 0 auto;
  max-width: 1024px;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const UserProfileCardStyled = Styled.div`
  padding-top: 6px;
  padding-right: 2rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
  margin: 0 auto;

  h2 {
    color: #f5f5f5;
  }

  @media screen and (max-width: 450px) {
    padding: 0.5rem;
  }
`;

const ContentsContainer = Styled.div`
  background-color: #141414;
  border-radius: 6px;
  padding: 6px 6px;
  margin-bottom: 2rem;
`;

const ButtonBox = Styled.div`
  display: flex;
  flex-direction: row;
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
    color: #bfbfbf;
  }
  p {
    margin-top: 0;
    margin-bottom: 6px;
    color: #f5f5f5;
  }

  @media screen and (max-width: 450px) {
    padding: 1rem 0.5rem;
  }
`;

const LearnStyled = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 6px;
  span {
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 4px;
    color: #8c8c8c;
  }
  p {
    margin-bottom: 0;
    color: #f0f0f0;
  }
`;

const Form = Styled.form`
  display: flex;
  flex-direction: column;
  label {
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 4px;
    color: #212529;
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
    background-color: #212529;
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
        animation: 0.3s;
        overflow: auto;
      `}
`;

const ModalHeaderButton = Styled.button`
    padding: 6px 12px;
    color: #fff;
    background-color: #212529;
    border-radius: 5px;
    font-size: 13px;
    border: none;
`;

const ModalSection = Styled.section`
    width: 90%;
    max-width: 450px;
    max-height: 700px;
    margin: 0 auto;
    border-radius: 6px;
    background-color: #141414;
    animation: modal-show .3s;
    overflow: auto;
`;

const ModalHeader = Styled.header`
  position: relative;
  margin: 0 auto;
  padding: 16px;
  width: 90%;
  font-weight: 700;
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: #f5f5f5;
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

  label {
    color: #f0f0f0;
  }

  h3 {
    color: #f0f0f0;
  }
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
    color: #bfbfbf;
  }
  p {
    margin-top: 0;
    margin-bottom: 6px;
    color: #f5f5f5;
  }

  @media screen and (max-width: 450px) {
    padding: 1rem 0.5rem;
  }
`;

const TechStyled = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 6px;
  span {
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 4px;
    color: #8c8c8c;
  }
  p {
    margin-bottom: 0;
    color: #f0f0f0;
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
    color: #bfbfbf;
  }
  p {
    margin-top: 0;
    margin-bottom: 6px;
    color: #f5f5f5;
  }

  @media screen and (max-width: 450px) {
    padding: 1rem 0.5rem;
  }
`;

const ClassContainer = Styled.div`
  width: 100%;
`;

const Menu = Styled.h3`
  padding-left: 1rem;
  color: #8c8c8c;
`;

const PrintMessageStyled = Styled.div`
  width: 100%;
  color: #bfbfbf;
  font-size: 1rem;
  text-align: center;
`;

const ClassWrapper = Styled.div`
  padding-left: 1rem;
  margin: 1rem 0;

  @media screen and (max-width: 450px) {
    padding-left: 0;
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
  TechStyled,
  UserNameStyled,
  ClassContainer,
  Menu,
  PrintMessageStyled,
  ClassWrapper,
};
