import React, { useState } from "react";
import styled from "styled-components";
import {
  BsSuitHeartFill,
  BsSuitHeart,
  BsCartPlus,
  BsCartXFill,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { __patchheart } from "../redux/modules/heartSlice";
import { __cart } from "../redux/modules/cartSlice";

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
          {heart ? (
            <BsSuitHeartFill
              onClick={() => {
                setHeart(false);
              }}
              className="fillLogo"
              color="red"
              size="28"
            />
          ) : (
            <BsSuitHeart
              onClick={() => {
                setHeart(true);
                dispatch(__patchheart(post.postId));
              }}
              className="emLogo"
              size="28"
            />
          )}
          {cart ? (
            <BsCartXFill
              onClick={() => {
                setCart(false);
              }}
              className="fillCart"
              size="30"
            />
          ) : (
            <BsCartPlus
              onClick={() => {
                setCart(true);
                dispatch(__cart(post.postId));
              }}
              className="emCart"
              size="30"
            />
          )}
          {/* <BsSuitHeart className="emLogo" size="28" />
          <BsSuitHeartFill className="fillLogo" size="28" /> */}
          {/* <BsCartPlus className="emCart" size="30" />
          <BsCartXFill className="fillCart" size="30" /> */}
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
  position: relative;
  width: 290px;
  height: 390px;
  margin-bottom: 40px;
`;

const Img = styled.img`
  position: relative;
  width: 290px;
  height: 180px;
`;

const Title = styled.div`
  position: relative;
  width: 290px;
  height: 80px;
`;

const Name = styled.div`
  position: relative;
  width: 290px;
  height: 55px;
`;

const Price = styled.div`
  position: relative;
  width: 290px;
  height: 55px;
`;

// PostCard After

const StPostCard2 = styled.div`
  position: relative;
  width: 290px;
  height: 390px;
  border: 1px solid;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
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
  position: absolute;
  right: 15px;
  display: flex;
  flex-direction: column;
`;
