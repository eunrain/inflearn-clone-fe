import React, { useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import styled from "styled-components";

const ChatInput = ({ userName, socket }) => {
  const [chatMessage, setChatMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("onSend", {
      userName: userName ? userName : localStorage.getItem("userName"),
      msg: chatMessage,
      timestamp: new Date().toLocaleTimeString(),
    });
    setChatMessage("");
  };

  const onChatMessageChange = (e) => {
    setChatMessage(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <StContainer>
          <StInput
            placeholder="메시지를 입력하세요."
            value={chatMessage}
            onChange={onChatMessageChange}
          />
          <StBtn>전송</StBtn>
        </StContainer>
      </form>
    </div>
  );
};

export default ChatInput;

const StContainer = styled.div`
  display: flex;
  margin: 0 auto 0 auto;
`;
const StInput = styled.input`
  width: 360px;
  height: 40px;
  border-radius: 10px;
`;

const StBtn = styled.div`
  width: 65px;
  height: 40px;
  cursor: pointer;
  border: 1px solid;
  border-radius: 10px;
  text-align: center;
  line-height: 40px;
`;
