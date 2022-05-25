import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { mainPagefetcher } from "../api/mainPageApi";
import MainPost from "../components/mainpost/MainPost";
import { PostType } from "../type/dataType";
import { throttle } from "throttle-debounce";
import { useRecoilState } from "recoil";
import { scrolledState } from "../recoil/store";
import Posting from "../components/mainpost/Posting";
import PrintTopPost from "../components/right/PrintTopPost"
import PrintMember from "../components/mainpost/PrintMember";
import Header from "../components/Header";

const Cont = styled.div`
    position: relative;
    width: 62.5%;
    height: 100%;
    margin: 0 auto;
    margin-top: 20px;
`

// Left Side
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 23%;
  height: auto;
  top: 0;
  left: 0;
  margin: 0 20px 0 20px;
`
const IDK = styled.div`
  width: 100%;
  height: 552px;
  background-color: #fff;
  border-radius: 10px;
  margin: 0 0 20px 0;
`

const Member = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 78px;
`

const PostList = styled.div`
  height: 100vh;
  overflow: scroll;
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

// Right Side

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 23%;
  height: auto;
  top: 0;
  right: 0;
  margin: 0 20px 0 20px;
`

const Undefined = styled.div`
  width: 100%;
  height: 410px;
  background-color: #fff;
  border-radius: 10px;
  margin: 0 0 20px 0;
`

const TopPost = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 12px;
`

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
    <Header />
    <Cont>
    {/* Left Side - 아직 결정 안함, intro member,  */}
    <LeftSide>
      <IDK />
      <Member>
        <PrintMember />
      </Member>
    </LeftSide>
    {/* center - Posting */}
    <Posting />
    {/* center - Posts */}
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

      {/* Right Side - 아직 결정 안됨, TopPost */}
      <RightSide>
        <Undefined />
        <TopPost>
          <PrintTopPost />
        </TopPost>
      </RightSide>
    </Cont>
    </>
  );
}

// 로딩 메세지 구현
// 로딩 state setState 구현
// pending 끝나면 로딩 메세지 삭제
