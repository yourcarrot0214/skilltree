import React from "react";
import { withRouter } from "react-router-dom";

import UserProfileCard from "./accont/UserProfileCard";
import { ProfileMainStyled } from "./styles/styled.js";

const ProfileMain = () => {
  return (
    <ProfileMainStyled>
      <>
        <UserProfileCard />
      </>
    </ProfileMainStyled>
  );
};

export default withRouter(ProfileMain);
