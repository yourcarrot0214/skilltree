import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import Tag from "./Tag.jsx";

const TagContainer = () => {
  const { tagList } = useSelector(
    (state) => ({ tagList: state.skill }),
    shallowEqual
  );
  console.log(tagList);

  return (
    <>
      <div>Tag list</div>
      {tagList.map((tag, index) => (
        <Tag tagname={tag} key={index} />
      ))}
    </>
  );
};

export default TagContainer;

/*
  props로 받은 skill 배열을 가지고 Tag 컴포넌트를 생성한다.
  재사용되는 위치에 따라 styled-component로 크기, 위치 등을 스타일링 한다.
*/
