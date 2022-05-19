import styled from "styled-components";

const Wrap = styled.div``

const Title = styled.h1`
font-size: 18px;
font-weight: 500;
color: #00964A;
margin: 0 0 24px 0;
`

const PostTitles = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 282px;
height: 210px;
`

const Post = styled.p`
margin: 0;
width: 100%;
font-size: 18px;
font-weight: 400;
color: #000;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`


function PrintMyPost():JSX.Element {
    const dummy: string[] = ['1번 게시글 너무 길어지면 말줄임이 됨, 숫자로 자르는게 나은가 물어봐야함', '2번 게시글dfsfdfsd', '3번 게시글', '4번 게시글', '5번 게시글', '나오면 안되는 게시글'];
    const topFive: string[] = [];

    for (let i = 0; i < 5; i++) {
        topFive.push(dummy[i]);
    }

    return(
        <Wrap>
        {/* 키 */}
            <Title>내 게시글</Title>
            <PostTitles>
                {topFive.map((data) => {
                    return (
                        <Post>{data}</Post>
                    )
                })}
            </PostTitles>
        </Wrap>
    );
}

export default PrintMyPost;