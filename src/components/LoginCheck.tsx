import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const Wrap = styled.div`
    position: relative;
    display: flex;
`;

const Login = styled.div`
    position: absolute;
    display: flex;
    height: 26px;
    align-items: center;
    right: 52px;
`

const User = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #000;
    right: 105px;
    padding-right: 15px;
`;

const Btn = styled.button`
    height: 25px;
    width: 87px;
    border: none;
    border-radius: 50px;
    background-color: #00964A;
    color: #F8F8F8;
    cursor: pointer;
`;

function LoginCheck(): JSX.Element {
    const [name, setName] = useState<boolean>(false);
    const [login, setLogin] = useState<boolean>(false);
    
    // useEffect(() => {
    //     axios({
    //         method:'get',
    //         url:'http://bit.ly/2mTM3nY',
    //       })
    //         .then(function (response) {
    //         });
    // })

    const checkLogin = ():void => {
        setLogin(!login)
        setName(!name)
    }

    return(
        <Wrap>
            <Login>
                <User>{name ? '이혜영' : '익명'}님</User>
                <Btn onClick={checkLogin}>{login ? 'LOGOUT' : 'LOGIN'}</Btn>
            </Login>
        </Wrap>

    );
}

export default LoginCheck;