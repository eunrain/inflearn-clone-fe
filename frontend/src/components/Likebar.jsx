import React from "react";
import styled from "styled-components";
import { BsPersonFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { BsSuitHeartFill } from "react-icons/bs";

const Likebar = () => {
  const loginId = localStorage.getItem("loginId");
  const { data } = useSelector((state) => state.heart);

  return (
    <StContainer>
      <StHeader>
        <StHeaderContent>
          <BsPersonFill size="33" />
          <div>
            <strong>
              {loginId} 님이{" "}
              <BsSuitHeartFill size="23" color="rgb(255, 56, 92)" /> 한 강의{" "}
            </strong>
          </div>
        </StHeaderContent>
        <StList>
          {data?.map((heart) => (
            <StTitle key={heart.postId}>
              <div>{heart.title}</div>
            </StTitle>
          ))}
        </StList>
      </StHeader>
    </StContainer>
  );
};

export default Likebar;

const StContainer = styled.div`
  width: 350px;
  min-height: 600px;
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
  font-size: 18px;
  border-bottom: 1px solid lightgray;
  div {
    height: 33px;
    line-height: 33px;
  }
`;

const StList = styled.div`
  margin: 20px auto;
`;

const StTitle = styled.div`
  width: 320px;
  height: 80px;
  border: 1px solid;
  border-radius: 10px;
  border: 1px solid lightgray;
  margin: 0 auto 10px auto;
  cursor: pointer;
  font-size: 17px;
  &:hover {
    border: 3px solid;
    border-color: #00c471;
  }
  div {
    width: 300px;
    text-align: center;
    line-height: 30px;
    height: 20px;
    margin: 10px auto;
  }
`;
