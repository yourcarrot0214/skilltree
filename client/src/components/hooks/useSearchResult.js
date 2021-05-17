import { useState, useEffect } from "react";
import useSkills from "./useSkills.js";

const useSearchResult = (skillName) => {
  const skills = useSkills();
  const [searchResult, setSearchResult] = useState();

  // test code

  useEffect(() => {
    function skillSearchResult(skillName) {
      setSearchResult(
        skills.find((skill) => skill.name === skillName.toUpperCase())
      );
    }
    skillSearchResult(skillName);
  });

  return searchResult;
};

export default useSearchResult;

/*
  skill search에 관련된 로직들을 모두 포함한 custom hook
  skills도 custom hook로 변경.
*/
