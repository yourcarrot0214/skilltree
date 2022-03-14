import React, { useState } from "react";
import PropTypes from "prop-types";
import { LearnStyled, ButtonBox, Button } from "../styles/styled.js";
import Modal from "./Modal.jsx";
import TagContainer from "../../../common/TagContainer.jsx";
import { useDispatch } from "react-redux";
import { deleteLearningUser } from "../../../../_actions/skill_action.js";
import { deleteUserLearn } from "../../../../_actions/user_action.js";

const Learn = ({ userData }) => {
  const dispatch = useDispatch();
  const [ModalOpen, setModalOpen] = useState(false);
  const [skillId, setSkillId] = useState("");

  const onClickFunction = (e) => {
    setSkillId(e.target.id);
    setModalOpen(!ModalOpen);
  };

  const onDeleteSkill = (e) => {
    e.preventDefault();
    dispatch(deleteLearningUser({ id: skillId }));
    dispatch(deleteUserLearn(skillId));
    alert("해당 스킬이 Learn 목록에서 삭제되었습니다.");
    setModalOpen(!ModalOpen);
  };

  return (
    <>
      <LearnStyled>
        <div>
          <span>Learn</span>
          <p>배우고 싶은 스킬들을 관리합니다.</p>
        </div>
        <Modal
          openModal={ModalOpen}
          onClickFunction={onClickFunction}
          header="Learn 스킬을 관리합니다."
        ></Modal>
      </LearnStyled>
      <TagContainer
        skills={userData.learn}
        onClickFunction={onClickFunction}
        selected={true}
      />
      <Modal
        onClickFunction={onClickFunction}
        header="스킬수정하기"
        openModal={ModalOpen}
      >
        <h3>다룰 수 있는 스킬에서 삭제할까요?</h3>
        <ButtonBox>
          <Button type="submit" name="tech" onClick={onDeleteSkill}>
            삭제하기
          </Button>
        </ButtonBox>
      </Modal>
    </>
  );
};

Learn.propTypes = {
  userData: PropTypes.object,
};

export default React.memo(Learn);
