import React, { useState } from "react";
import PropTypes from "prop-types";
import { SubmitContainer, SubmitForm } from "../styles/styled.js";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { createProject } from "../../../_actions/project_action.js";
import { createStudy } from "../../../_actions/study_action.js";
import { selectedSkill } from "../../../_actions/skill_action";

import useSkills from "../../hooks/useSkills.js";

import TagContainer from "../../common/TagContainer";
import Tag from "../../common/Tag";
import SearchBar from "../../common/SearchBar";
import useSearchResult from "../../hooks/useSearchResult";

const CreateClassForm = (props) => {
  const { location } = props;
  const dispatch = useDispatch();
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Personnel, setPersonnel] = useState(0);
  const [skillName, setSkillName] = useState("");

  const userData = useSelector((state) => state.user.userData, shallowEqual);
  const skills = useSkills();
  const selectedSkills = skills.selectedSkills();
  const unSelectedSkills = skills.unSelectedSkills();
  const skillSearchResult = useSearchResult(skillName);

  const onCreateClass = (event) => {
    event.preventDefault();

    const requestBody = {
      title: Title,
      description: Description,
      skills: selectedSkills,
      personnel: Personnel,
      leader: userData._id,
    };

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
    else if (name === "skill-name") setSkillName(value);
  };

  const onSkillSearch = (e) => {
    e.preventDefault();
    if (skillName === "") return;
    if (skillSearchResult === undefined) return;

    dispatch(selectedSkill(skillSearchResult._id));
    setSkillName("");
  };

  const onClickFunction = (e) => {
    dispatch(selectedSkill(e.target.id));
    setSkillName("");
  };

  return (
    <>
      <SubmitContainer>
        <h3>{`${location}`}에 필요한 스킬을 선택해 주세요.</h3>
        {/* <SkillSearchBar selected={true} /> */}
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
            min='1'
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
