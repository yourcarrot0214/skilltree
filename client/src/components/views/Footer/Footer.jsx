import React from "react";
import { FooterContainer, FooterWrapper, FooterInfo } from "./styles/styled.js";

import { SiNotion } from "react-icons/si";
import { FaGithubSquare, FaDev } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterInfo>
          <div>
            <FaDev style={{ color: "#f5f5f5", fontSize: "24.8px" }} />
            <span>Carrot</span>
          </div>
          <div>
            <HiOutlineMail style={{ color: "#f5f5f5", fontSize: "24.8px" }} />
            <span>stylenbs@gmail.com</span>
          </div>
          <div>
            <a
              href='https://github.com/yourcarrot0214'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithubSquare
                style={{ color: "#f5f5f5", fontSize: "24.8px" }}
              />
              <span>GitHub</span>
            </a>
          </div>
          <div>
            <a
              href='https://www.notion.so/devCarrot-770adfda777640ca8e463f34c132fe3f'
              target='_blank'
              rel='noreferrer'
            >
              <SiNotion style={{ color: "#f5f5f5", fontSize: "24.8px" }} />
              <span>notion</span>
            </a>
          </div>
        </FooterInfo>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default React.memo(Footer);
