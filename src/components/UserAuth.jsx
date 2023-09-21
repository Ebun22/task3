'use client'
import React from 'react';
import { useStateContext } from '../Context/context';
import { Login, Navbar, SignUp } from '.';

const UserAuth = () => {
    const { hasAccount, setHasAccount,showSignUp, setShowSignUp } = useStateContext()
    return (
        <div>
            <Navbar />
            {
                !showSignUp ? (
                    <>
                        <Login />
                        <div className="flex flex-row py-6 w-full justify-center text-center">
                            <p>Need an account?
                                <button className="switch" onClick={() => setShowSignUp(true)}>SignUp</button></p>
                        </div>
                    </>
                ) : (
                    <>
                        <SignUp />
                        <div className="flex flex-row py-6 w-full justify-center text-center">
                            <p >Already have an account?
                                <button className="switch" onClick={() => setShowSignUp(false)}>Login</button></p>
                        </div>
                    </>

                )
            }

        </div>
    )
}

export default UserAuth;