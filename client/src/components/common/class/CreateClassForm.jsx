import React, { useState } from "react";
import PropTypes from "prop-types";
import { SubmitContainer, SubmitForm } from "../styles/styled.js";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { createProject } from "../../../_actions/project_action.js";
import { createStudy } from "../../../_actions/study_action.js";

import SkillSearchBar from "../SkillSearchBar.jsx";

import useSkills from "../../hooks/useSkills.js";

const CreateClassForm = (props) => {
  const { location } = props;
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

    if (location === "Project") {
      dispatch(createProject(requestBody));
    } else if (location === "Study") {
      dispatch(createStudy(requestBody));
    } else {
      alert("location props가 존재하지 않습니다.");
    }

    alert(`${location} 정보가 업데이트 되었습니다.`);
    props.submitAddFunction();
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
      <SubmitContainer>
        <h3>{`${location}`}에 필요한 스킬을 선택해 주세요.</h3>
        <SkillSearchBar selected={true} />
        <SubmitForm onSubmit={onCreateClass}>
          <label>제목</label>
          <input
            type='text'
            name='title'
            value={Title}
            onChange={onChangeValue}
            required
          />
          <label>설명</label>
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
          <button type='submit'>생성하기</button>
        </SubmitForm>
      </SubmitContainer>
    </>
  );
};

CreateClassForm.propTypes = {
  loaction: PropTypes.string,
  formStatus: PropTypes.string,
  submitAddFunction: PropTypes.func,
};

export default CreateClassForm;
