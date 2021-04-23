import React from "react";
import Styled from "styled-components";
import UserName from "./UserName.jsx";
import Email from "./Email.jsx";
import Password from "./Password.jsx";
import Tech from "./Tech.jsx";
import Learn from "./Learn.jsx";
import SkillSearchBar from "../../../common/SkillSearchBar.jsx";
import { useDispatch } from "react-redux";
import { updateUserTech } from "../../../../_actions/user_action.js";
import { addTechnitian } from "../../../../_actions/skill_action.js";

import axios from "axios";

const UserProfileCardStyled = Styled.div`
  padding-top: 6px;
  padding-right: 2rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
  background-color: #212529;
  margin: 1rem 1rem;
  border-radius: 6px;
`;

const ContentsContainer = Styled.div`
  background-color: #343a40;
  border-radius: 6px;
  padding: 6px 6px;
  margin-bottom: 2rem;
`;

const UserProfileCard = ({
  userData,
  selectedSkills,
  unSelectedSkills,
  skillSearchResult,
  setSkillName,
  SkillName,
  skillDispatch,
  location,
}) => {
  const dispatch = useDispatch();

  const onUpdateUserSkill = (event) => {
    event.preventDefault();
    const buttonName = event.currentTarget.name;
    if (selectedSkills.length === 0)
      return console.log("선택된 스킬이 없습니다.");

    console.log(userData.tech);
    console.log(selectedSkills);
    // set을 통한 중복 정보 제거
    const set = new Set(selectedSkills, userData.tech);
    const requestBody = [...set];
    console.log(requestBody);

    if (buttonName === "tech") {
      // update tech
      console.log("tech update");
      dispatch(updateUserTech(requestBody));
      // requestBody.map((skill) => dispatch(addTechnitian(skill)));
    } else if (buttonName === "learn") {
      // update learn
      console.log("learn update");
    }
  };

  return (
    <UserProfileCardStyled>
      <h3>{userData.name}</h3>
      <ContentsContainer>
        <Email email={userData.email} />
        <UserName name={userData.name} />
        <Password />
      </ContentsContainer>
      <h3>스킬관리</h3>
      <ContentsContainer>
        <SkillSearchBar
          selectedSkills={selectedSkills}
          unSelectedSkills={unSelectedSkills}
          skillSearchResult={skillSearchResult}
          location={location}
          skillDispatch={skillDispatch}
          SkillName={SkillName}
          setSkillName={setSkillName}
        />
        <div>선택된 스킬을</div>
        <button onClick={onUpdateUserSkill} name='tech'>
          Tech에 추가하기
        </button>
        <button onClick={onUpdateUserSkill} name='learn'>
          Learn에 추가하기
        </button>

        <Tech />
        <Learn />
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
