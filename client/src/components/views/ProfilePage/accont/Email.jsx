import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { EmailStyled } from "../styles/styled.js";

const getEmail = (email) => email;

const Email = ({ email }) => {
  const userEmail = useMemo(() => getEmail(email), [email]);

  return (
    <EmailStyled>
      <div>
        <span>계정 이메일</span>
        <p>{userEmail}</p>
      </div>
    </EmailStyled>
  );
};

Email.propTypes = {
  email: PropTypes.string,
};

export default Email;
