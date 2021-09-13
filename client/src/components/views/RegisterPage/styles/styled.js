import styled from "styled-components";
import backgroundImage from "../images/register-image1.png";

const SubmitContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`;

const SubmitWrapper = styled.div`
  width: 100%;
  background-color: #dee2e6;
  display: flex;
  flex-direction: row;
  max-width: 1024px;
  padding: 1rem;
  align-items: center;
  justify-content: space-around;
  border-radius: 1rem;
  box-shadow: 20px 20px 60px #bdc0c4, -20px -20px 60px #ffffff;

  @media screen and (max-width: 768px) {
    max-width: 700px;
  }

  @media screen and (max-width: 500px) {
    width: 450px;
    padding: 1rem 0;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
    margin: 0 0.5rem;
  }
`;

const SubmitImage = styled.div`
  width: 400px;
  height: 400px;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 768px) {
    width: 300px;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const SubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;

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
      transition: 0.3s;
    }

    -webkit-appearance: none;
    border-radius: 0;
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
  }

  @media screen and (max-width: 450px) {
    width: 280px;
    padding: 0 1.5rem;
    height: auto;
    label {
      width: 100%;
    }

    input {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`;

export { SubmitContainer, SubmitWrapper, SubmitImage, SubmitForm };
