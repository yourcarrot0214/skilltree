import React from "react";
import Styled from "styled-components";
import UserName from "./UserName.jsx";
import Email from "./Email.jsx";
import Password from "./Password.jsx";

const UserProfileCardStyled = Styled.div`
    border: 1px solid black;
    padding: 6px 6px;
    
`;

const UserProfileCard = ({ userData }) => {
  return (
    <UserProfileCardStyled>
      <h3>{userData.name}</h3>
      <Email email={userData.email} />
      <UserName name={userData.name} />
      <Password />
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
