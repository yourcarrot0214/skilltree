import React from "react";
import CreateClassForm from "./class/CreateClassForm.jsx";
import ClassCard from "./class/ClassCard.jsx";
import { ClassCardContainer } from "./styles/styled.js";

const DetailPage = ({ classList }) => {
  return (
    <>
      <h3>Detail Page</h3>
      {/* <SkillSearchBar selected={true} /> */}
      <CreateClassForm />
      <ClassCardContainer>
        {classList.map((post) => (
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
          />
        ))}
      </ClassCardContainer>
    </>
  );
};

export default DetailPage;
