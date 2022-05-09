import React from "react";
import styled from "styled-components";
import RightSide from "../components/mainpage/RightSide";
import LeftSide from "../components/mainpage/LeftSide";

const Main = styled.div`
  font-family: Noto Sans KR;
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #EFF4EF;
  box-sizing: border-box;
`

export default function MainPage() {
  return (
    <Main>
      <LeftSide />
      <RightSide/>
    </Main>
  );
}