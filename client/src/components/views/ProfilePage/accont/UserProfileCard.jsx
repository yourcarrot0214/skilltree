import React from "react";
import Styled from "styled-components";
import UserName from "./UserName.jsx";
import Email from "./Email.jsx";
import Password from "./Password.jsx";
import Tech from "./Tech.jsx";
import Learn from "./Learn.jsx";
import SkillSearchBar from "../../../common/SkillSearchBar.jsx";

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
  const onUpdateUserSkill = (event) => {
    event.preventDefault();
    console.log(selectedSkills);
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
        <button onClick={onUpdateUserSkill}>Tech에 추가하기</button>
        <button onClick={onUpdateUserSkill}>Learn에 추가하기</button>

        <Tech />
        <Learn />
      </ContentsContainer>
    </UserProfileCardStyled>
  );
};

export default UserProfileCard;

/*
  props
    - name, email, tech, learn
  children
    - <UserName name={name} />
    - <UserEmail email={email} />
    - <ChangePassword />
    - <Tech tech={tech} />
    - <Learn learn={learn} />
*/
