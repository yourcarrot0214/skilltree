import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterInfo,
  FooterLogo,
} from "./styles/styled.js";

import { FaGithubSquare } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterInfo>
          <div>developer : Jung ByungHoon</div>
          <div>email : stylenbs@gmail.com</div>
          <div>phone : 010 - 9556 - 5432</div>
        </FooterInfo>
        <FooterLogo>
          <a
            href='https://github.com/yourcarrot0214'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithubSquare style={{ color: "black", fontSize: "2rem" }} />
          </a>
          <a
            href='https://www.notion.so/devCarrot-770adfda777640ca8e463f34c132fe3f'
            target='_blank'
            rel='noreferrer'
          >
            <SiNotion style={{ color: "black", fontSize: "2rem" }} />
          </a>
        </FooterLogo>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
