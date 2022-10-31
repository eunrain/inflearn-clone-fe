import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import Sidebar from "../components/Sidebar";
import PostCard1 from "../components/PostCard1";
import PostCard2 from "../components/PostCard2";
import green from "../img/inflearn_green.png";
import { useDispatch, useSelector } from "react-redux";
import { __getPostCard } from "../redux/modules/postSlice";

const Main = () => {
  const { data } = useSelector((state) => state.post);
  console.log(data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getPostCard());
  }, []);

  return (
    <Layout>
      <Container>
        <Sidebar />
        <Content>
          <Tag>
            <div>태그</div>
            <div>태그</div>
            <div>태그</div>
            <div>태그</div>
          </Tag>
          <List>
            <PostBox>
              {data?.map((post) => (
                <PostCard1 key={post.postId} post={post} />
              ))}

              <StPostCard2>
                {data?.map((post) => (
                  <PostCard2 key={post.postId} post={post} />
                ))}
              </StPostCard2>
            </PostBox>
          </List>
        </Content>
        <Inquiry>
          <span>문의하기</span>
          <img alt="인프런 상담 버튼" src={green} />
        </Inquiry>
      </Container>
    </Layout>
  );
};

export default Main;

const Container = styled.div`
  width: 1500px;
  display: flex;
  margin: 40px auto;
  background-color: yellow;
`;

// const Nav = styled.div`
//   width: 200px;
//   height: 400px;
//   border: 1px solid red;
//   text-align: center;
// `;

const Content = styled.div`
  width: 1300px;
  margin: 50px auto;
  background-color: skyblue;
`;

const Tag = styled.div`
  display: flex;
  justify-content: space-evenly;
  div {
    width: 50px;
    text-align: center;
    border: 1px solid black;
  }
`;

const List = styled.div``;

const PostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
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

const Inquiry = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 40px;
  right: 35px;
  width: 195px;
  height: 75px;
  cursor: pointer;
  border: 1px solid #e4e4e4;
  border-radius: 40px;
  box-shadow: 0 5px 10px #efeff0;
  background-color: white;

  span {
    margin-left: 30px;
    font-size: 19px;
    font-weight: 600;
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;
