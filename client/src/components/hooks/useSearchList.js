import useSkills from "./useSkills.js";

const useSearchList = (skillName) => {
  const skills = useSkills();

  const result = skills.filter(
    (skill) => skill.name.search(skillName.toUpperCase()) > -1
  );

  return result;
};

export default useSearchList;

/*
	문자열 검색 기능.
	스킬 이름에 파라미터로 전달된 skillName을 포함하는 스킬 배열을 리턴한다.

	검색 기능은 구현.
	String이 아닌 타입이 입력될 경우 Error가 발생
		- \, ? 등등
		- 문자열 처리 또는 에러 핸들링 필요
*/
