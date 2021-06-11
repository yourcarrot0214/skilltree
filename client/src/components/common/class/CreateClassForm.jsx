import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { createProject } from "../../../_actions/project_action.js";
import { createStudy } from "../../../_actions/study_action.js";

import SkillSearchBar from "../SkillSearchBar.jsx";

import useSkills from "../../hooks/useSkills.js";

const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  height: 100vh;
`;

const SubmitForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const CreateClassForm = ({ location }) => {
  const dispatch = useDispatch();
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Personnel, setPersonnel] = useState(0);

  const userData = useSelector((state) => state.user.userData, shallowEqual);
  const skills = useSkills();
  const selectedSkills = skills.filter((skill) => skill.selected);

  const onCreateClass = (event) => {
    event.preventDefault();

    const requestBody = {
      title: Title,
      description: Description,
      skills: selectedSkills,
      personnel: Personnel,
      leader: userData._id,
    };
    console.log(requestBody);
    if (location === "project") {
      dispatch(createProject(requestBody));
    } else if (location === "study") {
      dispatch(createStudy(requestBody));
    } else {
      alert("location props가 존재하지 않습니다.");
    }
  };

  const onChangeValue = (event) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    if (name === "title") setTitle(value);
    else if (name === "description") setDescription(value);
    else if (name === "personnel") setPersonnel(Number(value));
  };

  return (
    <>
      <h3>Create Class Form</h3>
      <SubmitContainer>
        <h3>프로젝트에 필요한 스킬을 선택해 주세요.</h3>
        <SkillSearchBar selected={true} />
        <SubmitForm onSubmit={onCreateClass}>
          <label>프로젝트명</label>
          <input
            type='text'
            name='title'
            value={Title}
            onChange={onChangeValue}
            required
          />
          <label>프로젝트 설명</label>
          <textarea
            name='description'
            value={Description}
            onChange={onChangeValue}
            required
          />
          <label>모집 인원 수</label>
          <input
            type='number'
            name='personnel'
            value={Personnel}
            onChange={onChangeValue}
            min='2'
            max='10'
            required
          />
          <button type='submit'>프로젝트 생성하기</button>
        </SubmitForm>
      </SubmitContainer>
    </>
  );
};

export default CreateClassForm;

/*
  1. DetailPage에서 Modal 컴포넌트에 ModalMain에서 출력.
*/
