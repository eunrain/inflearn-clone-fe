import React, { useRef, useState } from "react";
import socketIOClient from "socket.io-client";

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
        <input
          placeholder="메시지를 입력하세요."
          value={chatMessage}
          onChange={onChatMessageChange}
        />
        <button>전송</button>
      </form>
    </div>
  );
};

export default ChatInput;
