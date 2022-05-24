import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title, Author, Content, ArrowContainer } from "../mainpost/MainPost";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlineHeart } from "react-icons/hi";
import DetailCommentInput from "./DetailCommentInput";
import Comment from "./Comment";
import { PostType } from "../../type/dataType";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 711px;
  height: auto;
  background-color: #f8f8f8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 103px 0 0 0;
  padding-top: 50px;
  padding-bottom: 20px;
`;

const Inner = styled.div`
  position: relative;
  width: 613px;
  height: auto;
  margin: 0 auto;
`;

const DetailTItle = styled(Title)`
  line-height: 35px;
  font-size: 24px;
  width: 400px;
  height: 35px;
`;

const DetailAuthor = styled(Author)`
  line-height: 23px;
  font-size: 16px;
  width: 50px;
  height: 23px;
  font-weight: 700;
  right: 200px;
  bottom: 0;
`;

const DetailContent = styled(Content)`
  width: auto;
  font-weight: 700;
  margin-top: 40px;
`;

const Close = styled(IoClose)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 30px;
  cursor: pointer;
`;

const ImgWrapper = styled.div`
  display: flex;
  height: 362px;
  border-radius: 10px;
  overflow: hidden;
`;

const ImageBox = styled.div<{ transformWidth: string }>`
  width: 613px;
  height: 362px;
  background-color: #e5e5e5;
  flex-shrink: 0;
  transform: translateX(${(props) => props.transformWidth});
  transition: 0.5s;
`;

const MyImg = styled.img`
  width: 613px;
  height: 362px;
  object-fit: contain;
`;

const DetailArrowContainer = styled(ArrowContainer)`
  bottom: 220px;
  color: #000;
`;

const BelowInner = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 613px;
  height: 32px;
  color: #00964a;
  font-size: 18px;
  margin-top: 32px;
  font-weight: 700;
`;

const MyHiOutlineHeart = styled(HiOutlineHeart)`
  position: absolute;
  font-size: 22px;
  top: 1px;
  right: 16px;
`;

const MyComment = styled.span`
  position: absolute;
  left: 0;
`;

const CommentNum = styled.span`
  position: absolute;
  left: 40px;
`;
const LikeNum = styled.span`
  position: absolute;
  right: 0;
`;

const Line = styled.div`
  width: 613px;
  height: 1px;
  background-color: #00964a;
  position: absolute;
  top: 42px;
`;

const CommentBox = styled.div`
  margin-top: 28px;
`;

const OpenIt = styled.div`
  width: 90px;
  font-size: 12px;
  margin: 13px auto 0;
  padding: 8px;
  cursor: pointer;
`;

export default function DetailPost({
  postId,
  author,
  title,
  content,
  imgUrl,
  like,
  comment,
}: PostType): JSX.Element {
  const navigate = useNavigate();
  const [sliderCount, setSliderCount] = useState<number>(0);
  const [commentOpened, setCommentOpened] = useState<boolean>(false);

  const [OpenedComment, setOpenedComment] =
    useState<Array<{ author: string; content: string }>>(comment);

  useEffect(() => {
    setOpenedComment((prev) => {
      return [prev[0], prev[1]];
    });
  }, [OpenedComment]);

  const handleSliderToLeft = (): void => {
    setSliderCount((prev) => prev - 1);
  };

  const handleSliderToRight = (): void => {
    setSliderCount((prev) => prev + 1);
  };

  const handleOpenIt = (): void => {
    setCommentOpened((prev) => !prev);
  };

  const handleClose = (): void => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Inner>
        <DetailTItle>{title}</DetailTItle>
        <DetailAuthor>{author}</DetailAuthor>
        <DetailContent>{content}</DetailContent>
        <Close onClick={handleClose} />
        <ImgWrapper>
          {imgUrl.map((url, index) => (
            <ImageBox key={index} transformWidth={`${sliderCount * -613}px`}>
              <MyImg src={url} alt={`image${index + 1}`} />
            </ImageBox>
          ))}
        </ImgWrapper>
        <BelowInner>
          {sliderCount > 0 && (
            <DetailArrowContainer pos={"left"} onClick={handleSliderToLeft}>
              <MdKeyboardArrowLeft />
            </DetailArrowContainer>
          )}
          {sliderCount < 4 && (
            <DetailArrowContainer pos={"right"} onClick={handleSliderToRight}>
              <MdKeyboardArrowRight />
            </DetailArrowContainer>
          )}
          <MyHiOutlineHeart />
          <LikeNum>{like}</LikeNum>
          <MyComment>댓글</MyComment>
          <CommentNum>{comment.length}</CommentNum>
          <Line />
        </BelowInner>
        <CommentBox>
          <DetailCommentInput />
          {commentOpened
            ? comment.map((_comment, index) => (
                <Comment
                  author={_comment.author}
                  content={_comment.content}
                  key={index}
                />
              ))
            : OpenedComment.map((_comment, index) => (
                <Comment
                  author={_comment.author}
                  content={_comment.content}
                  key={index}
                />
              ))}
          {commentOpened ? (
            <OpenIt onClick={handleOpenIt}>{". . . 간략히 보기"}</OpenIt>
          ) : (
            <OpenIt onClick={handleOpenIt}>{". . . 펼쳐보기"}</OpenIt>
          )}
        </CommentBox>
      </Inner>
    </Wrapper>
  );
}
