'use client'
import React from 'react';
import { UseAuthContext } from '../Context/AuthContext';
import { useStateContext } from '../Context/context';

const NavLog = () => {
    const { hasAccount, setHasAccount, showSignUp, setShowSignUp } = useStateContext()
    const { signup, currentUser, setIsLogin, isLogin } = UseAuthContext();

    return (
        <div className='detail-cont'>

            <div className='details'>
                <p onClick={setShowSignUp(false)}>Login</p>
            </div>


        </div>
    )
}

export default NavLog;