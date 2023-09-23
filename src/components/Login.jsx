'use client'
import React, { useRef, useState, useEffect } from 'react';
import { useStateContext } from '../Context/context';
import { UseAuthContext } from '../Context/AuthContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();
    useEffect(() => {
        userRef.current.focus();
    }, [])

    const { isLogin, setIsLogin, setShowAuth } = useStateContext()
    const { login, currentUser, error, setError } = UseAuthContext();
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Set error to empty when creating a new account
            setError('');
            setLoading(true)
    
            const response = await login(userRef.current.value, passwordRef.current.value)
             navigate('/')
            return response

        } catch (error) {
            console.log(error);

            setError("Account doesn't exits")
        }

        // after waiting for login
        setLoading(false);


    }
    useEffect(() => {
        if (isLogin) {
           return <Navigate to="/" />
          }
    }, [isLogin])

    return (
        <>
            <div className='signup-cont'>
                <form className='signup-form' onSubmit={(e) => handleSubmit(e)}>
                    <h1 className='py-8 text-4xl font-bold'>Login</h1>

                    <p className={`${error ? "error-message" : "hidden"}`}>{error}</p>
                    <div className='input-cont'>
                        <label className="font-bold">UserName:</label>
                        <input ref={userRef} type='text' className='p-1 border-2 border-black rounded-sm' />
                    </div>
                    <div className='input-cont'>
                        <label className="font-bold">Password:</label>
                        <input ref={passwordRef} type='password' className='p-1 border-2 border-black rounded-sm' />
                    </div>

                    <button type='button' className='btn' onClick={(e) => handleSubmit(e)}>
                        Login
                    </button>

                </form>
                <div className="flex flex-row py-6 w-full justify-center text-center">
                    <p>Don't have an account?
                        <Link to="/signup" >
                            <button className="switch">Signup</button>
                        </Link>
                    </p>
                </div>
            </div >
        </>
    )
}

export default Login