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
      <StHeaderContent>
        <BsPersonFill size="21" display="block" />
        <div>
          <strong>
            {loginId} 님이{" "}
            <BsSuitHeartFill size="18" color="rgb(255, 56, 92)" /> 한 강의{" "}
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
    </StContainer>
  );
};

export default Likebar;

const StContainer = styled.div`
  width: 300px;
  margin-top: 120px;
  height: auto;
  border: 1px solid;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 5px 5px 5px #efeff0;
`;

const StHeaderContent = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
`;

const StList = styled.div`
  width: 280px;
  margin: 20px auto;
  border-top: 1px solid lightgray;
`;

const StTitle = styled.div`
  border-radius: 10px;
  border: 1px solid lightgray;
  margin: 20px auto;
  cursor: pointer;
  font-size: 17px;
  &:hover {
    border: 3px solid;
    border-color: #00c471;
  }
  div {
    width: 250px;
    margin: 15px auto;
  }
`;
