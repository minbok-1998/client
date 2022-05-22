// import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userName } from "../recoil/store";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #eff4ef;
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
  const navigate = useNavigate();
  const [username, setUserName] = useRecoilState<string>(userName);
  // const url = ``;
  const [inputId, SetinputId] = useState<string>("");
  const [inputPw, SetinputPw] = useState<string>("");

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetinputId(e.target.value);
  };

  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetinputPw(e.target.value);
  };

  const onClickLogin = () => {
    console.log("click login");
    axios
      .post("http://localhost:5000/login", {
        userId: inputId,
        password: inputPw,
      })
      .then((res) => {
        if (res.statusText === "OK") {
          setUserName(res.data.data);
          sessionStorage.setItem("isLoggedIn", "true");
          sessionStorage.setItem("username", `${username}`);
        }
      });
    navigate("/");
  };

  return (
    <Wrap>
      <Link to="/">
        <Logo src={logo}></Logo>
      </Link>
      <CheckId
        value={inputId}
        onChange={onChangeId}
        placeholder="아이디를 입력하세요"
      ></CheckId>
      <CheckPw
        type="password"
        value={inputPw}
        onChange={onChangePw}
        placeholder="비밀번호를 입력하세요"
      ></CheckPw>
      <LoginBtn onClick={onClickLogin}>LOGIN</LoginBtn>
    </Wrap>
  );
}
