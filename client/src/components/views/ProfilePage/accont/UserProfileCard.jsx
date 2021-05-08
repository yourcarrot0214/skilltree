import React, { useState, useEffect } from "react";
import UserName from "./UserName.jsx";
import Email from "./Email.jsx";
import Password from "./Password.jsx";
import Tech from "./Tech.jsx";
import Learn from "./Learn.jsx";
import SkillSearchBar from "../../../common/SkillSearchBar.jsx";
import TagContainer from "./TagContainer.jsx";
import Tag from "./Tag.jsx";
import { injectionProps } from "../../../../hoc/withTagContainer.js";
import TestComponent from "../../../../hoc/TestComponent.jsx";

import {
  updateUserTech,
  updateUserLearn,
} from "../../../../_actions/user_action.js";

import {
  getSkillsDB,
  addTechnitian,
  addLearningUser,
} from "../../../../_actions/skill_action.js";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { UserProfileCardStyled, ContentsContainer } from "../styles/styled.js";

const UserProfileCard = () => {
  const dispatch = useDispatch();

  const [SkillName, setSkillName] = useState("");
  const [ModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getSkillsDB());
  }, [dispatch]);

  const userData = useSelector((state) => state.user.userData, shallowEqual);
  const skills = useSelector((state) => state.skills, shallowEqual);

  const skillSearchResult = skills.find(
    (skill) => skill.name === SkillName.toUpperCase()
  );

  const onSkillSearch = (event) => {
    event.preventDefault();
    if (SkillName === "") return;
    if (skillSearchResult === undefined) return;
    console.log("Skill Search Request.");

    setModalOpen(!ModalOpen);
    setSkillName("");
  };

  const addTech = (skillId) => {
    const check = userData.tech.find((skill) => skill._id === skillId);
    if (check !== undefined) {
      return alert("이미 Tech에 등록된 스킬입니다.");
    } else {
      const requestBody = skills.find((skill) => skill._id === skillId);
      dispatch(addTechnitian(requestBody));
      dispatch(updateUserTech(requestBody));
      alert("스킬이 등록되었습니다.");
    }
  };

  const addLearn = (skillId) => {
    const check = userData.learn.find((skill) => skill._id === skillId);
    if (check !== undefined) {
      return alert("이미 learn에 등록된 스킬입니다.");
    } else {
      const requestBody = skills.find((skill) => skill._id === skillId);
      dispatch(addLearningUser(requestBody));
      dispatch(updateUserLearn(requestBody));
      alert("스킬이 등록되었습니다.");
    }
  };

  const withTest = injectionProps({
    skills,
    setSkillName,
    addTech,
    addLearn,
  });

  return (
    <UserProfileCardStyled>
      {userData && (
        <>
          <h3>계정관리</h3>
          <ContentsContainer>
            <Email email={userData.email} />
            <UserName name={userData.name} />
            <Password />
          </ContentsContainer>
        </>
      )}
      <h3>스킬관리</h3>
      <ContentsContainer>
        <SkillSearchBar
          SkillName={SkillName}
          setSkillName={setSkillName}
          onSkillSearch={onSkillSearch}
        />
        {SkillName === "" ? (
          <>
            <TagContainer
              skills={skills}
              setSkillName={setSkillName}
              addTech={addTech}
              addLearn={addLearn}
            />
          </>
        ) : skillSearchResult ? (
          <Tag
            tagname={skillSearchResult.name}
            key={skillSearchResult.key}
            id={skillSearchResult._id}
            setSkillName={setSkillName}
            addTech={addTech}
            addLearn={addLearn}
          />
        ) : (
          <div>검색 결과가 없습니다.</div>
        )}

        {userData && (
          <>
            <Tech userData={userData} />
            <Learn userData={userData} />
          </>
        )}
      </ContentsContainer>
    </UserProfileCardStyled>
  );
};

export default UserProfileCard;

/*
  issue A. 중복 체크
    - case 1. user tech에 저장된 스킬과 등록하려는 스킬이 같은 경우(중복)
      > 중복 체크 타이밍은 request 요청 전
      > 로그인시 DB에서 받아온 user state 정보와 selectedSkills 정보를 비교
    
  answer A. 중복된 정보 제거
    - SkillSearchBar에 props로 전달되는 unSelectedSkills 정보 수정
      > props 전달 전 userData.tech, userData.learn에 등록된 스킬정보 제거
      > selectedSkills로 선택된 스킬을 넣기 전 tech, learn에 있는지 검증
*/
