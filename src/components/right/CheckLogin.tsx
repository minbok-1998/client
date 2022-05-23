import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const Login = styled.div`
  display: flex;
  height: 26px;
  align-items: center;
  right: 52px;
  align-self: flex-end;
`;

const User = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #000;
  right: 105px;
  padding-right: 15px;
`;

const Btn = styled.button`
  height: 25px;
  width: 87px;
  border: none;
  border-radius: 50px;
  background-color: #00964a;
  color: #f8f8f8;
  cursor: pointer;
`;

function CheckLogin(): JSX.Element {
  const [isLogin, setIsLogin] = useState(false);
  const userName = sessionStorage.getItem('id');

  useEffect(() => {
    if(userName === null) {
      setIsLogin(false)
    } else {
      setIsLogin(true)
    }
  },[])

  // 로그아웃 구현하기
  const logout = () => {
    window.confirm('로그아웃 하시겠습니까?')
    sessionStorage.clear();
    setIsLogin(false);
  }
  
  return (
    <Login>
      <User>{isLogin? userName : '게스트'} 님</User>
      {isLogin ? (
        <Link to='/'>
          <Btn onClick={logout}>LOGOUT</Btn>
        </Link>
      ) : (
        <Link to='/login'>
          <Btn>LOGIN</Btn>
        </Link>
      )}
    </Login>
  );
}

export default CheckLogin;
