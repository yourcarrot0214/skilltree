import React, { useState } from "react";
import PropTypes from "prop-types";
import { SubmitContainer, SubmitForm } from "../styles/styled.js";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { selectedSkill } from "../../../_actions/skill_action";
import { updateProject } from "../../../_actions/project_action";
import { updateStudy } from "../../../_actions/study_action";
import useSkills from "../../hooks/useSkills.js";

import TagContainer from "../../common/TagContainer";
import Tag from "../../common/Tag";
import SearchBar from "../SearchBar";
import useSearchResult from "../../hooks/useSearchResult";

const UpdateClassForm = (props) => {
  const dispatch = useDispatch();
  const { location } = props;
  const [Title, setTitle] = useState(props.title);
  const [Description, setDescription] = useState(props.description);
  const [Personnel, setPersonnel] = useState(props.personnel);
  const [Status, setStatus] = useState(props.status);
  const [skillName, setSkillName] = useState("");

  const userData = useSelector((state) => state.user.userData, shallowEqual);
  const skills = useSkills();
  const selectedSkills = skills.selectedSkills();
  const unSelectedSkills = skills.unSelectedSkills();
  const skillSearchResult = useSearchResult(skillName);

  const onUpdateClass = (event) => {
    console.log("UpdateClassForm :: onUpdateClass");
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
    else if (name === "skill-name") setSkillName(value);
  };

  const onSkillSearch = (e) => {
    console.log("UpdateClassForm :: onSkillSearch");
    e.preventDefault();
    if (skillName === "") return;
    if (skillSearchResult === undefined) return;
    dispatch(selectedSkill(skillSearchResult._id));
    setSkillName("");
  };

  const onClickFunction = (e) => {
    console.log("UpdateClassForm onClickFunction.");
    dispatch(selectedSkill(e.target.id));
    setSkillName("");
  };

  return (
    <>
      <SubmitContainer>
        <h3>{location}에 필요한 스킬을 선택해 주세요.</h3>
        <SearchBar
          onChangeValue={onChangeValue}
          onSkillSearch={onSkillSearch}
          skillName={skillName}
        />
        {skillSearchResult ? (
          <Tag
            skillInfo={skillSearchResult}
            key={skillSearchResult.key}
            onClickFunction={onClickFunction}
            selected={skillSearchResult.selected}
          />
        ) : null}
        {/* 검색 결과 출력 */}
        <TagContainer
          selected
          skills={selectedSkills}
          onClickFunction={onClickFunction}
        />
        {/* 스킬 목록 출력 */}
        <TagContainer
          skills={unSelectedSkills}
          onClickFunction={onClickFunction}
        />
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
            min='1'
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
