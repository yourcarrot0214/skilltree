# SkillTree Client

> 스킬트리 서비스 Front-end 관련 정보
> <br>

## Main Dependencies

- react
- react-redux
- axios
- styled-components

## 디렉토리 구조

- `_actions directory`
  - dispatch 작업을 위한 action 파일
  - string type 상수를 저장한 types 파일
- `_reducers directory`
  - `user`, `skills`, `project`, `study` 세부 reducer와 통합 state를 위한 `index` 파일
- `hoc`
  - auth : client 유저의 auth 상태에 따른 location 접근 권한 부여
- `components`
  - `common`
    - 재사용 가능한 컴포넌트 파일들을 모아둔 디렉토리
  - `hooks`
    - custom hooks 파일들을 모아둔 디렉토리
  - `views`
    - route에 따른 실제 출력 컴포넌트 파일들을 모아둔 디렉토리

## 화면 구성

| directory    | description                                      |
| ------------ | ------------------------------------------------ |
| LandingPage  | 서비스 소개 정보 출력                            |
| SkillsPage   | 스킬 정보 출력                                   |
| ProfilePage  | 회원 유저 관련 정보 출력 및 수정 기능 출력       |
| ProjectPage  | 프로젝트 관련 정보 및 기능 출력                  |
| StudyPage    | 스터디 관련 정보 및 기능 출력                    |
| RegisterPage | 회원가입 Form 출력                               |
| LoginPage    | 서비스 로그인 Form 출력                          |
| AdminPage    | 스킬 정보를 DB에 저장하고, 등록된 DB 목록 출력   |
| NavBar       | 서비스 route 출력                                |
| Footer       | 화면 하단 개발자 정보와 gitbub, notion 링크 출력 |
