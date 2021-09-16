import React from "react";
import { FooterContainer, FooterWrapper, FooterInfo } from "./styles/styled.js";

import { SiNotion } from "react-icons/si";
import { FaGithubSquare, FaDev } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const logoStyle = {
  color: "#fa541c",
  fontSize: "24px",
};

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterInfo>
          <h3>developer Info</h3>
          <div>
            <FaDev style={logoStyle} />
            <span>Carrot</span>
          </div>
          <div>
            <HiOutlineMail style={logoStyle} />
            <span>stylenbs@gmail.com</span>
          </div>
          <div>
            <a
              href='https://github.com/yourcarrot0214'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithubSquare style={logoStyle} />
              <span>GitHub</span>
            </a>
          </div>
          <div>
            <a
              href='https://www.notion.so/devCarrot-770adfda777640ca8e463f34c132fe3f'
              target='_blank'
              rel='noreferrer'
            >
              <SiNotion style={logoStyle} />
              <span>notion</span>
            </a>
          </div>
        </FooterInfo>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default React.memo(Footer);
