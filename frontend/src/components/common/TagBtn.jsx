import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import __tag from "../../redux/modules/tagSlice";

const TagBtn = ({ post }) => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("#b8b8b8");
  const tabHandler = () => {
    color === "#b8b8b8" ? setColor("green") : setColor("#b8b8b8");
  };
  return (
    <Wrap>
      <Btn
        onClick={() => {
          tabHandler();
        }}
        color={color}
      >
        {post.stack}
      </Btn>
    </Wrap>
  );
};

export default TagBtn;

const Wrap = styled.div`
  margin: 0 10px 10px 0;
`;

const Btn = styled.button`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: ${(props) => props.color};
  color: #fff;
  border: none;
  border-radius: 6px;
  margin: 0 20px 0 10px;
  font-size: 20px;
  padding: 8px 0 8px 0;
`;
