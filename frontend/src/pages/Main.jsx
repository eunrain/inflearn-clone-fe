import React from "react";
import Layout from "../components/common/Layout";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import green from "../img/inflearn_green.png";
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
    height: 250px;
    border: 1px solid black;
  }
`;

const Inquiry = styled.div`
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
