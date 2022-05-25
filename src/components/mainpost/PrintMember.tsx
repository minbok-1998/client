import styled from "styled-components";

const ImgOne = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;

    ::after {
        content: '김범진';
        position: absolute;
        bottom: -30px;
        font-size: 18px;
    }
`
const ImgTwo =  styled(ImgOne)`
    margin: 0 20px 0 20px;

    ::after {
        content: '이혜영';
    }
`

const ImgThree =  styled(ImgOne)`
    ::after {
        content: '한재민';
    }
`

function PrintMember() {
    return (
        <>
        <ImgOne/>
        <ImgTwo/>
        <ImgThree/>
        </>
    );
  }
  
  export default PrintMember;