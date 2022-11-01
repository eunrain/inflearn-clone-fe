import React from "react";
import styled from "styled-components";
import green from "../../img/inflearn_green.png";

const InquiryBtn = () => {
  return (
    <Inquiry>
      <span>문의하기</span>
      <img alt="인프런 상담 버튼" src={green} />
    </Inquiry>
  );
};

export default InquiryBtn;

const Inquiry = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 40px;
  right: 35px;
  width: 195px;
  height: 75px;
  cursor: pointer;
  border: 1px solid #e4e4e4;
  border-radius: 40px;
  box-shadow: 0 5px 5px #efeff0;
  background-color: white;

  span {
    margin-left: 25px;
    font-size: 19px;
    font-weight: 600;
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;
