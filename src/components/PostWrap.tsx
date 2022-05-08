import LoginCheck from './LoginCheck';
import Search from './search';
import TopPost from './TopPost';
import MyPost from './MyPost';
import GetPost from './GetPost';
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Noto Sans KR;
  background-color: #EFF4EF;
  box-sizing: border-box;
`

const RightSide = styled.div`
  background-color: #F8F8F8;
`

function PostWrap() {
  return (
    <Body>
      <LoginCheck />
      <TopPost />
    </Body>
  );
}

{/* <TopPost post_Id={0} title={''} like={0} /> */}

export default PostWrap;
