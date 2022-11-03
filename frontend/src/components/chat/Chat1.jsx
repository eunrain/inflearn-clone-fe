import React, { useEffect, useState } from "react";
import styled from "styled-components";
import green from "../../img/inflearn_green.png";
import white from "../../img/inflearn_white.png";
import { BsXLg } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import Chat2 from "./Chat2";

const Chat1 = ({ setInquiry, userName }) => {
  const [newInquiry, setNewInquiry] = useState(false);
  console.log(newInquiry);

  localStorage.setItem("userName", userName);

  return (
    <StContainer>
      <StBox>
        <StHeader>
          <img alt="인프런 로고 초록" src={green} />
          <div>인프런</div>
          <button onClick={() => setInquiry(false)}>
            <BsXLg size="20" color="#00c471" />
          </button>
        </StHeader>
        <StContent>
          성장기회의 평등🌱
          <p>궁금한 점은 언제든지 문의해주세요.</p>
        </StContent>
        <StChat>
          <StChatContent>
            <img alt="인프런 로고 화이트" src={white} />
            <div>
              인프런
              <p>
                안녕하세요 <strong>인프런</strong>입니다 😀
              </p>
              <p>오늘도 인프런을 이용해주셔서 감사해요.</p>
            </div>
          </StChatContent>
          <Button onClick={() => setNewInquiry(true)}>
            <IoSend />
            <strong>새 문의하기</strong>
          </Button>
          {newInquiry ? <Chat2 setNewInquiry={setNewInquiry} /> : null}
        </StChat>
      </StBox>
    </StContainer>
  );
};

export default Chat1;

const Button = styled.button`
  width: 370px;
  height: 60px;
  margin: auto;
  border-radius: 20px;
  border: none;
  font-size: 19px;
  cursor: pointer;
  background-color: #0000000d;
`;

const StContainer = styled.div`
  bottom: 40px;
  right: 35px;
  position: fixed;
`;

const StBox = styled.div`
  width: 450px;
  height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 35px;
  border: 1px solid lightgray;
  background-color: #f8f8f8;
  box-shadow: 15px 10px 30px #efeff0;
`;

const StHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 0 23px;
  img {
    width: 45px;
    height: 45px;
    border-radius: 45px;
  }
  div {
    font-size: 24px;
    margin: 7px 0 0 9px;
    font-weight: 500;
  }
  button {
    border: none;
    background-color: transparent;
    margin: 3px 0 0 230px;
    cursor: pointer;
  }
`;

const StContent = styled.div`
  height: 90px;
  margin: 15px 0 0 23px;
  font-size: 18px;
  color: #00000066;
  font-weight: 500;
  p {
    margin-top: 4px;
  }
`;

const StChat = styled.div`
  width: 420px;
  height: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 35px;
  border: 1px solid lightgray;
  box-shadow: 15px 10px 30px #efeff0;
  margin: -10px auto 0 auto;
`;

const StChatContent = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 0 20px;
  img {
    width: 45px;
    height: 45px;
    border-radius: 45px;
  }
  div {
    margin: 10px;
  }
  p {
    margin: 1px;
    font-size: 18px;
  }
`;
