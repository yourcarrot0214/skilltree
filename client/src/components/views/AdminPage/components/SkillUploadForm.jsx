import React from "react";
import styled from "styled-components";

export default function SkillUploadForm({
  onSkillUpload,
  onChangeValue,
  SkillName,
}) {
  return (
    <>
      <FormContainer onSubmit={onSkillUpload}>
        <input
          type='text'
          name='skill-name'
          value={SkillName}
          onChange={onChangeValue}
        />
        <button type='submit'>Skill Upload</button>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 1rem;
  align-items: flex-end;

  input {
    width: 170px;
    height: 30px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 3px solid #91d5ff;
    color: #fafafa;
    background-color: rgba(255, 255, 255, 0);
    ::placeholder {
      ccolor: #d9d9d9;
    }
    :focus {
      outline: none;
      border-bottom: 3px solid #2f9e44;
    }
    -webkit-appearance: none;
    border-radius: 0;
  }

  button {
    width: 100px;
    height: 35px;
    color: #91d5ff;
    font-weight: bold;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 3px solid #91d5ff;
    background-color: rgba(255, 255, 255, 0);
    :hover {
      border-bottom: 3px solid #2f9e44;
    }
  }
`;
