import styled from "styled-components";
import SearchBar from "./PrintSearchBar";
import CheckLogin from "./CheckLogin";
import TopPost from "./PrintTopPost";
import MyPost from "./PrintMyPost";

const Right = styled.div`
    display: flex;
    flex-direction: column;
    /* position: absolute; */
    width: 484px;
    height: 100%;
    background-color: #F8F8F8;
    justify-content: space-between;
    right: 0;
    box-shadow: -4px 0px 4px 0px rgba(0, 0, 0, 0.15);
    padding: 24px 52px 16.11111111111vh 48px;
    box-sizing: border-box;
`

function RightSide() {
    return (
        <Right>
            <CheckLogin />
            <SearchBar />
            <TopPost />
            <MyPost />
        </Right>
    )

}

export default RightSide;