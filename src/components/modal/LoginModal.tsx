import { useState } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    position: absolute;
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color:#00000073;
    font-family: Noto sans KR;
    align-items: center;
    justify-content: center;
    z-index: 999;
`

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 180px;
    border-radius: 20px;
    background-color: #f8f8f8;
    box-shadow: 4px 4px 4px 0px #00000040;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

const Alert = styled.p`
    font-size: 16px;
    font-weight: 400;
`

const OK = styled.button`
    display: flex;
    font-size: 18px;
    font-weight: 500;
    border: none;
    background-color: transparent;
    color: #00964A;
    align-self: flex-end;
    margin: 32px 46px 0 0;
`

function LoginModal():JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const ModalOpen = () => {
        if(isOpen == false) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }

    return(
            <Wrap>
                <Cont>
                    <Alert>로그인이 필요한 서비스 입니다.</Alert>
                    <OK>확인</OK>
                </Cont>
            </Wrap>
    )
}

export default LoginModal;