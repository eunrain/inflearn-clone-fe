import React from "react";
import Layout from "../components/common/Layout";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const Main = () => {
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
              <div>
                <h2>이미지 맵돌리기</h2>
                <h3>강의 제목</h3>
                <h4>1000원</h4>
              </div>
              <div>
                <h2>이미지 맵돌리기</h2>
                <h3>강의 제목</h3>
                <h4>1000원</h4>
              </div>
              <div>
                <h2>이미지 맵돌리기</h2>
                <h3>강의 제목</h3>
                <h4>1000원</h4>
              </div>
              <div>
                <h2>이미지 맵돌리기</h2>
                <h3>강의 제목</h3>
                <h4>1000원</h4>
              </div>
              <div>
                <h2>이미지 맵돌리기</h2>
                <h3>강의 제목</h3>
                <h4>1000원</h4>
              </div>
              <div>
                <h2>이미지 맵돌리기</h2>
                <h3>강의 제목</h3>
                <h4>1000원</h4>
              </div>
              <div>
                <h2>이미지 맵돌리기</h2>
                <h3>강의 제목</h3>
                <h4>1000원</h4>
              </div>
              <div>
                <h2>이미지 맵돌리기</h2>
                <h3>강의 제목</h3>
                <h4>1000원</h4>
              </div>
            </PostBox>
          </List>
        </Content>
        <Inquiry>문의하기컴포넌트</Inquiry>
      </Container>
    </Layout>
  );
};

export default Main;

const Container = styled.div`
  width: 1200px;

  display: flex;
  margin: 50px auto;
`;
const Nav = styled.div`
  width: 200px;
  height: 400px;
  border: 1px solid red;
  text-align: center;
`;

const Content = styled.div`
  width: 1000px;
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
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  div {
    margin-top: 50px;
    width: 20%;
    height: 300px;
    border: 2px solid black;
  }
`;
const Inquiry = styled.div`
  position: fixed;
  bottom: 40px;
  right: 35px;
  width: 120px;
  height: 40px;
  border: 1px solid blue;
  text-align: center;
  line-height: 40px;
`;
