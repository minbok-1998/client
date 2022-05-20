import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LeftSide from "./components/left/LeftSide";
import RightSide from "./components/mainPost/RightSide";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";
import NotFound from "./pages/NotFound";
import PostPage from "./pages/PostPage";
import styled from "styled-components";

const Wrap = styled.div`
  font-family: Noto Sans KR;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: #eff4ef;
  box-sizing: border-box;
`;

function App() {
  return (
    <BrowserRouter>
      <Wrap>
        <LeftSide />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="post" element={<PostPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="detailPost/:postId" element={<DetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <RightSide />
      </Wrap>
    </BrowserRouter>
  );
}

export default App;
