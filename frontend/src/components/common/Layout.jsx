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
`;
