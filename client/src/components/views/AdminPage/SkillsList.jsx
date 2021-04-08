import React from "react";

const SkillsList = (props) => {
  return (
    <>
      <span style={{ marginRight: "6px" }}>{props.name}</span>
      {/* <p>{`Technitian Users : ${props.technitianUsers}`}</p>
      <p>{`Learning Users : ${props.learningUsers}`}</p> */}
    </>
  );
};

export default SkillsList;
