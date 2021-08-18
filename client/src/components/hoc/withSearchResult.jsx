import React from "react";
import PrintMessage from "../views/ProfilePage/accont/PrintMessage";

// 1. SearchBar.jsx 컴포넌트를 인자로 받는다.
// 2. 필요한 프로퍼티를 전달하여 컴포넌트를 반환한다.

export function withSearchResult(WrappedComponent) {
  function WithResultTag({ skillSearchResult, ...otherProps }) {
    if (typeof skillSearchResult === "object") {
      return <WrappedComponent {...otherProps} />;
    } else {
      return (
        <div style={{ minHeight: "180px" }}>
          <PrintMessage message='검색 결과가 없습니다.' />
        </div>
      );
    }
  }

  return WithResultTag;
}
