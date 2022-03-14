import React, { useState } from "react";
import { TechStyled, ButtonBox, Button } from "../styles/styled.js";
import TagContainer from "../../../common/TagContainer.jsx";
import Modal from "./Modal.jsx";
import { useDispatch } from "react-redux";
import { deleteTechnitian } from "../../../../_actions/skill_action.js";
import { deleteUserTech } from "../../../../_actions/user_action.js";

const Tech = ({ userData }) => {
  const dispatch = useDispatch();
  const [ModalOpen, setModalOpen] = useState(false);
  const [SkillId, setSkillId] = useState("");

  const onClickFunction = (e) => {
    setSkillId(e.target.id);
    setModalOpen(!ModalOpen);
  };

  const onDeleteSkill = (e) => {
    e.preventDefault();
    dispatch(deleteTechnitian({ id: SkillId }));
    dispatch(deleteUserTech(SkillId));
    alert("해당 스킬이 Tech 목록에서 삭제되었습니다.");
    setModalOpen(!ModalOpen);
  };

  return (
    <>
      <TechStyled>
        <div>
          <span>Tech</span>
          <p>다룰 수 있는 스킬들을 관리합니다.</p>
        </div>
      </TechStyled>
      <TagContainer
        skills={userData.tech}
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

export default React.memo(Tech);
