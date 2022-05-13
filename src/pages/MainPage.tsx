import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { mainPagefetcher } from "../api/mainPageApi";
import MainPost from "../components/mainPost/MainPost";
import { PropsType } from "../components/mainPost/MainPost";
import { throttle } from "throttle-debounce";

const Main = styled.div`
  font-family: Noto Sans KR;
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: #eff4ef;
  box-sizing: border-box;
`;

const PostList = styled.div`
  max-height: 100vh;
  overflow: scroll;
  left: 113px;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: calc(100% - 113px - 484px);
  flex-wrap: wrap;
`;

const Load = styled.div`
  text-align: center;
  position: absolute;
  font-size: 24px;
  color: #7e7e7e;
  width: 200px;
  height: 100px;
  top: 0;
  bottom: 100px;
  left: 0;
  right: 370px;
  margin: auto;
  line-height: 100px;
`;

export default function MainPage() {
  const listRef = useRef<HTMLDivElement>(null);
  const [isScrollBottom, setIsScrollBottom] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<PropsType[] | null>(null);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (data === null) {
      mainPagefetcher(page)
        .then((res) => setData(res))
        .catch((err) => console.log(err));
    } else {
      mainPagefetcher(page)
        .then((res) => setData((prev) => (prev ? [...prev, ...res] : prev)))
        .catch((err) => console.log(err));
    }
  }, [page]);

  const handleScroll = throttle(1000, () => {
    if (listRef.current) {
      const { scrollHeight, offsetHeight, scrollTop } = listRef.current;
      const offset = 50;
      setIsScrollBottom(scrollHeight - offsetHeight - scrollTop < offset);
    }
  });

  useEffect(() => {
    if (isScrollBottom) {
      setPage((prev) => prev + 1);
    }
  }, [isScrollBottom]);

  return (
      <Main>
        <LeftSide />
        <PostList ref={listRef} onScroll={handleScroll}>
          {data &&
            data.map((_data: PropsType) => (
              <MainPost
                postId={_data.postId}
                author={_data.author}
                title={_data.title}
                content={_data.content}
                imgUrl={_data.imgUrl}
                like={_data.like}
                comment={_data.comment}
                key={_data.postId}
              />
            ))}
        </PostList>
        <RightSide />
        {isScrollBottom && <Load>. . . Loading</Load>}
      </Main>
  );
}

// 로딩 메세지 구현
// 로딩 state setState 구현
// pending 끝나면 로딩 메세지 삭제
