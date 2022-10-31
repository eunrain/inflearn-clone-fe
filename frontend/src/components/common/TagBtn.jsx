import React from "react";
import styled from "styled-components";

const TagBtn = () => {
  return (
    <div>
      <Btn>TagBtn</Btn>
    </div>
  );
};

export default TagBtn;

const Btn = styled.button`
  cursor: pointer;
  background: #b8b8b8;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 1px 0.6rem 2px 0.8rem;
`;
