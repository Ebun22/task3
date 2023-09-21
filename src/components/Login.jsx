'use client'
import React, { useRef, useState, useEffect } from 'react';
import { useStateContext } from '../Context/context';
import { UseAuthContext } from '../Context/AuthContext';

const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();

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
          
           
            return await login(userRef.current.value, passwordRef.current.value)
            
        //else {
        //     // Handle unsuccessful login here (e.g., show an error message to the user)
        //     setError("Account doesn't exits");
        // }
    } catch (error) {
        console.log(error);
       
            setError("Account doesn't exits")
    }
    // after waiting for login
    setLoading(false);

 
}


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

                <button  type='button'  className='btn' onClick={(e) => handleSubmit(e)}>Login</button>
            </form>
        </div>
    </>
)
}

export default Login