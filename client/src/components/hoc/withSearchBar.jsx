import React from "react";

// 1. SearchBar.jsx 컴포넌트를 인자로 받는다.
// 2. 필요한 프로퍼티를 전달하여 컴포넌트를 반환한다.

export function withSearchBar(WrappedComponent) {
  function WithSearchFunc({ onClickFunction, onSkillSearch, ...otherProps }) {
    return (
      <WrappedComponent
        onClickFunction={onClickFunction}
        onSkillSearch={onSkillSearch}
        {...otherProps}
      />
    );
  }

  return WithSearchFunc;
}
