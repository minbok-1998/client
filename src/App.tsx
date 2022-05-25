import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import PostPage from "./pages/PostPage";
import styled from "styled-components";
import DetailPage from "./pages/DetailPage";
import Side from "./components/mainpost/Side"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route element={<Side />}> */}
            <Route path="/" element={<MainPage />} />
            {/* <Route path="post" element={<PostPage />} />
            <Route path="detailPost/:postId" element={<DetailPage />} /> */}
          {/* </ Route> */}

          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
