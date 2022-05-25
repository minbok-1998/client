import React, { useState } from "react";
import styled from "styled-components";
// import { ImPlay3 } from "react-icons/im";
// import axios from "axios";

const MyInput = styled.input`
  width: 100%;
  height: 41px;
  border-radius: 10px;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25),
    inset 0px 1px 4px rgba(0, 0, 0, 0.25);
  text-indent: 18px;
  border: none;
  background-color: #fff;
  margin: 20px 0 0 0;
`;

export default function CommentInput(): JSX.Element {
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
      <MyInput
        type="text"
        placeholder="댓글을 입력하세요"
        value={comment}
        onChange={handleChange}
        maxLength={30}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}
