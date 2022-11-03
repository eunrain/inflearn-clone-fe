import React, { useEffect } from "react";
import Layout from "../components/common/Layout";
import styled from "styled-components";
import { useState } from "react";
import { __getHeart } from "../redux/modules/heartSlice";
import { __getCart } from "../redux/modules/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Likebar from "../components/Likebar";

const Bucket = () => {
  const { data } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getCart());
    dispatch(__getHeart());
  }, []);

  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      data.forEach((el) => idArray.push(el.postId));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };

  const loginId = localStorage.getItem("loginId");

  return (
    <Layout>
      <StWrap>
        <Container>
          <h2>{loginId}님의 수강바구니</h2>
          <Wrap>
            <CheckBox>
              {/* <Label> */}
              <input
                type="checkbox"
                name="select-all"
                onChange={(e) => handleAllCheck(e.target.checked)}
                // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                checked={checkItems.length === data.length ? true : false}
              ></input>
              {/* </Label> */}
              <span>전체선택</span>
            </CheckBox>
            <ClassList>
              {data?.map((data, key) => (
                <Content key={data.postId}>
                  <div>
                    {/* <Label> */}
                    <input
                      type="checkbox"
                      name={`select-${data.postId}`}
                      onChange={(e) =>
                        handleSingleCheck(e.target.checked, data.postId)
                      }
                      // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                      checked={checkItems.includes(data.postId) ? true : false}
                    ></input>
                    {/* </Label> */}
                    <button>삭제</button>
                  </div>
                  <img src={data.thumbnail}></img>
                  <Title>{data.title}</Title>
                  <div>{data.price}</div>
                </Content>
              ))}
            </ClassList>
          </Wrap>
        </Container>
        <BarWrap>
          <Likebar />
        </BarWrap>
      </StWrap>
    </Layout>
  );
};

export default Bucket;

const Container = styled.div`
  width: 900px;
  margin: 0 auto;

  h2 {
    margin-top: 50px;
    width: 200px;
    height: 30px;
    line-height: 30px;
    border-bottom: 2px dotted #00c471;
    font-size: 20px;
    font-weight: 600;
  }
`;

const StWrap = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
`;

const BarWrap = styled.div`
  margin: 50px 0 0 50px;
`;
const Wrap = styled.div`
  margin-top: 50px;
`;
const ClassList = styled.div`
  button {
    width: 70px;
    height: 20px;
    cursor: pointer;
    border-radius: 4px;
    background-color: #00c471;
    color: white;
    border: none;
  }

  button:hover {
    opacity: 0.7;
  }
  input {
    margin-right: 20px;
  }
`;

const CheckBox = styled.div`
  margin-bottom: 20px;
`;

const Hr = styled.hr`
  width: 1200px;
  margin: 0 auto;
`;

const Content = styled.div`
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid lightgray;
  img {
    width: 150px;
    height: 120px;
  }
`;
const Title = styled.div`
  width: 30%;
  text-align: center;
`;

// const Label = styled.label`
// input{
//   display: ;
// }
// `;
