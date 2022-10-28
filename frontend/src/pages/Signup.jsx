import React from "react";
import styled from "styled-components";

const Signup = () => {
  return (
    <Container>
      <Wrap>
        <span>로고</span>
        <ButtonBox>
          <input placeholder="아이디"></input>
          <button>중복 확인 버튼</button>
          <input placeholder="비밀번호"></input>
          <input placeholder="비밀번호 확인"></input>
          <button>가입하기</button>
        </ButtonBox>
      </Wrap>
    </Container>
  );
};

export default Signup;

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
  span {
    display: block;
    text-align: center;
    margin-top: 50px;
    font-weight: bold;
    font-size: 22px;
  }
`;

const ButtonBox = styled.div`
  margin-top: 70px;
  input {
    display: block;
    width: 250px;
    height: 30px;
    border: 2px solid #11a5c2;
    border-radius: 10px;
    margin: 30px auto;
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
