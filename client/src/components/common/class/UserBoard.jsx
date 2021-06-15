import React from "react";

const UserBoard = (props) => {
  console.log(props);
  return (
    <>
      <h3>User Board</h3>
      {props.isVolunteer ? (
        <button>참가신청취소</button>
      ) : (
        <button>참가신청하기</button>
      )}
    </>
  );
};

export default UserBoard;
