# SkillTree Server

> 스킬트리 서비스 back-end 관련 정보
> <br>

## Main Dependencies

- bcrypt
- express
- mongoose

## 디렉토리 구조

- `config`
  - MongoDB 연결을 위한 key 파일 및 string type 상수 모듈 파일
- `function`
  - response 응답시 사용할 함수 파일
- `middleware`
  - express response에서 사용하는 middleware 함수 파일
- `models`
  - MongoDB에서 사용할 DB Model, method를 포함한 파일
- `routes`
  - request path에 따른 router 모듈 파일

## DB 구성

| Model   | description                                                            |
| ------- | ---------------------------------------------------------------------- |
| User    | 회원가입 유저 정보를 저장. 비밀번호 변경, 토큰 부여를 위한 method 구성 |
| Project | 프로젝트 정보 저장                                                     |
| Study   | 스터디 정보 저장                                                       |
| Skills  | 스킬 정보 저장                                                         |
