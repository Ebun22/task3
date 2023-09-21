'use client'
import '../App.css';
import { UseAuthContext } from '../Context/AuthContext';
import React from 'react';


const Navbar = () => {

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
        </div>
    )
}

export default Navbar