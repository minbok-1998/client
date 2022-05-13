import React, { useState } from "react";
import styled from "styled-components";

const CommentAuthor = styled.span`
  font-size: 18px;
  font-weight: 700;
  margin-right: 30px;
`;

const MyInput = styled.input`
  box-sizing: border-box;
  background-color: #f8f8f8;
  width: 469px;
  height: 36px;
  border-radius: 12px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  border: 1px solid #7e7e7e;
  text-indent: 18px;
  font-size: 14px;
`;

const SubmitBtn = styled.button`
  width: 47px;
  height: 26px;
  margin-left: 8px;
  background-color: #00964a;
  color: #fff;
  font-size: 13px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export default function DetailCommentInput(): JSX.Element {
  const [comment, setComment] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setComment(e.target.value);
  };

  const handleClick = (): void => {
    // axios.post("uri", {
    //   userId: "",
    //   postId: "",
    //   comment: comment,
    // });
    alert(comment);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      // axios.post("uri", {
      //   userId: "",
      //   postId: "",
      //   comment: comment,
      // });
      alert(comment);
    }
  };

  return (
    <>
      <CommentAuthor>{"이혜영"}</CommentAuthor>
      <MyInput
        type="text"
        placeholder="댓글을 입력하세요"
        value={comment}
        onChange={handleChange}
        maxLength={30}
        onKeyDown={handleKeyDown}
      />
      <SubmitBtn onClick={handleClick}>등록</SubmitBtn>
    </>
  );
}
