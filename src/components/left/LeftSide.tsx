import styled from "styled-components";
import logo from "../../img/logo.svg";
import { ReactComponent as MoveToMain } from "../../img/chat.svg";
import { ReactComponent as MoveToAdd } from "../../img/addPost.svg";
import { ReactComponent as MoveToMajor } from "../../img/chemistry.svg";
import { Link } from "react-router-dom";

const Left = styled.div`
  /* position: absolute; */
  width: 113px;
  min-width: 113px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0 64.35185185185vh 0;
  background-color: #f8f8f8;
  box-shadow: 4px 0px 4px 0px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
`;

const Logo = styled.img`
  width: 53.501800537109375px;
  height: 32px;
  margin-bottom: 14px;
  cursor: pointer;
`;

const StyledMoveToMain = styled(MoveToMain)`
  width: 32px;
  fill: #7e7e7e;
  cursor: pointer;

  :hover {
    fill: #00964a;
  }
`;

const StyledMoveToMajor = styled(MoveToMajor)`
  width: 32px;
  fill: #7e7e7e;
  cursor: pointer;

  :hover {
    fill: #00964a;
  }
`;

const StyledMoveToAdd = styled(MoveToAdd)`
  width: 32px;
  fill: #7e7e7e;
  cursor: pointer;

  :hover {
    fill: #00964a;
  }
`;

function LeftSide(): JSX.Element {
  return (
    <Left>
      <Link to="/">
        <Logo src={logo}></Logo>
      </Link>
      <Link to="/">
        <StyledMoveToMain />
      </Link>
      <Link to="/post">
        <StyledMoveToAdd />
      </Link>
      <Link to="#">
        <StyledMoveToMajor />
      </Link>
    </Left>
  );
}

export default LeftSide;
