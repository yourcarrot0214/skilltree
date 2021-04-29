import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import UserName from "./UserName.jsx";
import Email from "./Email.jsx";
import Password from "./Password.jsx";
import Tech from "./Tech.jsx";
import Learn from "./Learn.jsx";
import SkillSearchBar from "../../../common/SkillSearchBar.jsx";
import TagContainer from "./TagContainer.jsx";
import Tag from "./Tag.jsx";
import Modal from "./Modal.jsx";

import {
  updateUserTech,
  updateUserLearn,
} from "../../../../_actions/user_action.js";

import {
  getSkillsDB,
  selectedSkill,
  addTechnitian,
  addLearningUser,
} from "../../../../_actions/skill_action.js";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

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

const ButtonBox = Styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
`;

const Button = Styled.button`
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
    min-width: 60px;
    margin: 0 auto;
    font-weight: bold;
    border: none;
`;

const UserProfileCard = () => {
  const dispatch = useDispatch();

  const [SkillName, setSkillName] = useState("");
  const [SelectedSkillId, setSelectedSkillId] = useState("");
  const [ModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getSkillsDB());
  }, [dispatch]);

  const userData = useSelector((state) => state.user.userData, shallowEqual);
  const skills = useSelector((state) => state.skills, shallowEqual);

  const skillSearchResult = skills.find(
    (skill) => skill.name === SkillName.toUpperCase()
  );
  const skillDispatch = (id) => dispatch(selectedSkill(id));

  const onSkillSearch = (event) => {
    event.preventDefault();
    if (SkillName === "") return;
    if (skillSearchResult === undefined) return;
    console.log("Skill Search Request.");
    console.log(skillSearchResult._id);
    setSelectedSkillId(skillSearchResult._id);
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

  const onClickFunction = () => {
    setModalOpen(!ModalOpen);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(SelectedSkillId);

    if (event.currentTarget.name === "tech") {
      console.log("tech update");
      addTech(SelectedSkillId);
      setSkillName("");
    } else if (event.currentTarget.name === "learn") {
      console.log("learn update");
      addLearn(SelectedSkillId);
      setSkillName("");
    }
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
            <TagContainer
              skillsList={skills}
              setSkillName={setSkillName}
              setSelectedSkillId={setSelectedSkillId}
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
            setSelectedSkillId={setSelectedSkillId}
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
      <Modal
        onClickFunction={onClickFunction}
        header='스킬등록하기'
        openModal={ModalOpen}
      >
        <ButtonBox>
          <Button type='submit' name='tech' onClick={onSubmit}>
            Tech에 추가하기
          </Button>
          <Button type='submit' name='tech' onClick={onSubmit}>
            Learn에 추가하기
          </Button>
        </ButtonBox>
      </Modal>
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
