import React from "react";
import { withRouter } from "react-router-dom";

import UserProfileCard from "./accont/UserProfileCard";
import { ProfileMainStyled } from "./styles/styled.js";
import useUserData from "../../../components/hooks/useUserData.js";

const ProfileMain = () => {
  const userData = useUserData();
  return (
    <ProfileMainStyled>
      <>
        <UserProfileCard userData={userData} />
      </>
    </ProfileMainStyled>
  );
};

export default withRouter(ProfileMain);
