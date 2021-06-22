import React, { useEffect } from "react"
import LoginForm from './loginform';

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const SignIn = () => {
    const { authUser } = useSelector(({ auth }) => auth);
    const history = useHistory();

    useEffect(() => {
        if (authUser !== null) {
            history.push('/');
        }
    });

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="login-form">
                    <h2 className="login-heading"><span> UKEXABG</span></h2>
                    <p className="login-paragraph">You must enter a username and password to login to the application as<strong> Member</strong></p>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default SignIn