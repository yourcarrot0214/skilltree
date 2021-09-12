import { useEffect, useState } from "react";
import useSkills from "./useSkills.js";

const useSearchList = (skillName) => {
  const skills = useSkills();
  const [filteredSkills, setFilteredSkills] = useState([]);

  useEffect(() => {
    setFilteredSkills(() =>
      skills.filter((skill) =>
        skill.name.toLowerCase().includes(skillName.toLowerCase())
      )
    );
  }, [skillName, skills]);

  return filteredSkills;
};

export default useSearchList;
