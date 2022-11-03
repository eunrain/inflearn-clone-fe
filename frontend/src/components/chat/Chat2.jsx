// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { BsXLg } from "react-icons/bs";
// import { IoIosArrowBack } from "react-icons/io"; //모듈 가져오기
// import socketIOClient from "socket.io-client";
// import ChatLog from "./ChatLog";
// import ChatInput from "./ChatInput";
// import Loading from "./Loading";

// const Chat2 = ({ setNewInquiry, userName }) => {
//   const myInfo = {
//     userName: userName ? userName : localStorage.getItem("userName"),
//   };
//   const [currentSocket, setCurrentSocket] = useState();

//   useEffect(() => {
//     setCurrentSocket(socketIOClient("localhost:5000"));
//   }, []);
//   //훅을 사용해서 소켓을 관리하면 렌더링에 따른 소켓 연결 상태를 확실히 예측할 수 있다.

//   if (currentSocket) {
//     currentSocket.on("connect", () => {
//       currentSocket.emit("join", myInfo);
//     });
//   }
//   return (
//     <StContainer>
//       <StBox>
//         <StHeader>
//           <button>
//             <IoIosArrowBack size="25" color="#00c471" />
//           </button>
//           <div>인프런</div>
//           <button
//             onClick={() => {
//               setNewInquiry(false);
//             }}
//           >
//             <BsXLg size="18" color="#00c471" />
//           </button>
//         </StHeader>
//         <div>
//           <div>
//             {currentSocket ? (
//               <>
//                 <ChatLog socket={currentSocket} />
//                 <ChatInput userName={userName} socket={currentSocket} />
//               </>
//             ) : (
//               <Loading />
//             )}
//           </div>
//         </div>
//       </StBox>
//     </StContainer>
//   );
// };

// export default Chat2;

// const StContainer = styled.div`
//   bottom: 40px;
//   right: 35px;
//   position: fixed;
// `;

// const StBox = styled.div`
//   width: 450px;
//   height: 600px;
//   display: flex;
//   flex-direction: column;
//   border-radius: 35px;
//   border: 1px solid lightgray;
//   background-color: #f8f8f8;
//   box-shadow: 15px 10px 30px #efeff0;
// `;

// const StHeader = styled.div`
//   height: 70px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: #0000000d;
//   border-top-left-radius: 35px;
//   border-top-right-radius: 35px;
//   div {
//     font-size: 19px;
//     font-weight: 600;
//   }
//   button {
//     border: none;
//     background-color: transparent;
//     cursor: pointer;
//     margin: 0 10px 0 10px;
//   }
// `;
