import React from "react";
import styled from "styled-components";
import {
  BsSuitHeartFill,
  BsSuitHeart,
  BsCartPlus,
  BsCartXFill,
} from "react-icons/bs";

const PostCard2 = () => {
  return (
    <Container>
      <Title>postcard2</Title>
      <Descrip></Descrip>
      <Tag></Tag>
      <BsSuitHeart size="28" />
      <BsSuitHeartFill size="28" />
      <BsCartPlus size="30" />
      <BsCartXFill size="30" />
    </Container>
  );
};

export default PostCard2;

const Container = styled.div`
  width: 290px;
  height: 390px;
  border: 1px solid;
`;

const Title = styled.div`
  width: 290px;
  height: 80px;
  border: 1px solid blue;
`;

const Descrip = styled.div`
  width: 290px;
  height: 140px;
  border: 1px solid green;
`;

const Tag = styled.div`
  width: 290px;
  height: 55px;
  border: 1px solid orange;
`;

const Icons = styled.div`
  display: flex;
`;
