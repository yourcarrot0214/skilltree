import React, { useState } from "react";
import UserName from "./UserName.jsx";
import Email from "./Email.jsx";
import Password from "./Password.jsx";
import Tech from "./Tech.jsx";
import Learn from "./Learn.jsx";
import Project from "./Project.jsx";
import Study from "./Study.jsx";
import SearchBar from "../../../common/SearchBar";
import Modal from "./Modal.jsx";
import TagContainer from "../../../common/TagContainer";
import Tag from "../../../common/Tag";
import { ButtonBox, Button, ClassWrapper } from "../styles/styled.js";
import { addUserTech, addUserLearn } from "../../../../_actions/user_action.js";

import {
  addTechnitian,
  addLearningUser,
} from "../../../../_actions/skill_action.js";
import { useDispatch } from "react-redux";

import { UserProfileCardStyled, ContentsContainer } from "../styles/styled.js";

import useSkills from "../../../hooks/useSkills.js";

const UserProfileCard = ({ userData }) => {
  const dispatch = useDispatch();

  const [SkillName, setSkillName] = useState("");
  const [ModalOpen, setModalOpen] = useState(false);
  const [SkillId, setSkillId] = useState("");

  const skills = useSkills();

  const skillSearchResult = skills.find(
    (skill) => skill.name === SkillName.toUpperCase()
  );

  const onSkillSearch = (event) => {
    event.preventDefault();
    if (SkillName === "") return;
    if (skillSearchResult === undefined) return;
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
      dispatch(addUserTech(requestBody));
      setSkillName("");
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
      dispatch(addUserLearn(requestBody));
      setSkillName("");
      alert("스킬이 등록되었습니다.");
    }
  };

  const onModalPopup = () => {
    setModalOpen(!ModalOpen);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (e.currentTarget.name === "tech") {
      addTech(SkillId);
    } else if (e.currentTarget.name === "learn") {
      addLearn(SkillId);
    }
  };

  const onClickFunction = (e) => {
    setSkillId(e.target.id);
    setModalOpen(!ModalOpen);
  };

  const onChangeValue = (e) => {
    setSkillName(e.currentTarget.value);
  };

  return (
    <UserProfileCardStyled>
      {userData && (
        <>
          <h2>계정관리</h2>
          <ContentsContainer>
            <Email email={userData.email} />
            <UserName name={userData.name} />
            <Password />
          </ContentsContainer>
        </>
      )}
      <h2>스킬관리</h2>
      <ContentsContainer>
        <SearchBar
          onChangeValue={onChangeValue}
          onSkillSearch={onSkillSearch}
          skillName={SkillName}
        />
        {skillSearchResult ? (
          <Tag
            skillInfo={skillSearchResult}
            key={skillSearchResult.key}
            onClickFunction={onClickFunction}
            selected={skillSearchResult.selected}
          />
        ) : null}
        <TagContainer skills={skills} onClickFunction={onClickFunction} />

        {userData && (
          <ClassWrapper>
            <Tech userData={userData} />
            <Learn userData={userData} />
          </ClassWrapper>
        )}
        <Modal
          onClickFunction={onModalPopup}
          header='스킬등록하기'
          openModal={ModalOpen}
        >
          <ButtonBox>
            <Button type='submit' name='tech' onClick={onSubmit}>
              Tech에 추가하기
            </Button>
            <Button type='submit' name='learn' onClick={onSubmit}>
              Learn에 추가하기
            </Button>
          </ButtonBox>
        </Modal>
      </ContentsContainer>
      <h2>프로젝트 관리</h2>
      <ContentsContainer>
        <Project userData={userData} />
      </ContentsContainer>
      <h2>스터디 관리</h2>
      <ContentsContainer>
        <Study userData={userData} />
      </ContentsContainer>
    </UserProfileCardStyled>
  );
};

export default UserProfileCard;
