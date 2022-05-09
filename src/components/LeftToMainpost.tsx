import styled from "styled-components";
import logo from "../img/logo.svg";
import { ReactComponent as MoveToMain } from '../img/chat.svg';
import { ReactComponent as MoveToAdd } from '../img/addPost.svg';
import { ReactComponent as MoveToMajor } from '../img/chemistry.svg';
import { Link } from 'react-router-dom';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 304px;
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

function Left():JSX.Element {
    return (
        <Wrap>
        <Link to = "/">
          <Logo src={logo}></Logo>
        </Link>
          <StyledMoveToMain />
          <StyledMoveToAdd />
          <StyledMoveToMajor />
        </Wrap>
    )
}

export default Left;