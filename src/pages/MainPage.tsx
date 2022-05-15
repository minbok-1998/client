import React from "react";
import { Link } from 'react-router-dom';
import LeftSide from "../components/mainPost/LeftSide";
import Mainpost from "../components/mainPost/MainPost";
import RightSide from "../components/mainPost/RightSide";

// main post 클릭하면 디테일 페이지로 넘어가야하는데 이미지 스크롤이 문제됨

export default function MainPage() {
  return (
    <>
      <LeftSide />
      <Link to={'/detail'}>
        <Mainpost postId={""} author={""} title={""} content={""} imgUrl={[]} like={0} comment={[]} />
      </Link>
      <RightSide />
    </>
  );
}