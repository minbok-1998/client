import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdComment,
} from "react-icons/md";
import { HiOutlineHeart } from "react-icons/hi";

import ImageContainer from "./ImageContainer";
import CommentInput from "./CommentInput";
import { useNavigate } from "react-router-dom";
import { PostType } from "../../type/dataType";
import { useRecoilState } from "recoil";
import { scrolledState } from "../../recoil/store";

const Wrapper = styled.div`
  width: 48%;
  height: auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const Inner = styled.div`
  position: relative;
`;

const TitleandUser = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
`

const UserImg =  styled.img`
  width: 3rem;
  height: 3rem;;
  background-color: #ced0d0;
  border-radius: 50%;
  margin: 0 20px 0 0;
`

export const Title = styled.h1`
  color: #00964a;
  font-weight: 700;
  font-size: 18px;
  margin: 0 20px 0 0;
  cursor: pointer;
`;

export const Author = styled.p`
  color: #7e7e7e;
  font-size: 12px;
`;

export const Content = styled.p`
  box-sizing: border-box;
  font-weight: 400;
  width: 100%;
  height: auto;
  margin: 0 0 40px 0;
`;

const SlideWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  overflow: hidden;
  margin: 0 0 20px 0;
`;

export const ArrowContainer = styled.div<{ pos: "left" | "right" }>`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: rgba(248, 248, 248, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: -127px 0 0 0;
  font-size: 28px;
  cursor: pointer;
  transition: 0.3s;
  ${({ pos }) =>
    pos === "left"
      ? css`
          left: -20px;
        `
      : css`
          right: -20px;
        `}
  &:hover {
    background-color: rgba(248, 248, 248, 0.7);
  }
`;

const BelowInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  color: #00964a;
  font-size: 12px;
`;

const MyHiOutlineHeart = styled(HiOutlineHeart)`
  font-size: 17px;
  margin: 0 5px 0 0;
`;

const MyMdComment = styled(MdComment)`
  font-size: 17px;
  margin: 0 5px 0 0;
  display: flex;
`;

const LikeNum = styled.span`
  left: 17px;
`;

const CommentNum = styled.span`
  right: 0;
`;

const Like = styled.div`
  display: flex;
` 
const Comment = styled(Like)``

export default function MainPost({
  postId,
  author,
  title,
  content,
  imgUrl,
  like,
  comment,
}: PostType): JSX.Element {
  const [srolled, setScrolled] = useRecoilState<number>(scrolledState);
  const [sliderCount, setSliderCount] = useState<number>(0);
  const navigate = useNavigate();
  const handleSliderToLeft = (): void => {
    setSliderCount((prev) => prev - 1);
  };

  
  const handleSliderToRight = (): void => {
    setSliderCount((prev) => prev + 1);
  };
  const SwitchDetail = (): void => {
    navigate(`./detailPost/${postId}`);
    sessionStorage.setItem("scrolledHeight", `${srolled}`);
  };

  return (
      <Wrapper>
        <Inner>
          <TitleandUser>
            <UserImg></UserImg>
            <Title onClick={SwitchDetail}>{title}</Title>
            <Author>{author}</Author>
          </TitleandUser>
          <Content>{content}</Content>
          <SlideWrapper>
            {imgUrl.map((url, index) => (
              <ImageContainer url={url} key={index} sliderCount={sliderCount} />
            ))}
          </SlideWrapper>
          {sliderCount > 0 && (
            <ArrowContainer pos={"left"} onClick={handleSliderToLeft}>
              <MdKeyboardArrowLeft />
            </ArrowContainer>
          )}
          {sliderCount < 2 && (
            <ArrowContainer pos={"right"} onClick={handleSliderToRight}>
              <MdKeyboardArrowRight />
            </ArrowContainer>
          )}
        </Inner>

        <BelowInner>
          <Like>
            <MyHiOutlineHeart />
            <LikeNum>{like}</LikeNum>
          </Like>
          <Comment>
            <MyMdComment />
            <CommentNum>{comment.length}</CommentNum>
          </Comment>
        </BelowInner>
          <CommentInput />
      </Wrapper>
  );
}
