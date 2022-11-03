import React from "react";
import styled from "styled-components";
import img from "../../img/logologo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { __login } from "../../redux/modules/loginSlice";
import { useNavigate } from "react-router-dom";
import { BsXLg } from "react-icons/bs";

function Modal(props) {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    id: yup.string().min(5).max(15).required(),
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
        props.closemodal();
      }
    });
  };
  return (
    <>
      <ModalBackground>
        <ModalBox>
          <LogoBox>
            <img alt="로고 이미지" src={img} />
            <div onClick={props.closemodal}>
              <BsXLg />
            </div>
          </LogoBox>
          <InputBox>
            <form onSubmit={handleSubmit(submitForm)}>
              <div>
                <input type="id" placeholder="아이디" {...register("id")} />
                <span>{errors.id && "아이디 형식에 맞지 않습니다😅"}</span>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="비밀번호"
                  {...register("password")}
                />
                <span>
                  {errors.password && "비밀번호 형식에 맞지않습니다🥲"}
                </span>
              </div>
              <button type="submit">로그인하기</button>
            </form>
          </InputBox>
        </ModalBox>
      </ModalBackground>
    </>
  );
}

export default Modal;

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`;

const ModalBox = styled.div`
  width: 450px;
  height: 530px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  border-radius: 15px;
  background-color: white;
  img {
    display: block;
    margin: 0 auto;
  }
`;

const LogoBox = styled.div`
  display: flex;
  margin-top: 50px;
  div {
    width: 30px;
    position: absolute;
    right: 15px;
    top: 15px;
    text-align: center;
    cursor: pointer;
  }
`;
const InputBox = styled.div`
  text-align: center;
  div {
    height: 50px;
    margin: 30px;
  }
  input {
    width: 250px;
    height: 40px;
    margin-top: -7px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid lightgray;
  }
  button {
    display: block;
    width: 258px;
    height: 47px;
    margin: 30px auto;
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
