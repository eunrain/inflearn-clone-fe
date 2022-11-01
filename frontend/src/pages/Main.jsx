import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import Sidebar from "../components/Sidebar";
import PostCard from "../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { __getPostCard } from "../redux/modules/postSlice";
import TagBtn from "../components/common/TagBtn";
import InquiryBtn from "../components/common/InquiryBtn";
import Chat1 from "../components/Chat1";

const Main = () => {
  const { data } = useSelector((state) => state.post);
  console.log(data.category);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getPostCard());
  }, []);

  const [inquiry, setInquiry] = useState(false);

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
      </Container>
      <InquiryBtn setInquiry={setInquiry} />
      {inquiry ? <Chat1 setInquiry={setInquiry} /> : null}
    </Layout>
  );
};

export default Main;

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
  flex-wrap: wrap;
  justify-content: left;
  margin: 0 0 20px 18px;
`;

const PostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;
