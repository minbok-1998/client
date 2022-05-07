import React from "react";
import styled, { css } from "styled-components";

interface propsType {
  url: string;
  sliderCount: number;
}

const ImageBox = styled.div<{ transformWidth: string }>`
  width: 142px;
  height: 134px;
  background-color: #e5e5e5;
  margin: 0 14px 0 0;
  flex-shrink: 0;
  transform: translateX(${(props) => props.transformWidth});
  transition: 1s;
`;

const MyImg = styled.img`
  width: 142px;
  height: 134px;
  object-fit: contain;
`;

export default function ImageContainer({
  url,
  sliderCount,
}: propsType): JSX.Element {
  return (
    <ImageBox transformWidth={`${sliderCount * -156}px`}>
      <MyImg src={url} alt={"필요할까?"} />
    </ImageBox>
  );
}
