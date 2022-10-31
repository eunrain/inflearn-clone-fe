import React from "react";
import styled from "styled-components";
import {
  BsSuitHeartFill,
  BsSuitHeart,
  BsCartPlus,
  BsCartXFill,
} from "react-icons/bs";

const PostCard1 = ({ post }) => {
  return (
    <Container>
      <StPostCard1>
        <Img src={post.thumbnail}></Img>
        <Title>{post.title}</Title>
        <Name>{post.tutor}</Name>
        <Price>{post.price}</Price>
      </StPostCard1>
      <StPostCard2>
        <HoverTitle>postcard2</HoverTitle>
        <HoverDescrip></HoverDescrip>
        <HoverTag></HoverTag>
        <BsSuitHeart size="28" />
        <BsSuitHeartFill size="28" />
        <BsCartPlus size="30" />
        <BsCartXFill size="30" />
      </StPostCard2>
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

// PostCard After

const HoverTitle = styled.div`
  width: 290px;
  height: 80px;
  border: 1px solid blue;
`;

const HoverDescrip = styled.div`
  width: 290px;
  height: 140px;
  border: 1px solid green;
`;

const HoverTag = styled.div`
  width: 290px;
  height: 55px;
  border: 1px solid orange;
`;

const HoverIcons = styled.div`
  display: flex;
`;

const StPostCard2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const StPostCard1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
`;
