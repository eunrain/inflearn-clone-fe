import React from "react";
import styled from "styled-components";

const TagBtn = ({ post }) => {
  return (
    <div>
      <Btn>{post.stack}</Btn>
    </div>
  );
};

export default TagBtn;

const Btn = styled.button`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: #b8b8b8;
  color: #fff;
  border: none;
  border-radius: 6px;
  margin: 0 20px 0 10px;
  font-size: 20px;
  padding: 8px 0 8px 0;
`;
