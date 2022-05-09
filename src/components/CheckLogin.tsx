import React from "react";
import styled from "styled-components";
// import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Login = styled.div`
    display: flex;
    height: 26px;
    align-items: center;
    right: 52px;
    align-self: flex-end;
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

function CheckLogin(): JSX.Element {
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

    const check = ():void => {
        setLogin(!login)
        setName(!name)
    }

    return(
        <Login>
            <User>{name ? '이혜영' : '게스트'}님</User>
            <Link to='/login'>
            <Btn>{login ? 'LOGOUT' : 'LOGIN'}</Btn>
            </Link>
        </Login>

    );
}

export default CheckLogin;