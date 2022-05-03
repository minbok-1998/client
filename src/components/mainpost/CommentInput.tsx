import React, { useState } from "react";
import styled from "styled-components";
import { ImPlay3 } from "react-icons/im";
// import axios from "axios";

const MyInput = styled.input`
  box-sizing: border-box;
  width: 488px;
  height: 33px;
  border-radius: 50px;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25),
    inset 0px 1px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 36px;
  margin: 0;
  border: 1px solid #7e7e7e;
  text-indent: 18px;
`;

const MyImPlay3 = styled(ImPlay3)`
  font-size: 24px;
  position: absolute;
  right: 15px;
  top: 41px;
  cursor: pointer;
`;

export default function CommentInput(): JSX.Element {
  const [comment, setComment] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleClick = () => {
    // axios.post("uri", {
    //   userId: "",
    //   postId: "",
    //   comment: comment,
    // });
    alert(comment);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
      <MyImPlay3 onClick={handleClick} />
    </>
  );
}
