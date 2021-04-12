import React from "react";
import Styled from "styled-components";
import Tag from "./Tag.jsx";

const TagContainerStyled = Styled.div`
  border: 1px solid black;
`;

const TagContainer = (props) => {
  const skills = props.skills;
  const location = props.location;
  const selectedSkills = skills.filter((skill) => skill.selected);
  const unSelectedSkills = skills.filter((skill) => !skill.selected);
  const skillSearchResult = props.skillSearchResult;
  // console.log(skillSearchResult);

  return (
    <>
      <TagContainerStyled>
        {skillSearchResult ? (
          <Tag
            searchResult
            tagname={skillSearchResult.name}
            key={skillSearchResult.key}
            location={location}
            id={skillSearchResult._id}
            selected={skillSearchResult.selected}
          />
        ) : (
          <div>검색 결과가 없습니다.</div>
        )}
        {selectedSkills.map((skill) => (
          <Tag
            tagname={skill.name}
            key={skill._id}
            location={location}
            id={skill._id}
            selected={skill.selected}
          />
        ))}
        {unSelectedSkills.map((skill) => (
          <Tag
            tagname={skill.name}
            key={skill._id}
            location={location}
            id={skill._id}
            selected={skill.selected}
          />
        ))}
      </TagContainerStyled>
    </>
  );
};

export default TagContainer;

/*
  props로 받은 skill 배열을 가지고 Tag 컴포넌트를 생성한다.
  재사용되는 위치에 따라 styled-component로 크기, 위치 등을 스타일링 한다.

  재사용 가능하기 위해서 원본 파일은 변화가 없고 props에 의해서만 다른 결과를 리턴해야 한다.
  TagContainer가 LandingPage에서 호출이 될 때의 skills는 모든 skill들이지만,
  TagContainer가 ProjectDetailPage에서 호출 될 때의 skills는 프로젝트에 해당되는 skill들이다.

  TagContiner의 역할은 부모 컴포넌트에서 props로 받은 skills 배열을 통해 Tag 컴포넌트를 랜더링 하는 것이다.
  onClickFunction은 LandingPage에서는 selected 토글하는 함수로 사용되고,
  ProjectDetailPage에서는 사용되지 않는다.

  props.location에 따라 다른 jsx를 리턴하는 방법
    - location === SkillSearchBar
      > 모든 스킬
      > SkillName과 같은 스킬
      > 클릭하고 나면 selectedSkills, unSelectedSkills
    
    - location === LandingPage
      > selectedSkills, unSelectedSkills

    - location === DetailPage
      > selectedSkills
    - location === InfoPage
      > selectedSkills
  
*/

/*
  <>
      {skillSearchResult ? (
        <Tag
          tagname={skillSearchResult.name}
          key={skillSearchResult.key}
          location={location}
          id={skillSearchResult.id}
          selected={skillSearchResult.selected}
        />
      ) : (
        <TagContainerStyled>
          {selectedSkills.map((skill) => (
            <Tag
              tagname={skill.name}
              key={skill._id}
              location={location}
              id={skill._id}
              selected={skill.selected}
            />
          ))}
          {unSelectedSkills.map((skill) => (
            <Tag
              tagname={skill.name}
              key={skill._id}
              location={location}
              id={skill._id}
              selected={skill.selected}
            />
          ))}
        </TagContainerStyled>
      )}
    </>
*/
