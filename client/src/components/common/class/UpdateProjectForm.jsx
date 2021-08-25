import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SubmitContainer, SubmitForm } from "../styles/styled.js";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import useSkills from "../../hooks/useSkills.js";

import SearchBar from "../SearchBar";
import TagContainer from "../TagContainer";
import Tag from "../Tag";
import useSearchResult from "../../hooks/useSearchResult";
import { selectedSkill, selectedReset } from "../../../_actions/skill_action";
import { updateProject } from "../../../_actions/project_action";

const UpdateProjectForm = (props) => {
  const { match } = props;
  const projectInfo = useSelector(
    (state) => state.project.find((object) => object._id === match.params.id),
    shallowEqual
  );
  const { title, description, personnel, status } = projectInfo;
  const dispatch = useDispatch();
  const [Title, setTitle] = useState(title);
  const [Description, setDescription] = useState(description);
  const [Personnel, setPersonnel] = useState(personnel);
  const [Status, setStatus] = useState(status);
  const [skillName, setSkillName] = useState("");

  const userData = useSelector((state) => state.user.userData, shallowEqual);
  const skillState = useSkills();
  const selectedSkills = skillState.selectedSkills();
  const unSelectedSkills = skillState.unSelectedSkills();
  const skillSearchResult = useSearchResult(skillName);

  const onUpdateClass = (event) => {
    event.preventDefault();

    const requestBody = {
      id: match.params.id,
      title: Title,
      description: Description,
      skills: selectedSkills,
      personnel: Personnel,
      leader: userData._id,
      status: Status,
    };

    const check = window.confirm("프로젝트 정보를 업데이트 할까요?");
    if (check) {
      dispatch(updateProject(requestBody));
      alert(`프로젝트 정보가 업데이트 되었습니다.`);
      props.history.goBack();
    } else {
      return;
    }
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

  const onCancle = () => {
    const check = window.confirm("업데이트 작업을 취소할까요?");

    if (check) props.history.goBack();
    else return;
  };

  useEffect(() => {
    projectInfo.skills.forEach((skill) => dispatch(selectedSkill(skill._id)));

    return () => {
      dispatch(selectedReset());
    };
  }, [dispatch, projectInfo.skills]);

  return (
    <>
      <SubmitContainer>
        <h3>프로젝트에 필요한 스킬을 선택해 주세요.</h3>
        <button className='goBack' onClick={onCancle}>
          취소
        </button>
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
          <label>프로젝트 제목</label>
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

UpdateProjectForm.propTypes = {
  match: PropTypes.object,
};

export default UpdateProjectForm;
