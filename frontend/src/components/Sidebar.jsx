import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <StContainer>
      <StWrap>
        <StLinkTitle to="/">전체 강의</StLinkTitle>
        <StLink to="/category/fullstack">Full Stack</StLink>
        <StLink to="/category/frontend">FrontEnd </StLink>
        <StLinkEnd to="/category/backend">BackEnd</StLinkEnd>
      </StWrap>
    </StContainer>
  );
};

export default Sidebar;
const StLinkTitle = styled(Link)`
  display: block;
  text-align: center;
  padding: 29px 0;
  border-bottom: 1px solid #e4e4e4;
  font-size: 20px;
  text-decoration-line: none;
`;
const StLink = styled(Link)`
  display: block;
  text-align: center;
  padding: 24px 0;
  font-size: 20px;
  border-bottom: 1px solid #e4e4e4;
  text-decoration-line: none;
`;

const StLinkEnd = styled(Link)`
  display: block;
  text-align: center;
  padding: 25px 0;
  font-size: 20px;
  text-decoration: none;
`;

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
