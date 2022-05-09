import Login from './CheckLogin';
import Search from './PrintSearchBar';
import TopPost from './PrintTopPost';
import MyPost from './PrintMyPost';
import Left from './LeftToMainpost';
import styled from "styled-components";

const Wrap = styled.div`
  font-family: Noto Sans KR;
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #EFF4EF;
  overflow-x: hidden;
`

const LeftSide = styled.div`
  width: 128px;
  background-color: #F8F8F8;
  box-shadow: 4px 4px 4px 0px #00000040;
  padding: 25px 0 0 0;
`

const RightSide = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 484px;
  height: 100%;
  background-color: #F8F8F8;
  padding: 24px 52px 0 48px;
  right: 0;
  box-shadow: -4px 4px 4px 0px #00000040;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 725px;
  margin-top: 76px;
`

function PostWrap():JSX.Element {
  return (
    <Wrap>
      <LeftSide>
        <Left />
      </LeftSide>

      <RightSide> 
        <Login />
        <Flex>
          <Search />
          <TopPost />
          <MyPost />
        </Flex>
      </RightSide>
    </Wrap>
  );
}

{/* <TopPost post_Id={0} title={''} like={0} /> */}

export default PostWrap;
