import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// * MUI
import { Stack, Button, TextField } from "@mui/material";

const SearchBar = () => {
  return (
    <Stack spacing={1} direction="row">
      <TextField
        id="search-bar-input"
        label="스킬검색"
        variant="outlined"
        size="medium"
        color="info"
      />
      <Button variant="outlined" size="medium" color="info">
        검색
      </Button>
    </Stack>
  );
};

const Container = styled.div`
  width: 100%;
  height: 500px;
  max-width: 1024px;
  margin: 0 auth;
  color: whitesmoke;
  background-color: whitesmoke;
`;

const Skills = () => {
  return (
    <Container>
      <h1>Skills Refactoring Page</h1>
      <SearchBar />
    </Container>
  );
};

export default Skills;

/*
  TODO 1. SkillSearchBar
    ? store.skills 데이터를 바탕으로 검색 기능 구현
    ? onChange로 감지되는 텍스트 문자열을 dispatch로 store에 저장한다.
    ? 이 문자열을 구독하고 있는 SkillBoard에서는 문자열이 포함된 스킬 버튼만 출력한다.
  TODO 2. SkillBoard
    ? store.skills 데이터를 버튼 형식으로 출력
  TODO 3. SkillInfo
    ? 선택된 스킬에 대한 정보를 출력
*/
