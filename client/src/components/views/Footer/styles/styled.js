import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1rem 0;
  position: fixed;
  left: 0;
  bottom: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 450px) {
    padding: 0.5rem 0;
  }
`;

const FooterWrapper = styled.div`
  width: 100%;
  border: 1px soild white;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;

  @media screen and (max-width: 450px) {
    width: 250px;
    margin: 0.5rem auto;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;

  h3 {
    margin: 0;
    padding-left: 1rem;
    padding-bottom: 0.5rem;
    color: #bfbfbf;
  }

  div {
    margin-left: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.2rem 0;
    color: #bfbfbf;
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #bfbfbf;
  }

  span {
    margin-left: 0.5rem;
  }

  span:hover {
    color: #fa541c;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
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

export { FooterContainer, FooterWrapper, FooterInfo, LinkBox };
