import React from "react";
import styled from "styled-components";

const PostCard1 = () => {
  return (
    <Container>
      <Img></Img>
      <Title></Title>
      <Name></Name>
      <Price></Price>
    </Container>
  );
};

export default PostCard1;

const Container = styled.div`
  width: 290px;
  height: 390px;
  border: 1px solid;
`;

const Img = styled.img`
  width: 290px;
  height: 180px;
  border: 1px solid red;
`;

const Title = styled.div`
  width: 290px;
  height: 80px;
  border: 1px solid blue;
`;

const Name = styled.div`
  width: 290px;
  height: 55px;
  border: 1px solid green;
`;

const Price = styled.div`
  width: 290px;
  height: 55px;
  border: 1px solid orange;
`;
