import { useState, useEffect } from "react";
import useSkills from "./useSkills.js";

const useSearchResult = (skillName) => {
  const skills = useSkills();
  const [searchResult, setSearchResult] = useState();

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
