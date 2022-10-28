import React from "react";
import styled from "styled-components";
import img from "../img/logo.png";

const Login = () => {
  return (
    <Container>
      <Wrap>
        <img src={img} />
        <ButtonBox>
          <input placeholder="아이디"></input>
          <input placeholder="비밀번호"></input>
          <button>로그인하기</button>
        </ButtonBox>
      </Wrap>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  background-color: skyblue;
  border-radius: 15px;
  width: 400px;
  height: 550px;
  img {
    display: block;
    margin: auto;
  }
`;

const ButtonBox = styled.div`
  margin-top: 80px;
  input {
    display: block;
    width: 250px;
    height: 30px;
    border: 2px solid #11a5c2;
    border-radius: 10px;
    margin: 50px auto;
  }
  button {
    display: block;
    width: 250px;
    height: 35px;
    border-radius: 10px;
    margin: 0 auto;
    cursor: pointer;
    background-color: #d8d8ee;
    border: none;
  }
  button:hover {
    opacity: 0.7;
  }
`;
