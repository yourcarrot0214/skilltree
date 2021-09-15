import React from "react";
import { FooterContainer, FooterWrapper, FooterInfo } from "./styles/styled.js";

import { SiNotion } from "react-icons/si";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterInfo>
          <div>
            <box-icon
              type='logo'
              name='dev-to'
              color='#f5f5f5'
              size='sm'
            ></box-icon>
            <span>Carrot</span>
          </div>
          <div>
            <box-icon name='mail-send' color='#f5f5f5' size='sm'></box-icon>
            <span>stylenbs@gmail.com</span>
          </div>
          <div>
            <a
              href='https://github.com/yourcarrot0214'
              target='_blank'
              rel='noreferrer'
            >
              <box-icon
                type='logo'
                name='github'
                size='sm'
                color='white'
              ></box-icon>
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
