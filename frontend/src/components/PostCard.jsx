import React, { useState } from "react";
import styled from "styled-components";
import {
  BsSuitHeartFill,
  BsSuitHeart,
  BsCartPlus,
  BsCartXFill,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { __postHeart } from "../redux/modules/heartSlice";
import { __postCart } from "../redux/modules/cartSlice";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const [heart, setHeart] = useState(false);
  const [cart, setCart] = useState(false);

  return (
    <Container>
      <StPostCard2>
        <HoverTitle>{post.title}</HoverTitle>
        <HoverDescrip>{post.description}</HoverDescrip>
        <HoverTag>{post.stack}</HoverTag>
        <HoverIcons>
          {post.isHeart === true ? (
            <BsSuitHeartFill
              color="rgb(255, 56, 92)"
              size="20"
              onClick={() => {
                setHeart(false);
                dispatch(__postHeart(post.postId));
              }}
            />
          ) : (
            <BsSuitHeart
              size="20"
              onClick={() => {
                setHeart(true);
                dispatch(__postHeart(post.postId));
              }}
            />
          )}
          {post.isCart === true ? (
            <BsCartXFill
              size="22"
              onClick={() => {
                setCart(false);
                dispatch(__postCart(post.postId));
              }}
            />
          ) : (
            <BsCartPlus
              size="22"
              onClick={() => {
                setCart(true);
                dispatch(__postCart(post.postId));
              }}
            />
          )}
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

const Container = styled.div``;
const StPostCard1 = styled.div`
  width: 200px;
  height: 250px;
  margin-bottom: 40px;
`;

const Img = styled.img`
  width: 200px;
  height: 120px;
`;

const Title = styled.div`
  width: 200px;
  height: 30px;
  font-size: 13px;
  font-weight: 600;
`;

const Name = styled.div`
  width: 200px;
  height: 20px;
  font-size: 13px;
  margin-top: 30px;
`;

const Price = styled.div`
  width: 200px;
  height: 55px;
  font-size: 13px;
`;

// PostCard After

const StPostCard2 = styled.div`
  position: relative;
  width: 200px;
  height: 250px;
  border: 1px solid;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  color: white;
  &:hover {
    opacity: 1;
  }
`;

const HoverContent = styled.div`
  margin: auto;
`;
const HoverTitle = styled.div`
  width: 180px;
  height: 30px;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  margin: 10px auto;
`;

const HoverDescrip = styled.div`
  width: 180px;
  height: 70px;
  margin: 15px auto;
  font-size: 11px;
`;

const HoverTag = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 290px;
  color: skyblue;
`;

const HoverIcons = styled.div`
  position: absolute;
  bottom: 10px;
  right: 15px;
  display: flex;
  flex-direction: column;
`;
