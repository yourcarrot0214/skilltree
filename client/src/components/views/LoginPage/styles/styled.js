import styled from "styled-components";
import backgroundImage from "../images/login-image.png";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`;

const LoginWrapper = styled.div`
  width: 100%;
  background-color: #dee2e6;
  display: flex;
  flex-direction: row;
  max-width: 1024px;
  align-items: center;
  justify-content: space-around;
  border-radius: 1rem;
  box-shadow: 20px 20px 60px #bdc0c4, -20px -20px 60px #ffffff;

  @media screen and (max-width: 768px) {
    max-width: 700px;
    height: 300px;
  }
`;

const LoginImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  flex: 5;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;

  h2 {
    color: #2b8a3e;
  }

  label {
    width: 300px;
    font-size: 1rem;
    color: #495057;
  }

  input {
    width: 300px;
    height: 30px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 3px solid #343a40;
    background-color: rgba(255, 255, 255, 0);
    font-size: 1.2rem;
    font-weight: 600;
    color: #343a40;
    margin-bottom: 1rem;

    ::placeholder {
      color: #495057;
    }

    :focus {
      outline: none;
      border-bottom: 3px solid #40c057;
    }
  }

  button {
    padding: 0.7rem;
    margin: 1rem auto;
    border: none;
    border-radius: 0.3rem;
    background-color: #51cf66;
    color: white;
    width: 300px;
    font-size: 1rem;
    font-weight: bold;

    :hover {
      background-color: #40c057;
      transition: 0.5s;
    }
  }

  @media screen and (max-width: 768px) {
    width: 300px;
    padding: 0;
    label {
      width: 220px;
    }

    input {
      width: 220px;
      font-size: 1rem;
    }

    button {
      width: 220px;
    }
  }
`;

export { LoginContainer, LoginWrapper, LoginImage, LoginForm };
