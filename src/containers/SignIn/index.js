import React from "react"
import LoginForm from './loginform';


const SignIn = () => {

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