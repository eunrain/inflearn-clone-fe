import React from "react";
import styled from "styled-components";
import { BsPersonFill } from "react-icons/bs";

const Likebar = () => {
  const loginId = localStorage.getItem("loginId");

  return (
    <StContainer>
      <StHeader>
        <StHeaderContent>
          <BsPersonFill size="33" />
          <div>{loginId}님의 좋아요 list</div>
        </StHeaderContent>
      </StHeader>
    </StContainer>
  );
};

export default Likebar;

const StContainer = styled.div`
  width: 350px;
  min-height: 300px;
  border: 1px solid;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 5px 5px 5px #efeff0;
`;

const StHeader = styled.div`
  height: 70px;
  padding: 20px 0 0 10px;
  box-sizing: border-box;
`;

const StHeaderContent = styled.div`
  display: flex;
  div {
    height: 33px;
    line-height: 33px;
  }
`;
