import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import { useDispatch } from "react-redux";
import { __idDupCheck, __signUp } from "../redux/modules/signupSlice";

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
  });

  const {
    register, //제어되지 않은 컴포넌트를 Hook과 연결하여 값이 검사될 수 있도록 하고, 폼이 제출될 때 한번에 모아지도록 하는 것(input값 쉽게 관리)
    handleSubmit, //기존에 폼을 제출할 때 나타나는 새로고침 현상이 나타나지 않는다. event.preventDefault() 안써줘도 됌
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  //회원가입
  const dispatch = useDispatch();
  const onSignupHandler = (data) => {
    const signupBody = {
      loginId: data.id,
      password: data.password,
    };
    dispatch(__signUp(signupBody));
    console.log(JSON.stringify(signupBody));
  };

  //중복확인
  const id = watch().id;
  console.log(id);

  return (
    <Layout>
      <Container>
        <Wrap>
          <span>회원가입</span>
          <StForm>
            <form onSubmit={handleSubmit(onSignupHandler)}>
              <div>
                <StId>
                  <p>아이디</p>
                  <StBtnCheck
                    onClick={() =>
                      dispatch(__idDupCheck(JSON.stringify({ loginId: id })))
                    }
                  >
                    중복 확인
                  </StBtnCheck>
                </StId>
                <input type="id" placeholder="id" {...register("id")} />
                <StErrMsg>{errors.id && <p>{errors.id.message}</p>}</StErrMsg>
              </div>

              <div>
                <div>
                  <p>비밀번호</p>
                  <input
                    type="password"
                    placeholder="*****"
                    {...register("password")}
                  />
                  <StErrMsg>
                    {errors.password && <p>{errors.password.message}</p>}
                  </StErrMsg>
                </div>

                <div>
                  <p>비밀번호 확인</p>
                  <input
                    type="password"
                    placeholder="*****"
                    {...register("passwordCheck")}
                  />
                  <StErrMsg>
                    {errors.passwordCheck && (
                      <p>{errors.passwordCheck.message}</p>
                    )}
                  </StErrMsg>
                </div>
              </div>

              <StBtnSignup type="submit">가입하기</StBtnSignup>
            </form>
          </StForm>
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
  width: 500px;
  height: 650px;
  span {
    display: block;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 30px;
    font-weight: border;
    font-size: 34px;
  }
`;

const StForm = styled.div`
  display: flex;
  justify-content: center;

  input {
    width: 380px;
    height: 55px;
    margin-top: -7px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid lightgray;
  }
`;

const StId = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StBtnCheck = styled.button`
  width: 90px;
  height: 35px;
  border-radius: 4px;
  border: 1px solid lightgray;
`;

const StBtnSignup = styled.button`
  width: 380px;
  height: 55px;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 19px;
  margin-top: 50px;
  background-color: #00c471;
  cursor: pointer;
`;

const StErrMsg = styled.div`
  color: red;
  margin-top: -4px;
`;
