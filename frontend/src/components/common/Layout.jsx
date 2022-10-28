import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <StLayout>
      <Header />
      {children}
    </StLayout>
  );
};

export default Layout;

const StLayout = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #eeeeef;
  box-shadow: 0px 13px 12px -15px #eeeeef;
`;
