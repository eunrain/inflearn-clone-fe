import React from "react";
import styled from "styled-components";
import {
  BsSuitHeartFill,
  BsSuitHeart,
  BsCartPlus,
  BsCartXFill,
} from "react-icons/bs";

const PostCard = ({ post }) => {
  return (
    <Container>
      <StPostCard2>
        <HoverTitle>{post.title}</HoverTitle>
        <HoverDescrip>{post.description}</HoverDescrip>
        <HoverTag>{post.stack}</HoverTag>
        <HoverIcons>
          <BsSuitHeart size="28" />
          <BsSuitHeartFill size="28" />
          <BsCartPlus size="30" />
          <BsCartXFill size="30" />
        </HoverIcons>
      </StPostCard2>
      <StPostCard1>
        <Img src={post.thumbnail}></Img>
        <Title>{post.title}</Title>
        <Name>{post.tutor}</Name>
        <Price>{post.price}</Price>
      </StPostCard1>
    </Container>
  );
};

export default PostCard;

const Container = styled.div`
  position: relative;
`;
const StPostCard1 = styled.div`
  width: 290px;
  height: 390px;
  margin-bottom: 40px;
`;

const Img = styled.img`
  width: 290px;
  height: 180px;
`;

const Title = styled.div`
  width: 290px;
  height: 80px;
`;

const Name = styled.div`
  width: 290px;
  height: 55px;
`;

const Price = styled.div`
  width: 290px;
  height: 55px;
`;

// PostCard After

const StPostCard2 = styled.div`
  width: 290px;
  height: 390px;
  border: 1px solid;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  color: white;
  &:hover {
    opacity: 1;
  }
`;

const HoverTitle = styled.div`
  width: 290px;
  height: 80px;
`;

const HoverDescrip = styled.div`
  width: 290px;
  height: 140px;
`;

const HoverTag = styled.div`
  width: 290px;
  height: 55px;
`;

const HoverIcons = styled.div`
  display: flex;
`;
