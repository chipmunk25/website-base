import React, { useState } from "react"


import { Link } from 'react-router-dom';

import { Input, Button, message } from 'antd';

import LoadingProgress from "components/Loading"

import { useDispatch, useSelector } from "react-redux";

import { showAuthLoader } from "appRedux/actions/common"
import { requestResetPassword } from "appRedux/actions/auth"
import * as pwdgen from "generate-password"
const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const dispatch = useDispatch();

    const { loader } = useSelector(({ common }) => common);
    const SendMailHandler = () => {
        if (email === "") {
            message.error("Email is required")
            return
        }
        dispatch(showAuthLoader());
        dispatch(requestResetPassword({
            email, password: pwdgen.generate({
                length: 10, numbers: true, symbols: true, lowercase: true,
                uppercase: true, strict: true, exclude: "'"
            })
        }));
    }

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="login-form">
                    <h2 className="login-heading"><span> UKEXABG </span></h2>
                    <p className="login-paragraph">You must enter your email to get <strong> new password</strong></p>
                    <LoadingProgress loading={loader} />
                    <div style={{ paddingTop: 30 }}>
                        <Input placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
                        <div style={{ padding: 20 }}>
                            <Button type="primary" size="large" block onClick={SendMailHandler}
                                className="gx-mb-0 btn-get-started" htmlType="submit">
                                <i className="bi bi-envelope p-r-10"></i>
                                Send Email
                            </Button>
                        </div>
                    </div>
                    <h2 className="login-heading"><span> OR</span></h2>
                    <Link to="/signin" style={{ display: 'flex', justifyContent: 'center' }}>
                        <span>Signin</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword