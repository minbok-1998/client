import React from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #EFF4EF;
`
const Logo = styled.img`
  height: 100px;
  margin: 0 auto;
`

export default function LoginPage(): JSX.Element {
  return (
    <Wrap>
      <Logo src={logo}></Logo>
    </Wrap>
  );
}
