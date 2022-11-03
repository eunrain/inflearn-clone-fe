import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getCategory } from "../redux/modules/categorySlice";
import Layout from "../components/common/Layout";
import Sidebar from "../components/Sidebar";
import PostCard from "../components/PostCard";
import styled from "styled-components";
import TagBtn from "../components/common/TagBtn";
import InquiryBtn from "../components/common/InquiryBtn";
import Chat1 from "../components/chat/Chat1";

const Category = () => {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getCategory(id));
  }, [dispatch, id]);

  const { data } = useSelector((state) => state.category);
  const { stack } = useSelector((state) => state.post);

  const [inquiry, setInquiry] = useState(false);

  return (
    <Layout>
      <OutWrap>
        <Sidebar />
        <Container>
          <Content>
            <Tag>
              {stack?.map((stack) => (
                <TagBtn key={stack} stack={stack} id={id} />
              ))}
            </Tag>
            <PostBox>
              {data?.map((post) => (
                <PostCard key={post.postId} post={post} />
              ))}
            </PostBox>
          </Content>
          <InquiryBtn setInquiry={setInquiry} />
          {inquiry ? <Chat1 setInquiry={setInquiry} /> : null}
        </Container>
      </OutWrap>
    </Layout>
  );
};

export default Category;

const OutWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
`;

const Container = styled.div`
  width: 900px;
  display: flex;
`;

const Content = styled.div`
  width: 1200px;
  margin: 50px auto;
`;

const Tag = styled.div`
  display: flex;
  justify-content: left;
  margin-left: 18px;
  margin: 0 0 20px 0;
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
