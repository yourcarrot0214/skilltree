import React from "react";
import PropTypes from "prop-types";
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

Modal.propTypes = {
  onClickFunction: PropTypes.func,
  header: PropTypes.any,
  openModal: PropTypes.bool,
};

export default Modal;
