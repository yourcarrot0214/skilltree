import React, { useState } from "react";
import UserName from "./UserName.jsx";
import Email from "./Email.jsx";
import Password from "./Password.jsx";
import Tech from "./Tech.jsx";
import Learn from "./Learn.jsx";
import Project from "./Project.jsx";
import Study from "./Study.jsx";
import SkillSearchBar from "../../../common/SkillSearchBar.jsx";
import Modal from "./Modal.jsx";
import { ButtonBox, Button, ClassWrapper } from "../styles/styled.js";

import { addUserTech, addUserLearn } from "../../../../_actions/user_action.js";

import {
  addTechnitian,
  addLearningUser,
  selectedSkill,
} from "../../../../_actions/skill_action.js";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { UserProfileCardStyled, ContentsContainer } from "../styles/styled.js";

import useSkills from "../../../hooks/useSkills.js";

const UserProfileCard = () => {
  const dispatch = useDispatch();

  const [SkillName, setSkillName] = useState("");
  const [ModalOpen, setModalOpen] = useState(false);
  const [SkillId, setSkillId] = useState("");

  const userData = useSelector((state) => state.user.userData, shallowEqual);
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
      dispatch(selectedSkill(skillId));
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
      dispatch(selectedSkill(skillId));
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
        <SkillSearchBar
          onSkillSearch={onSkillSearch}
          onClickFunction={onClickFunction}
        />

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
