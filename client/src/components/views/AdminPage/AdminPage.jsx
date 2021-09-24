import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import TagContainer from "../../common/TagContainer";
import SkillUploadForm from "./components/SkillUploadForm";
import { AdminContainer } from "./styles/styled";

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
    <AdminContainer>
      <h3>Admin Page</h3>
      <SkillUploadForm
        onSkillUpload={onSkillUpload}
        onChangeValue={onChangeValue}
        SkillName={SkillName}
      />
      <div>
        <h3>Skill 등록 현황</h3>
        <TagContainer skills={SkillList} />
      </div>
    </AdminContainer>
  );
};

export default withRouter(AdminPage);
