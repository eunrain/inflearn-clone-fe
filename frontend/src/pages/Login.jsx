import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import img from "../img/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { __login } from "../redux/modules/loginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
  const dispatch = useDispatch();
  const submitForm = (data) => {
    console.log(data);
    const loginBody = {
      loginId: data.id,
      password: data.password,
    };
    dispatch(__login(loginBody)).then((response) => {
      if (response.payload.token) {
        navigate("/");
      }
    });
    console.log(JSON.stringify(loginBody));
  };

  return (
    <Container>
      <Wrap>
        <img src={img} />
        <span>로그인</span>
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
  border: 2px solid #d8d8ee;
  border-radius: 15px;
  width: 500px;
  height: 650px;
  text-align: center;
  font-size: 25px;
  font-weight: 450;
  img {
    display: block;
    margin: 50px auto;
  }
`;

const InputBox = styled.div`
  margin-top: 70px;
  text-align: center;
  div {
    height: 50px;
    margin: 50px;
  }
  input {
    width: 380px;
    height: 55px;
    margin-top: -7px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid lightgray;
  }
  button {
    display: block;
    width: 380px;
    height: 55px;
    margin: 50px auto;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid lightgray;
    background-color: #00c471;
    color: white;
  }
  button:hover {
    opacity: 0.8;
  }

  span {
    display: block;
    color: #d23f3f;
    font-size: 13px;
  }
`;
