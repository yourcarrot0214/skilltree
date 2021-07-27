import styled, { css } from "styled-components";

const FooterContainer = styled.footer`
  background-color: #adb5bd;
  padding: 1rem 0;
`;

const FooterWrapper = styled.div`
  width: 300px;
  border: 1px soild white;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;

  div {
    color: #212529;
    margin-bottom: 0.5rem;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    text-decoration: none;
    color: #212529;
  }

  a:first-child {
    margin-right: 1rem;
  }
`;

const LinkBox = styled.div`
  a {
    text-decoration: none;
    padding: 1rem 1.5rem;
    margin: 0 auto;
    color: black;
  }
  a:hover {
    color: #69db7c;
  }
`;

export { FooterContainer, FooterWrapper, FooterInfo, FooterLogo, LinkBox };
