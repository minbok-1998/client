import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import DetailPost from "../components/detailPost/DetailPost";
import { postfetcher } from "../api/getPostApi";
// 댓글 몇개 보여줄지 정하고 펼쳐보기 기능 추가해야함
import { PostType } from "../type/dataType";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 842px;
  height: 100%;
  background-color: #00000073;
  margin: 0 0 0 113px;
`;

const PostBox = styled.div`
  height: 100%;
  overflow: auto;
`;

function DetailPage() {
  const [data, setdata] = useState<PostType | null>();
  const { postId } = useParams();

  useEffect(() => {
    postId &&
      postfetcher(postId).then((res) => {
        setdata(res);
        console.log(data);
      });
  }, []);

  return (
    <Wrap>
      <PostBox>
        {data && (
          <DetailPost
            postId={data.postId}
            author={data.author}
            title={data.title}
            content={data.content}
            imgUrl={data.imgUrl}
            like={data.like}
            comment={data.comment}
            key={data.postId}
          />
        )}
      </PostBox>
    </Wrap>
  );
}

export default DetailPage;