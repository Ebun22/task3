'use client'
import React from 'react';
import { UseAuthContext } from '../Context/AuthContext';

import { useStateContext } from '../Context/context';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserAuth from './UserAuth';

const NavLog = () => {
    const { hasAccount, setHasAccount, showSignUp, setShowSignUp, showAuth, setShowAuth } = useStateContext()
    const { signup, currentUser, setIsLogin, isLogin } = UseAuthContext();

    return (
        <>
            <div className='detail-cont'>
                <div className='details'>
                    <Link to="/userAuth">Login</Link>
                </div>
            </div>
            <Routes>
                <Route path='/userAuth' element={<UserAuth />} />
            </Routes>
        </>

    )
}

export default NavLog;