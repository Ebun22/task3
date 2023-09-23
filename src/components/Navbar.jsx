'use client'
import '../App.css';
import { UseAuthContext } from '../Context/AuthContext';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { isLogin, setIsLogin } = UseAuthContext();
    
    const handLogout = () => {
        setIsLogin(false)
    }
    return (
        <div className="navCont">
            <div className='inner-nav-cont'>
                <img
                    src='./images/logo.png'
                    alt="logo"
                    className="logo"
                />
                <h3 className="gall-name">CamGallary</h3>
            </div>
            <div>
{
    isLogin ? (
        <button className="logout" onClick={handLogout}>Logout</button>
    ) : (
        <div className='detail-cont'>
        <div className='details'>
            <Link to="/login">Login</Link>
        </div>
    </div>
    )
}

            </div>
        </div>
    )
}

export default Navbar