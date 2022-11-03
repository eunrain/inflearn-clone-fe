import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import ChatInput from "./ChatInput";
import ChatLog from "./ChatLog";

const Chat = ({ userName }) => {
  const myInfo = {
    userName: userName ? userName : localStorage.getItem("userName"),
  };
  const [currentSocket, setCurrentSocket] = useState();

  useEffect(() => {
    setCurrentSocket(socketIOClient("localhost:5000"));
  }, []);
  //훅을 사용해서 소켓을 관리하면 렌더링에 따른 소켓 연결 상태를 확실히 예측할 수 있다.

  const Loading = () => {
    console.log("loading");
    return <div>Loaidng</div>;
  };
  //useState로 상태값을 변경하는 동안 아주 미세한 텀이 있기 때문에, 이를 처리하기 위해 조건부 렌더링을 활용
  // 소켓 연결이 완료되기 전까지는 Loading 컴포넌트를 렌더링함.

  if (currentSocket) {
    currentSocket.on("connect", () => {
      currentSocket.emit("join", myInfo);
    });
  }
  return (
    <div>
      <div>
        {currentSocket ? (
          <>
            <ChatLog socket={currentSocket} />
            <ChatInput userName={userName} socket={currentSocket} />
          </>
        ) : (
          { Loading }
        )}
      </div>
    </div>
  );
};

export default Chat;
