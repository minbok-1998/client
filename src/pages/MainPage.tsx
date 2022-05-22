import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { mainPagefetcher } from "../api/mainPageApi";
import MainPost from "../components/mainPost/MainPost";
import { PostType } from "../type/dataType";
import { throttle } from "throttle-debounce";
import { useRecoilState } from "recoil";
import { scrolledState } from "../recoil/store";
const PostList = styled.div`
  height: 100vh;
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
  const [srolled, setScrolled] = useRecoilState<number>(scrolledState);
  const listRef = useRef<HTMLDivElement>(null);
  const [isScrollBottom, setIsScrollBottom] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<PostType[] | null>(null);

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
      setScrolled(scrollTop);
      const offset = 50;
      setIsScrollBottom(scrollHeight - offsetHeight - scrollTop < offset);
    }
  });

  useEffect(() => {
    if (isScrollBottom) {
      setPage((prev) => prev + 1);
    }
  }, [isScrollBottom]);

  useEffect(() => {
    const scrolledHeight = sessionStorage.getItem("scrolledHeight");
    // 순차적 실행의 문제를 해결하지 못해서 부득히 하게 setTimeout 사용 , 추후 수정
    setTimeout(() => {
      //@ts-ignore
      listRef.current.scrollTo(
        0,
        scrolledHeight ? parseInt(scrolledHeight) : 0
      );
    }, 100);
  }, []);

  return (
    <>
      <PostList ref={listRef} onScroll={handleScroll}>
        {data &&
          data.map((_data: PostType) => (
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
      {isScrollBottom && <Load>. . . Loading</Load>}
    </>
  );
}

// 로딩 메세지 구현
// 로딩 state setState 구현
// pending 끝나면 로딩 메세지 삭제
