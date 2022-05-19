import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import LeftSide from "../components/mainPost/LeftSide";
import RightSide from "../components/mainPost/RightSide";
import DetailCommentInput from "../components/detailPost/DetailCommentInput";

import { HiOutlineHeart } from "react-icons/hi"; // 빈 하트
import { HiHeart } from "react-icons/hi"; // 채워진 하트
import { HiOutlineX } from "react-icons/hi"; // 닫힘 버튼

// 댓글 몇개 보여줄지 정하고 펼쳐보기 기능 추가해야함

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #00000073;
`

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    width: 711px;
    height: auto;
    border-radius: 20px;
    background-color: #F8F8F8;
    box-shadow: 0px 4px 4px 0px #00000040;
    box-sizing: border-box;
    padding: 50px 56px 0 55px;
`

const TitleWrap = styled.div`
    position: relative;
    display: flex;
    align-items: baseline;
`

const Text = styled.p<{ fontSize: string, fontWeight: number }>`
    font-size : ${({ fontSize }) => fontSize};
    font-weight : ${({ fontWeight }) => fontWeight};
    color: ${({ color }) => color};
`
const Title = styled(Text)`
    margin-right: 14px;
`
const UserName = styled(Text)``

const StyledHiOutlineX = styled(HiOutlineX)`
    position: absolute;
    display: flex;
    align-self: flex-end;
    font-size: 18px;
    color: #290606;
    right: 0;
    overflow: hidden;
`

const Content = styled(Text)`
    width: 80%;
    margin: 41px 0 50px 0;
`

const ImgCont = styled.div`
    width: 600px;
    height: 362px;
    border-radius: 10px;
    background-color: #E5E5E5;
    overflow: hidden;
`

// 두 개 이하일때 크기 변경해야함
const Img = styled.img`
    width: 50%;
    height: 50%;
    /* object-fit: cover; */ // 비율을 유지할까 말까....
`

const NumInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 44px 0  15px 0;
    border-bottom:  0.75px solid #00964A;
    margin-bottom: 21px;
`

const LikeWrap = styled.div`
    display: flex;
    align-items: center;
`

const LikeNum = styled(Text)`
    margin-left: 8px;
`

const CommentNum =  styled(Text)`
    ::before {
        content: '댓글';
        margin: 9px;
    }
`

const CommentWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const Author = styled(Text)`
    margin-right: 30px;
`
const Comment = styled(Text)``

const Test = styled(Text)``

interface DetailData {
    postId: number;
    title: string;
    author: string;
    content: string;
    imgUrl: string[];
    like: number;
    comment: string[];
}

// interface Data {
//     author: string;
//     content: string;
// }

function DetailPage() {
    // document.title = '제품 상세'
    // let id =  useParams();
    let id = 1;

    const [detail, setDetail] = useState<DetailData>();
    const [comment, setComment] = useState<string[]>();
    const [isLike, setIsLike] = useState(false);
    const [likeNum, setLikeNum] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/posts?postid=${id}`)
        .then(function (response) {
            const res = response.data;

            for (const i of res) {
                if(i.postId == id)
                setDetail(i)
            }
        })
        .catch(function (error) {
          // 에러 핸들링
          console.log(error);
        })
        .then(function () {
          // 항상 실행되는 영역
        });
    },[])

    useEffect(() => {
        setComment(detail?.comment)
    }, [])

    const clickLike = ():void => {
        if(isLike == false) {
            setIsLike(true)
            setLikeNum(0)
        } else {
            setIsLike(false)
            setLikeNum(1)
        }
    }

    return(
        <>
        <LeftSide />
            <Wrap>
                <Cont>
                    <TitleWrap>
                        <Title fontSize={'24px'} fontWeight={700} color={'#00964A'}>{detail && (detail.title)}</Title>
                        <UserName fontSize={'16px'} fontWeight={400} color={'#7E7E7E'}>{detail && (detail.author)}</UserName>
                        <StyledHiOutlineX onClick={() => navigate(-1)} />
                    </TitleWrap>
                    <Content fontSize={'18px'} fontWeight={700} color={'#000'}>{detail && (detail.content)}</Content>
                    <ImgCont>
                        {detail?.imgUrl.map((data) => {
                            return(
                                <Img src={data}></Img>
                            )
                        })}
                    </ImgCont>

                    <NumInfo>
                        <LikeWrap>
                            {isLike? (
                                <HiOutlineHeart onClick={clickLike} color="#00964A"/>
                            ) : (
                                <HiHeart onClick={clickLike} color="#00964A"/>
                            )}
                            <LikeNum fontSize={'18px'} fontWeight={700} color={'#00964A'}>{detail && (detail.like) + likeNum}</LikeNum>
                        </LikeWrap>

                        <CommentNum fontSize={'18px'} fontWeight={700} color={'#00964A'}>{detail && (detail.comment.length)}</CommentNum>
                    </NumInfo>

                    <DetailCommentInput />

                    {/* 수정 필요: map 안됨, 펼쳐보기 */}
                    {detail?.comment.map((data) => {
                        return(
                            <CommentWrap>
                                <Author fontSize={'18px'} fontWeight={700} color={'#000'}>이름</Author>
                                <Comment fontSize={'14px'} fontWeight={700} color={'#000'}>야호</Comment>
                            </CommentWrap>
                        )
                    })}
                </Cont>
            </Wrap>
        <RightSide />
        </>
    )
}

export default DetailPage;

function data(data: any): import("react").ReactNode {
    throw new Error("Function not implemented.");
}
