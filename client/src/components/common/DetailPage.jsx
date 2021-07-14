import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import CreateClassForm from "./class/CreateClassForm.jsx";
import ClassCard from "./class/ClassCard.jsx";
import {
  ClassCardContainer,
  CreateClassButton,
  DetailContainer,
} from "./styles/styled.js";
import Modal from "../views/ProfilePage/accont/Modal.jsx";

const DetailPage = ({ classList, location }) => {
  const userData = useSelector((state) => state.user.userData, shallowEqual);
  const [ModalOpen, setModalOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(userData.isAuth);

  const onModalPopup = () => {
    setModalOpen(!ModalOpen);
  };
  return (
    <DetailContainer>
      {isAuth ? (
        <CreateClassButton
          onClick={onModalPopup}
        >{`${location} 생성하기`}</CreateClassButton>
      ) : null}
      <ClassCardContainer>
        {classList.map((post) => (
          <ClassCard
            key={post._id}
            id={post._id}
            title={post.title}
            description={post.description}
            skills={post.skills}
            leader={post.leader}
            personnel={post.personnel}
            members={post.members}
            status={post.status}
            location={location}
            volunteer={post.volunteer}
          />
        ))}
      </ClassCardContainer>
      <Modal
        openModal={ModalOpen}
        onClickFunction={onModalPopup}
        header={`${location} 생성하기`}
      >
        <CreateClassForm
          location={location}
          formStatus='create'
          submitAddFunction={onModalPopup}
        />
      </Modal>
    </DetailContainer>
  );
};

export default DetailPage;
