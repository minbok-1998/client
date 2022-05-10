import React from "react";
import styled from "styled-components";
import RightSide from "../components/mainPost/RightSide";
import LeftSide from "../components/mainPost/LeftSide";
import Mainpost from "../components/mainPost/MainPost";

const Main = styled.div`
  font-family: Noto Sans KR;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: #EFF4EF;
  box-sizing: border-box;
`

export default function MainPage() {
  return (
    <Main>
      <LeftSide />
      <Mainpost postId={""} author={""} title={""} content={""} imgUrl={[]} like={0} comment={[]} />
      <RightSide/>
    </Main>
  );
}