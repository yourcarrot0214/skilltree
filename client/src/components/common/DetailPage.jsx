import React, { useState } from "react";
import PropTypes from "prop-types";
import CreateClassForm from "./class/CreateClassForm.jsx";
import ClassCard from "./class/ClassCard.jsx";
import {
  ClassCardContainer,
  CreateClassButton,
  DetailContainer,
} from "./styles/styled.js";
import Modal from "../views/ProfilePage/accont/Modal.jsx";

const DetailPage = ({ classList, location, userData }) => {
  const [ModalOpen, setModalOpen] = useState(false);

  const onModalPopup = () => {
    setModalOpen(!ModalOpen);
  };

  const interaction = (post, userId) => {
    let userStatus, isVolunteer;

    if (post.leader === userId) userStatus = "운영중";
    else if (post.members.includes(userId)) userStatus = "참가중";
    else if (post.volunteer.includes(userId)) userStatus = "지원중";
    else userStatus = "-";

    if (post.volunteer.includes(userId)) isVolunteer = true;
    else isVolunteer = false;

    return { userStatus, isVolunteer };
  };

  return (
    <DetailContainer className='DetailContainer'>
      {userData.isAuth ? (
        <CreateClassButton
          onClick={onModalPopup}
        >{`${location} 생성하기`}</CreateClassButton>
      ) : null}
      <ClassCardContainer className='ClassCardContainer'>
        {classList.map((post) => {
          let userInteraction = interaction(post, userData._id);

          return (
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
              userStatus={userInteraction.userStatus}
              isVolunteer={userInteraction.isVolunteer}
              userData={userData}
            />
          );
        })}
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

DetailPage.propTypes = {
  location: PropTypes.string,
  classList: PropTypes.array,
  userData: PropTypes.object,
};

export default DetailPage;
