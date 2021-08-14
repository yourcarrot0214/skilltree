import React, { useState } from "react";
import PropTypes from "prop-types";
import { SubmitContainer, SubmitForm } from "../styles/styled.js";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import useSkills from "../../hooks/useSkills.js";

import SkillSearchBar from "../SkillSearchBar.jsx";

const UpdateClassForm = (props) => {
  const { location } = props;
  const dispatch = useDispatch();
  const [Title, setTitle] = useState(props.title);
  const [Description, setDescription] = useState(props.description);
  const [Personnel, setPersonnel] = useState(props.personnel);
  const [Status, setStatus] = useState(props.status);

  const userData = useSelector((state) => state.user.userData, shallowEqual);
  const skills = useSkills();
  const selectedSkills = skills.selectedSkills();

  const onUpdateClass = (event) => {
    event.preventDefault();

    const requestBody = {
      id: props.id,
      title: Title,
      description: Description,
      skills: selectedSkills,
      personnel: Personnel,
      leader: userData._id,
      status: Status,
    };

    dispatch(props.updateDispatch(requestBody));

    alert(`${location} 정보가 업데이트 되었습니다.`);
    props.submitAddFunction();
  };

  const onChangeValue = (event) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    if (name === "title") setTitle(value);
    else if (name === "description") setDescription(value);
    else if (name === "personnel") setPersonnel(Number(value));
    else if (name === "status") setStatus(value);
  };

  return (
    <>
      <SubmitContainer>
        <h3>{location}에 필요한 스킬을 선택해 주세요.</h3>
        <SkillSearchBar selected={true} />
        <SubmitForm onSubmit={onUpdateClass}>
          <label>{location} 제목</label>
          <input
            type='text'
            name='title'
            value={Title}
            onChange={onChangeValue}
            required
          />
          <label>{location} 설명</label>
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
          <label>모집중</label>
          <input
            type='radio'
            name='status'
            value={false}
            onChange={onChangeValue}
          />
          <label>진행중</label>
          <input
            type='radio'
            name='status'
            value={true}
            onChange={onChangeValue}
          />
          <button type='submit'>업데이트</button>
        </SubmitForm>
      </SubmitContainer>
    </>
  );
};

UpdateClassForm.propTypes = {
  location: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  personnel: PropTypes.number,
  submitAddFunction: PropTypes.func,
  id: PropTypes.string,
  status: PropTypes.bool,
};

export default UpdateClassForm;
