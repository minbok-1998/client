import React from "react";
import styled from "styled-components";

interface propType {
  author: string;
  content: string;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  font-weight: 700;
  margin-top: 20px;
`;

const Author = styled.span`
  font-size: 18px;
  margin-right: 30px;
`;

const Content = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 2;
`;

export default function Comment({ author, content }: propType): JSX.Element {
  return (
    <Wrapper>
      <Author>{author}</Author>
      <Content>{content}</Content>
    </Wrapper>
  );
}
