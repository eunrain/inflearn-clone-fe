import React from "react";
import styled from "styled-components";
import { BsXLg } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";

const Chat2 = ({ setNewInquiry }) => {
  return (
    <StContainer>
      <StBox>
        <StHeader>
          <button>
            <IoIosArrowBack size="25" color="#00c471" />
          </button>
          <div>인프런</div>
          <button
            onClick={() => {
              setNewInquiry(false);
            }}
          >
            <BsXLg size="18" color="#00c471" />
          </button>
        </StHeader>
      </StBox>
    </StContainer>
  );
};

export default Chat2;

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
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0000000d;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  div {
    font-size: 20px;
    font-weight: 600;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin: 0 10px 0 10px;
  }
`;
