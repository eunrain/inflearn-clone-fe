import React, { useRef, useState } from "react";
import styled from "styled-components";
import {
  BsSuitHeartFill,
  BsSuitHeart,
  BsCartPlus,
  BsCartXFill,
  
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { __postHeart } from "../redux/modules/heartSlice";
import { __postCart } from "../redux/modules/cartSlice";


const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const [heart, setHeart] = useState(false);
  const [cart, setCart] = useState(false);
  const { likes } = useSelector((state) => state.post);
  const { buckets } = useSelector((state) => state.post);


  return (
    <Container>
      <StPostCard2>
        <HoverTitle>{post.title}</HoverTitle>
        <HoverDescrip>{post.description}</HoverDescrip>
        <HoverTag>{post.stack}</HoverTag>
        <HoverIcons>
          {likes.indexOf(post.postId) === -1 ? (
            <BsSuitHeart
              size="28"
              onClick={() => {
                dispatch(__postHeart(post.postId));
              }}
            />
          ) : (
            <BsSuitHeartFill
              className="fillLogo"
              color="red"
              size="28"
              onClick={() => {
                setHeart(false);
                dispatch(__postHeart(post.postId));
              }}
            />
          )}
          {buckets.indexOf(post.postId) === -1 ? (
            <BsCartPlus
              size="30"
              onClick={() => {
                dispatch(__postCart(post.postId));
              }}
            />
          ) : (
            <BsCartXFill
              size="30"
              onClick={() => {
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
  font-size: 20px;
  font-weight: 600;
`;

const Name = styled.div`
  width: 290px;
  height: 55px;
  font-size: 17px;
  margin-top: 10px;
`;

const Price = styled.div`
  width: 290px;
  height: 55px;
  font-size: 17px;
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

const HoverContent = styled.div`
  margin: auto;
`;
const HoverTitle = styled.div`
  width: 290px;
  height: 80px;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
`;

const HoverDescrip = styled.div`
  width: 290px;
  max-height: 200px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
`;

const HoverTag = styled.div`
  width: 290px;
  height: 55px;
  margin-top: 10px;
  color: skyblue;
`;

const HoverIcons = styled.div`
  position: absolute;
  right: 15px;
  display: flex;
  flex-direction: column;
`;
