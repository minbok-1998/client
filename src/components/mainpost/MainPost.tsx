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
import PostPage from "../../pages/PostPage";
import { useNavigate } from "react-router-dom";
import { PostType } from "../../type/dataType";
import { useRecoilState } from "recoil";
import { scrolledState } from "../../recoil/store";
const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 600px;
  height: 451px;
  background-color: #f8f8f8;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-top: 77px;
`;

const Inner = styled.div`
  position: relative;
  width: 455px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  display: inline-block;
  box-sizing: border-box;
  color: #00964a;
  font-weight: 700;
  line-height: 26px;
  font-size: 18px;
  width: 300px;
  height: 26px;
  margin: 0 auto;
  cursor: pointer;
`;

export const Author = styled.p`
  position: absolute;
  display: inline-block;
  box-sizing: border-box;
  width: 40px;
  height: 17px;
  color: #7e7e7e;
  font-size: 12px;
  line-height: 17.38px;
  top: 8px;
  right: 0;
  margin: 0 auto;
`;

export const Content = styled.p`
  box-sizing: border-box;
  font-weight: 400;
  line-height: 18.82px;
  width: 455px;
  height: 76px;
  margin-top: 7px;
`;

const SlideWrapper = styled.div`
  display: flex;
  width: 455px;
  height: auto;
  overflow: hidden;
`;

export const ArrowContainer = styled.div<{ pos: "left" | "right" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: rgba(248, 248, 248, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  font-size: 28px;
  bottom: 50px;
  cursor: pointer;
  transition: 0.3s;
  ${({ pos }) =>
    pos === "left"
      ? css`
          left: -16px;
        `
      : css`
          right: -16px;
        `}
  &:hover {
    background-color: rgba(248, 248, 248, 0.7);
  }
`;

const BelowInner = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 488px;
  padding: 0;
  color: #00964a;
  font-size: 12px;
  margin: 8px auto;
`;

const MyHiOutlineHeart = styled(HiOutlineHeart)`
  position: absolute;
  font-size: 17px;
`;

const MyMdComment = styled(MdComment)`
  position: absolute;
  font-size: 17px;
  right: 13px;
`;

const LikeNum = styled.span`
  position: absolute;
  left: 17px;
`;
const CommentNum = styled.span`
  position: absolute;
  right: 0;
`;

const Line = styled.div`
  width: 488px;
  height: 1px;
  background-color: #00964a;
  position: absolute;
  top: 22px;
`;

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
    <Wrap>
      <Wrapper>
        <Inner>
          <Title onClick={SwitchDetail}>{title}</Title>
          <Author>{author}</Author>
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
          <MyHiOutlineHeart />
          <LikeNum>{like}</LikeNum>
          <MyMdComment />
          <CommentNum>{comment.length}</CommentNum>
          <Line />
          <CommentInput />
        </BelowInner>
      </Wrapper>
    </Wrap>
  );
}
