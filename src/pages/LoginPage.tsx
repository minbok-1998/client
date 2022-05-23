// import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { constSelector, useRecoilState } from "recoil";
import { userName } from "../recoil/store";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #EFF4EF;
`;

const Logo = styled.img`
  height: 100px;
  margin: 0 0 100px 0;
  cursor: pointer;
`;

const CheckId = styled.input`
  height: 53px;
  width: 384px;
  border-radius: 50px;
  border: none;
  text-indent: 30px;
  background-color: #f8f8f8;
  box-shadow: 4px 6px 4px 0px #00000040 inset;
  margin: 0 0 36px 0;

  :focus {
    outline: none;
  }
  ::placeholder {
    font-family: Noto Sans KR;
    font-size: 13px;
    font-weight: 400;
    color: #7e7e7e;
  }
`;

const CheckPw = styled(CheckId)`
  margin: 0;
`;

const LoginBtn = styled.button`
  height: 53px;
  width: 384px;
  border-radius: 50px;
  background-color: #00964a;
  border: none;
  font-size: 18px;
  font-weight: 400;
  color: #f8f8f8;
  margin: 46px 0 0 0;
  cursor: pointer;
`;

export default function LoginPage(): JSX.Element {
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const onLogin = () => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/login',
      data: {
        userId: userId,
        password: userPwd,
      }
    })
    .then(res => {
      sessionStorage.setItem('id', res.data.data);
      setSuccess(true);
    })
    .catch(err => {
      if(!err?.response) {
        setErrMsg('서버가 응답하지 않습니다.')
      } else if (err.response?.status === 400) {
          setErrMsg('이 필드는 blank일 수 없습니다.');
          console.log(errMsg)
      } else if (err.response?.status === 401) {
          setErrMsg('로그인 정보가 없습니다.')
      } else {
          setErrMsg('로그인에 실패하였습니다.')
      }
    });
  }

  // 로그인 버튼 클릭 또는 엔터 입력시 로그인 정보 제출
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onLogin();
  }

  return (
    <>
    {success ? (
      navigate('/')
    ) : (
      <Form onSubmit={handleSubmit}>
        <Link to="/">
          <Logo src={logo}></Logo>
        </Link>
        <CheckId
          type='text'
          placeholder="아이디를 입력하세요"
          required
          onChange={(e) => {setUserId(e.target.value);}}
        />
        <CheckPw
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => {setUserPwd(e.target.value);}}
        />
        <LoginBtn type="submit">LOGIN</LoginBtn>
    </Form>
    )}
    </>
  );
}
