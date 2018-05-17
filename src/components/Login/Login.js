import React from 'react';
import logo from './communityBank copy.svg';
import './Login.css';


export default function Login () {

    return (
        <div className='login'>
            <img src={logo} alt='' />
            <a href={process.env.REACT_APP_LOGIN}>
                <button>LOGIN</button>
            </a>
        </div>
    )
}