import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getSkillsDB, selectedSkill } from "../../../_actions/skill_action.js";

import UserProfileCard from "./accont/UserProfileCard";

const ProfileMainStyled = Styled.div`
  background-color: #343a40;
  color: white;
  padding-bottom: 2rem;
`;

const ProfileMain = () => {
  const dispatch = useDispatch();
  const [SkillName, setSkillName] = useState("");
  const location = "ProfileMain";

  useEffect(() => {
    dispatch(getSkillsDB());
  }, [dispatch]);

  const userData = useSelector((state) => state.user.userData, shallowEqual);
  const skills = useSelector((state) => state.skills, shallowEqual);
  const selectedSkills = skills.filter((skill) => skill.selected);
  const unSelectedSkills = skills.filter((skill) => !skill.selected);
  const skillSearchResult = skills.find(
    (skill) => skill.name === SkillName.toUpperCase()
  );
  const skillDispatch = (id) => dispatch(selectedSkill(id));

  const onSkillSearch = (event) => {
    event.preventDefault();
    if (SkillName === "") return;
    if (skillSearchResult === undefined) return;
    console.log("Skill Search Request.");
    skillDispatch(skillSearchResult._id);
    setSkillName("");
  };

  return (
    <ProfileMainStyled>
      {userData && (
        <>
          <h3>Profile Main Page</h3>
          <UserProfileCard
            userData={userData}
            skills={skills}
            selectedSkills={selectedSkills}
            unSelectedSkills={unSelectedSkills}
            skillSearchResult={skillSearchResult}
            location={location}
            skillDispatch={skillDispatch}
            SkillName={SkillName}
            setSkillName={setSkillName}
            onSkillSearch={onSkillSearch}
          />
        </>
      )}
    </ProfileMainStyled>
  );
};

export default withRouter(ProfileMain);

/*
  기능 구현

  1. 회원 정보 출력
    - 가입시 입력받은 name, email 정보를 출력한다.
  2. 회원 정보 수정
    - name, password를 수정 기능
  3. 스킬 등록 기능
    - 구현 가능한 스킬.
    - 배우고 싶은 스킬.
    - DB user model에 업데이트
  4. 참가중인 프로젝트 리스트
    - 현재 참가중인 프로젝트 리스트 출력
    - 리스트의 각 프로젝트 항목은 ProjectMain에서 제공하는 프로젝트 상세 페이지와 연결
  5. 참가중인 스터디 리스트
    - 현재 참가중인 스터디 리스트 출력
    - 리스트의 각 스터디 항목은 StudyMain에서 제공하는 프로젝트 상세 페이지와 연결
*/

/*
  스킬 등록 기능
    - 스킬 등록은 DB에, 이후 redux state
      > server/index.js router
      > user_action, user_reducer
*/
