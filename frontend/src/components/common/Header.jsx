import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Modal from "../common/Modal";
import logo from "../../img/logologo.png";
import { BsCart3 } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const signUpHandler = () => {
    navigate(`/signup`);
  };

  const loginId = localStorage.getItem("loginId");

  const onLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.clear();
      window.location.reload();
    }
  };
  return (
    <div>
      <StHeader>
        <StLogo art="헤더 로고" src={logo} onClick={() => navigate("/")} />

        <div>
          {!loginId ? (
            <StBtnWrap>
              <StBtnlogin onClick={() => setModal(true)}>로그인</StBtnlogin>
              {modal ? <Modal modal={modal} closemodal={closeModal} /> : null}
              <StBtnsignup onClick={signUpHandler}>회원가입</StBtnsignup>
            </StBtnWrap>
          ) : (
            <StBtnWrap>
              <div>{loginId}님 환영합니다!</div>
              <StBtn>
                <BucketBtn>
                  <BsCart3 size="35" onClick={() => navigate("/bucket")} />
                </BucketBtn>
                <IoLogOutOutline size="35" onClick={() => onLogout()} />
              </StBtn>
            </StBtnWrap>
          )}
        </div>
      </StHeader>
    </div>
  );
};

export default Header;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeef;
  box-shadow: 0px 13px 12px -15px #eeeeef;
`;

const StLogo = styled.img`
  margin: 10px 0 0 50px;
  width: 200px;
  height: 70px;
  cursor: pointer;
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

const StBtn = styled.div`
  display: flex;
  cursor: pointer;
`;

const BucketBtn = styled.div`
  margin-right: 10px;
`;
