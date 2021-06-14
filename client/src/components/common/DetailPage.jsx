import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import CreateClassForm from "./class/CreateClassForm.jsx";
import ClassCard from "./class/ClassCard.jsx";
import { ClassCardContainer, CreateClassButton } from "./styles/styled.js";
import Modal from "../views/ProfilePage/accont/Modal.jsx";

const DetailPage = ({ classList, location }) => {
  const userData = useSelector((state) => state.user.userData, shallowEqual);
  const [ModalOpen, setModalOpen] = useState(false);

  const onModalPopup = () => {
    setModalOpen(!ModalOpen);
  };
  return (
    <>
      <h3>Detail Page</h3>
      {userData.isAuth && (
        <CreateClassButton
          onClick={onModalPopup}
        >{`${location} 생성하기`}</CreateClassButton>
      )}
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
    </>
  );
};

export default DetailPage;
