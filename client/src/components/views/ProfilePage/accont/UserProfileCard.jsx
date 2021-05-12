import React, { useState } from "react";
import UserName from "./UserName.jsx";
import Email from "./Email.jsx";
import Password from "./Password.jsx";
import Tech from "./Tech.jsx";
import Learn from "./Learn.jsx";
import SkillSearchBar from "../../../common/SkillSearchBar.jsx";
import TagContainer from "./TagContainer.jsx";
import Tag from "./Tag.jsx";
import Modal from "./Modal.jsx";
import { ButtonBox, Button } from "../styles/styled.js";

import { addUserTech, addUserLearn } from "../../../../_actions/user_action.js";

import {
  addTechnitian,
  addLearningUser,
} from "../../../../_actions/skill_action.js";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { UserProfileCardStyled, ContentsContainer } from "../styles/styled.js";

const UserProfileCard = () => {
  const dispatch = useDispatch();

  const [SkillName, setSkillName] = useState("");
  const [ModalOpen, setModalOpen] = useState(false);
  const [SkillId, setSkillId] = useState("");

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
      console.log("tech update");
      addTech(SkillId);
    } else if (e.currentTarget.name === "learn") {
      console.log("learn update");
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
            <TagContainer skills={skills} onClickFunction={onClickFunction} />
          </>
        ) : skillSearchResult ? (
          <Tag
            tagname={skillSearchResult.name}
            key={skillSearchResult.key}
            id={skillSearchResult._id}
            onClickFunction={onClickFunction}
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
