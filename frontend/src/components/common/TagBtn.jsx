import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __getStack } from "../../redux/modules/categorySlice";

const TagBtn = ({ stack, id }) => {
  const dispatch = useDispatch();

  const [color, setColor] = useState("#b8b8b8");
  const tabHandler = () => {
    color === "#b8b8b8" ? setColor("#1dc078") : setColor("#b8b8b8");
  };

  return (
    <Wrap>
      <Btn
        onClick={() => {
          tabHandler();
          dispatch(__getStack({ category: id, stack }));
        }}
        color={color}
      >
        {stack}
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
