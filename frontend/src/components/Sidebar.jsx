import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const StLinkTitle = styled(Link)`
    display: block;
    text-align: center;
    padding: 29px 0;
    border-bottom: 1px solid #e4e4e4;
    font-size: 20px;
  `;
  const StLink = styled(Link)`
    display: block;
    text-align: center;
    padding: 24px 0;
    font-size: 20px;
    border-bottom: 1px solid #e4e4e4;
  `;

  const StLinkEnd = styled(Link)`
    display: block;
    text-align: center;
    padding: 25px 0;
    font-size: 20px;
  `;

  return (
    <StContainer>
      <StWrap>
        <StLinkTitle to="/signup">전체 강의</StLinkTitle>
        <StLink to="/login">Full Stack</StLink>
        <StLink>FrontEnd </StLink>
        <StLinkEnd>BackEnd</StLinkEnd>
      </StWrap>
    </StContainer>
  );
};

export default Sidebar;

const StContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: start;
  margin: 50px 0 0 60px;
`;

const StWrap = styled.div`
  width: 150px;
  height: 300px;
  border: 1px solid #e4e4e4;
  background-color: #fafafa;
`;
