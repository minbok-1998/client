import styled from "styled-components";
import SearchBar from "../right/PrintSearchBar";
import CheckLogin from "../right/CheckLogin";
import TopPost from "../right/PrintTopPost";
import MyPost from "../right/PrintMyPost";

const Right = styled.div`
  display: flex;
  flex-direction: column;
  /* position: absolute; */
  width: 484px;
  height: 100%;
  background-color: #f8f8f8;
  justify-content: space-between;
  right: 0;
  box-shadow: -4px 0px 4px 0px rgba(0, 0, 0, 0.15);
  padding: 24px 52px 16.11111111111vh 48px;
  box-sizing: border-box;
`;

function RightSide() {
  return (
    <Right>
      <CheckLogin />
      <SearchBar />
      <TopPost />
      <MyPost />
    </Right>
  );
}

export default RightSide;
