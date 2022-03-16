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
import { updateStudy } from "../../../_actions/study_action";

const UpdateStudyForm = (props) => {
  const { match } = props;
  const studyInfo = useSelector(
    (state) => state.study.find((object) => object._id === match.params.id),
    shallowEqual
  );
  const { title, description, personnel, status } = studyInfo;
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

    const check = window.confirm("스터디 정보를 업데이트 할까요?");
    if (check) {
      dispatch(updateStudy(studyInfo._id, requestBody));
      alert(`스터디 정보가 업데이트 되었습니다.`);
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
    studyInfo.skills.forEach((skill) => dispatch(selectedSkill(skill._id)));

    return () => {
      dispatch(selectedReset());
    };
  }, [dispatch, studyInfo.skills]);

  return (
    <>
      <SubmitContainer>
        <h3>스터디에 필요한 스킬을 선택해 주세요.</h3>
        <button className="goBack" onClick={onCancle}>
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
          <label>스터디 제목</label>
          <input
            type="text"
            name="title"
            value={Title}
            onChange={onChangeValue}
            required
          />
          <label>스터디 설명</label>
          <textarea
            name="description"
            value={Description}
            onChange={onChangeValue}
            required
          />
          <label>모집 인원 수</label>
          <input
            type="number"
            name="personnel"
            value={Personnel}
            onChange={onChangeValue}
            min="2"
            max="10"
            required
          />
          <label>모집중</label>
          <input
            type="radio"
            name="status"
            value={false}
            onChange={onChangeValue}
          />
          <label>진행중</label>
          <input
            type="radio"
            name="status"
            value={true}
            onChange={onChangeValue}
          />
          <button type="submit">업데이트</button>
        </SubmitForm>
      </SubmitContainer>
    </>
  );
};

UpdateStudyForm.propTypes = {
  match: PropTypes.object,
};

export default UpdateStudyForm;
