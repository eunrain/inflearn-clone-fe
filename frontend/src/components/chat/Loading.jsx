import React from "react";

//useState로 상태값을 변경하는 동안 아주 미세한 텀이 있기 때문에, 이를 처리하기 위해 조건부 렌더링을 활용
// 소켓 연결이 완료되기 전까지는 Loading 컴포넌트를 렌더링함.
const Loading = () => {
  console.log("loading");
  return <div>Loading</div>;
};

export default Loading;
