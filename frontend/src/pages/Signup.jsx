import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import Layout from "../components/common/Layout";

const Signup = () => {
  const schema = yup.object().shape({
    id: yup
      .string()
      .required("사용하실 id를 입력해주세요.")
      .matches(
        /^[a-z]+[a-z0-9]{5,19}$/g,
        "영문자로 시작, 영문자 또는 숫자 6~20자"
      ),
    password: yup
      .string()
      .min(6, "최소 6자 이상 가능합니다.")
      .max(15, "최대 15자까지 가능합니다.")
      .required("비밀번호를 설정해주세요.")
      .matches(
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/,
        "8~16자 영문, 숫자, 특수문자를 최소 한가지씩 조합"
      ),
    passwordCheck: yup
      .string()
      .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
    //.oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  });

  //useForm()에 필요한 register, handleSubmit,errors를 할당해준다.
  const {
    register, //제어되지 않은 컴포넌트를 Hook과 연결하여 값이 검사될 수 있도록 하고, 폼이 제출될 때 한번에 모아지도록 하는 것(input값 쉽게 관리)
    handleSubmit, //기존에 폼을 제출할 때 나타나는 새로고침 현상이 나타나지 않는다. event.preventDefault() 안써줘도 됌
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSignupHandler = (data) => console.log(data);

  return (
    <Layout>
      <Container>
        <Wrap>
          <span>회원가입</span>
          <ButtonBox>
            <form onSubmit={handleSubmit(onSignupHandler)}>
              <input type="id" placeholder="아이디" {...register("id")} />
              <span>{errors.id && <p>{errors.id.message}</p>}</span>
              <button>중복 확인 버튼</button>
              <input
                type="password"
                placeholder="비밀번호"
                {...register("password")}
              />
              <span>{errors.password && <p>{errors.password.message}</p>}</span>
              <input
                type="passwordCheck"
                placeholder="비밀번호 확인"
                {...register("passwordCheck")}
              />
              <span>
                {errors.passwordCheck && <p>{errors.passwordCheck.message}</p>}
              </span>
              <button type="submit">가입하기</button>
            </form>
          </ButtonBox>
        </Wrap>
      </Container>
    </Layout>
  );
};

export default Signup;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  background-color: skyblue;
  border-radius: 15px;
  width: 400px;
  height: 550px;
  span {
    display: block;
    text-align: center;
    margin-top: 50px;
    font-weight: bold;
    font-size: 23px;
  }
`;

const ButtonBox = styled.div`
  margin-top: 70px;
  input {
    display: block;
    width: 250px;
    height: 30px;
    border: 2px solid #11a5c2;
    border-radius: 10px;
    margin: 30px auto;
  }

  button {
    display: block;
    width: 250px;
    height: 35px;
    border-radius: 10px;
    margin: 0 auto;
    cursor: pointer;
    background-color: #d8d8ee;
    border: none;
  }
  button:hover {
    opacity: 0.7;
  }
`;

// const StForm = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 15px;
// `;
