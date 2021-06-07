import React from "react";
import CreateClassForm from "./CreateClassForm.jsx";
import ClassCard from "./ClassCard.jsx";
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
            membersLength={post.members.length}
            status={post.status}
          />
        ))}
      </ClassCardContainer>
    </>
  );
};

export default DetailPage;

/*
  props => class(project, study)
  출력
    - 검색영역 : SkillSearchBar
    - 썸네일 영역 : classlist.map(class => <ClassCard />)
*/
