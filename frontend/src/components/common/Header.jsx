import React from "react";
import styled from "styled-components";
import logo from "../../img/logo.png";
import { useState } from "react";
import Modal from "../common/Modal";

const Header = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <StHeader>
      <StLogo src={logo} />
      <StBtnWrap>
        <StBtnlogin onClick={() => setModal(true)}>로그인</StBtnlogin>
        {modal ? <Modal modal={modal} closemodal={closeModal} /> : null}
        {/* {modal === true ? <Modal modal={modal} /> : null} */}
        <StBtnsignup>회원가입</StBtnsignup>
      </StBtnWrap>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StLogo = styled.img`
  margin: 10px 0 0 50px;
  width: 200px;
  height: 70px;
`;
const StBtnWrap = styled.div`
  margin: 30px 100px 20px 0;
`;

const StBtnlogin = styled.button`
  width: 100px;
  height: 50px;
  margin-right: 10px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 8px;
  font-size: 1.1em;
  cursor: pointer;
`;

const StBtnsignup = styled.button`
  width: 100px;
  height: 50px;
  background-color: #ff7867;
  border: 1px solid lightgray;
  border-radius: 8px;
  color: white;
  font-size: 1.1em;
  cursor: pointer;
`;
