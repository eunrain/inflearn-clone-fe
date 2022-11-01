import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getCategory } from "../redux/modules/postSlice";
import Layout from "../components/common/Layout";
import Sidebar from "../components/Sidebar";
import PostCard from "../components/PostCard";
import green from "../img/inflearn_green.png";
import styled from "styled-components";
import TagBtn from "../components/common/TagBtn";

const Category = () => {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getCategory(id));
  }, [dispatch, id]);

  const { data } = useSelector((state) => state.post);
  console.log(data);

  return (
    <Layout>
      <Container>
        <Sidebar />
        <Content>
          <Tag>
            {data?.map((post) => (
              <TagBtn key={post.postId} post={post} />
            ))}
          </Tag>
          <PostBox>
            {data?.map((post) => (
              <PostCard key={post.postId} post={post} />
            ))}
          </PostBox>
        </Content>
        <Inquiry>
          <span>문의하기</span>
          <img alt="인프런 상담 버튼" src={green} />
        </Inquiry>
      </Container>
    </Layout>
  );
};

export default Category;

const Container = styled.div`
  width: 1500px;
  display: flex;
  margin: 40px auto;
`;

const Content = styled.div`
  width: 1300px;
  margin: 50px auto;
`;

const Tag = styled.div`
  display: flex;
  justify-content: left;
  margin-left: 18px;
  margin: 0 0 20px 18px;
`;

const PostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
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
