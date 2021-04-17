import React from "react";
import Styled, { css } from "styled-components";

const ModalStyled = Styled.div`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);

    ${(props) =>
      props.openModal &&
      css`
        display: flex;
        align-items: center;
        animation: modal-bg-show 0.3s;
      `}
`;

const ModalButton = Styled.button`
    outline: none;
    cursor: pointer;
    border: 0;
`;

const ModalHeaderButton = Styled.button`
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
`;

const ModalSection = Styled.section`
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 6px;
    background-color: #f1f1f1;
    animation: modal-show .3s;
    overflow: hidden;
`;

const ModalHeader = Styled.header`
  position: relative;
  padding: 16px 64px 16px 16px;
  width: 90%;
  font-weight: 700;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ModalMain = Styled.main`
  width: 90%;
  max-width: 450px;
  height: 300px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  background-color: tomato;
  color: black;
  border: 1px solid black;
`;

const ModalUserName = (props) => {
  const { onClickFunction, header, openModal } = props;
  return (
    <ModalStyled openModal={openModal}>
      {openModal && (
        <ModalSection>
          <ModalHeader>
            {header}
            <ModalHeaderButton onClick={onClickFunction}>
              닫기
            </ModalHeaderButton>
          </ModalHeader>
          <ModalMain>{props.children}</ModalMain>
        </ModalSection>
      )}
    </ModalStyled>
  );
};

export default ModalUserName;
