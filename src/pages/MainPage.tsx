import React from "react";
import styled from "styled-components";
import LeftSide from "../components/mainPost/LeftSide";
import Mainpost from "../components/mainPost/MainPost";
import RightSide from "../components/mainPost/RightSide";

export default function MainPage() {
  return (
    <>
      <LeftSide />
      <Mainpost postId={""} author={""} title={""} content={""} imgUrl={[]} like={0} comment={[]} />
      <RightSide />
    </>
  );
}