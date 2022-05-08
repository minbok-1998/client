import { ReactChild, ReactFragment, ReactPortal } from "react";
import styled from "styled-components";
// import { TopPostProps } from "./GetPost"
// import GetPost from "./GetPost";

const Wrap = styled.div`
    /* height: 260px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 282px;
    background-color: paleturquoise;
`
const Title = styled.h1`
    font-size: 18px;
    font-weight: 500;
    color: #00964A;
`

const Post = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #000;
`

// function TopPost(topPost: TopPostProps['topPost']): JSX.Element {
//     interface TopPostData {
//         post_Id: number;
//         title: string;
//         content?: string;
//         like: number;
//     }
    
    // map 사용을 위해 배열 변환함
    // let objToArr = Object.values(topPost);

    // 5개만 나오게 하려고 새로운 배열 만듦
    // let TopPostData = [];

    // for (let i = 0; i < 5; i++) {
    //     TopPostData.push(objToArr[i]);
    // }

    // console.log(TopPostData)

    // console.log(TopPostData)   // 잘 출력됨
    // console.log(TopPostData[0])  // 잘 출력됨
    // console.log(TopPostData[0].title) // 얘는 에러뜸, 콘솔에는 출력됨

    // Property 'title' does not exist on type 'string | number'.
    // Property 'title' does not exist on type 'string'.

    function TopPost() {

    return(
        <Wrap>
            <Title>실시간 게시글</Title>
            <Post>아아아아아아아아아아ㅏ아아ㅇㄴㄹ악</Post>
            <Post>ㄴㅇㄹㄴㄹㄴㅇㄹㅇㄹㅇㄴㄹㅇㄴㄹㅇ</Post>
            <Post>아아아아아아아아아아ㅏ아아악</Post>
            <Post>아아아아아아아아아아ㅏ아아악</Post>
            {/* {TopPostData.map((data) => {
                return(
                <PostWrap key={data.post_Id}>
                    <Post>{data.title}</Post>
                </PostWrap>
                )
            })} */}
        </Wrap>
    );
}

export default TopPost;

function sortJSON(topPost: { post_Id: number; title: string; content?: string | undefined; like: number; }, arg1: string, arg2: string): any {
    throw new Error("Function not implemented.");
}
