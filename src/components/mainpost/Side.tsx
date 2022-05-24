import styled from "styled-components";
import logo from "../../img/logo.svg";
import { ReactComponent as MoveToMain } from '../../img/chat.svg';
import { ReactComponent as MoveToAdd } from '../../img/addPost.svg';
import { ReactComponent as MoveToMajor } from '../../img/chemistry.svg';
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import SearchBar from "../right/PrintSearchBar";
import CheckLogin from "../right/CheckLogin";
import TopPost from "../right/PrintTopPost";
import MyPost from "../right/PrintMyPost";
import { useState } from "react";

const Left = styled.div`
  position: absolute;
  width: 113px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0 64.35185185185vh 0;
  background-color: #F8F8F8;
  box-shadow: 4px 0px 4px 0px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
`

const Logo = styled.img`
  width: 53.501800537109375px;
  height: 32px;
  margin-bottom: 14px;
  cursor: pointer;
`

const StyledMoveToMain = styled(MoveToMain)`
  width: 32px;
  fill: #7E7E7E;
  cursor: pointer;

  :hover {
    fill: #00964A
  }
`

const StyledMoveToMajor = styled(MoveToMajor)`
  width: 32px;
  fill: #7E7E7E;
  cursor: pointer;

  :hover {
    fill: #00964A
  }
`

const StyledMoveToAdd = styled(MoveToAdd)`
  width: 32px;
  fill: #7E7E7E;
  cursor: pointer;

  :hover {
    fill: #00964A
  }
`

const Right = styled.div`
  position: absolute;
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

function LeftSide():JSX.Element {
  const [isLogin, setIsLogin] = useState(false);
  const id = sessionStorage.getItem('id');

  const havetoLogin = () => {
    
  }

    return (
      <>
        <Left>
          <Link to = "/">
            <Logo src={logo}></Logo>
          </Link>
          <Link to = "/">
            <StyledMoveToMain />
          </Link>
          <Link to = "/post">
            <StyledMoveToAdd onClick={havetoLogin}/>
          </Link>
          <Link to = "#">
            <StyledMoveToMajor />
          </Link>
        </Left>

        <Right>
            <CheckLogin />
            <SearchBar />
            <TopPost />
            <MyPost />
        </Right>
        <Outlet />
      </>
    )
}

export default LeftSide;