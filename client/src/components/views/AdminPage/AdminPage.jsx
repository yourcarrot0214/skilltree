import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import SkillsList from "./SkillsList.jsx";

const AdminPage = () => {
  useEffect(() => {
    axios
      .get("/api/skills/list")
      .then((response) => setSkillList(response.data.docs));
  }, []);

  const [SkillList, setSkillList] = useState([]);
  const [SkillName, setSkillName] = useState("");

  const onChangeValue = (e) => {
    setSkillName(e.currentTarget.value.toUpperCase());
  };
  const onSkillUpload = (event) => {
    event.preventDefault();

    if (SkillName === "") return;

    let requestBody = {
      name: SkillName,
      technitianUsers: [],
      learningUsers: [],
    };

    const check = window.confirm("스킬을 등록하겠습니까?");

    if (check) {
      axios
        .post("/api/skills/upload", requestBody)
        .then((response) => console.log(response.data.skillInfo));
    } else {
      alert("스킬 등록을 취소합니다.");
    }

    setSkillName("");
  };
  return (
    <>
      <h3>Admin Page</h3>
      <div>
        <form onSubmit={onSkillUpload}>
          <label>Skill Name</label>
          <input
            type='text'
            name='skill-name'
            value={SkillName}
            onChange={onChangeValue}
          />
          <button type='submit'>Skill Upload</button>
        </form>
      </div>
      <div>
        <h3>Skill 등록 현황</h3>
        {SkillList.map((skill) => (
          <SkillsList
            key={skill._id}
            name={skill.name}
            technitianUsers={skill.technitianUsers.length}
            learningUsers={skill.learningUsers.length}
          />
        ))}
      </div>
    </>
  );
};

export default withRouter(AdminPage);
