/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import {Menu} from 'antd';
import axios from 'axios';
import {USER_SERVER} from '../../../Config';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function RightMenu(props) {
    const user = useSelector(state => state.user)
    console.log("RightMenu user : ", user)
    const link = useNavigate();

    const items = [
        {
            label: (
                <a href="/login">
                    SignIn
                </a>
            ),
            key: 'mail',
        },
        {
            label: (
                <a href="/register">
                    SignUp
                </a>
            ),
            key: 'app',
        },
    ];

    const items2 = [
        {
            label: 'Logout',
            key: 'logout',
        }
    ];

    const logoutHandler = () => {
        axios.get(`${USER_SERVER}/logout`).then(response => {
            if (response.status === 200) {
                link("/login");
            } else {
                alert('Log Out Failed')
            }
        });
    };

    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        if (e.key == 'logout') {
            logoutHandler()
        }
    };

    if (user.userData && !user.userData.isAuth) {
        return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>;
    } else {
        return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items2}/>;
    }
}

export default RightMenu;

