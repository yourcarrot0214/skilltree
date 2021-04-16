import React from "react";
import Styled from "styled-components";
import UserName from "./UserName.jsx";
import Email from "./Email.jsx";
import Password from "./Password.jsx";

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
`;

const UserProfileCard = ({ userData }) => {
  return (
    <UserProfileCardStyled>
      <h3>{userData.name}</h3>
      <ContentsContainer>
        <Email email={userData.email} />
        <UserName name={userData.name} />
        <Password />
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
