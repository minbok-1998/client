import styled from "styled-components";

const Wrap = styled.div`
    font-family: Noto Sans KR;
`
const Title = styled.h1`
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    color: #00964A;
`
const PostWrap = styled.div``
const Post = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    color: #000;
`

function HotPost() {
    return(
        <Wrap>
            <Title>실시간 게시글</Title>
            <PostWrap>
                <Post>ㄴㄹㅇㄹㅇㄴㄹㅇㄹㄴ</Post>
                <Post>ㅇㄹㄴㄹㅇㄴㄹ</Post>
                <Post>ㄴㅇㄹㄴㅇㄹㄴㅇ</Post>
                <Post>ㄴㅇㄹㅇㄹㄴㅇ</Post>
            </PostWrap>
        </Wrap>
    );
}

export default HotPost;