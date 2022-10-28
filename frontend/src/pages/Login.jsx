import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import img from "../img/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
  const schema = yup.object().shape({
    id: yup.string().required(),
    password: yup.string().min(5).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Wrap>
        <img src={img} />
        <InputBox>
          <form onSubmit={handleSubmit(submitForm)}>
            <div>
              <input type="text" placeholder="아이디" {...register("id")} />
              <span>{errors.id && "아이디 형식에 맞지 않습니다😅"}</span>
            </div>
            <div>
              <input
                type="text"
                placeholder="비밀번호"
                {...register("password")}
              />
              <span>{errors.password && "비밀번호 형식에 맞지않습니다🥲"}</span>
            </div>
            <button type="submit">로그인하기</button>
          </form>
        </InputBox>
      </Wrap>
    </Container>
  );
};

export default Login;

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
  img {
    display: block;
    margin: auto;
  }
`;

const InputBox = styled.div`
  margin-top: 80px;
  text-align: center;
  div {
    height: 50px;
    margin: 50px;
  }
  input {
    display: block;
    width: 250px;
    height: 30px;
    border: 2px solid #11a5c2;
    border-radius: 10px;
    margin: 0px auto;
  }
  button {
    display: block;
    width: 250px;
    height: 35px;
    border-radius: 10px;
    margin: 50px auto;
    cursor: pointer;
    background-color: #d8d8ee;
    border: none;
  }
  button:hover {
    opacity: 0.7;
  }

  span {
    color: #d23f3f;
    font-size: 13px;
  }
`;
