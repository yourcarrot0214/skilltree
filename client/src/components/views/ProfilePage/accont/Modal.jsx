import React from "react";
import {
  ModalStyled,
  ModalHeaderButton,
  ModalSection,
  ModalHeader,
  ModalMain,
} from "../styles/styled.js";

const Modal = (props) => {
  const { onClickFunction, header, openModal } = props;
  return (
    <ModalStyled openModal={openModal}>
      {openModal && (
        <ModalSection>
          <ModalHeader>
            {header}
            <ModalHeaderButton onClick={onClickFunction}>
              return
            </ModalHeaderButton>
          </ModalHeader>
          <ModalMain>{props.children}</ModalMain>
        </ModalSection>
      )}
    </ModalStyled>
  );
};

export default Modal;
