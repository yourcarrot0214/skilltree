import React, { useState } from "react";
import styled from "styled-components";

const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const SubmitForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const CreateClassForm = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  const onCreateClass = (event) => {
    event.preventDefault();
    console.log("Create class request.");
  };

  const onChangeValue = (event) => {
    const value = event.currentTarget.name;
    if (value === "title") setTitle(event.currentTarget.value);
    else if (value === "description") setDescription(event.currentTarget.value);
  };
  return (
    <>
      <h3>Create Class Form</h3>
      <SubmitContainer>
        <SubmitForm onSubmit={onCreateClass}>
          <label>프로젝트명</label>
          <input
            type='text'
            name='title'
            value={Title}
            onChange={onChangeValue}
          />
          <label>프로젝트 설명</label>
          <textarea
            name='description'
            value={Description}
            onChange={onChangeValue}
          />
          <button type='submit'>프로젝트 생성하기</button>
        </SubmitForm>
      </SubmitContainer>
    </>
  );
};

export default CreateClassForm;

/*
  CreateClassForm Component
    - Project, study를 생성할 때 사용하는 재사용 가능한 컴포넌트
    - 입력 양식을 만들고 입력 정보를 서버로 전송한다.
    - reducer, action 생성. 
*/
