import React, { useState } from "react"


import { Link } from 'react-router-dom';



import LoadingProgress from "components/Loading"

import { useDispatch, useSelector } from "react-redux";


import { requestResetPassword } from "appRedux/actions/auth"
import * as pwdgen from "generate-password"
import { Row, Col,message, Form, Input, Button } from 'antd'



import { showAuthLoader } from "appRedux/actions/common"

import { requestUpdatePassword } from "appRedux/actions/auth"

const tailLayout = { wrapperCol: { offset: 8, span: 16, }, };
const ResetPassword = () => {
    
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const { loader } = useSelector(({ common }) => common);
    const { authUser, user } = useSelector(({ auth }) => auth);
    const onFinish = async values => {
        dispatch(showAuthLoader());
        const data = {
            id: authUser, ...values
        }
        dispatch(requestUpdatePassword(data));
    }
    const onFinishFailed = values => {
        // console.log(values)
    }

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="profile-form">
                    <h2 className="login-heading"><span> UKEXABG </span></h2>
                    <p className="login-paragraph">You must enter your email to get <strong> new password</strong></p>
                    <LoadingProgress loading={loader} />
                    
                    <Form name="change password" form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}
                        size="large" labelCol={{ span: 6, }} wrapperCol={{ span: 16, }} >
                        <Form.Item name="oldpassword" label="Old Password" rules={[{ required: true, message: 'Please input your password!', },]} hasFeedback >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item name="password" label="New Password" rules={[{ required: true, message: 'Please input your password!', },]} hasFeedback >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item name="confirmpassword" label="Confirm Password" dependencies={['password']} hasFeedback rules={[{ required: true, message: 'Please confirm your password!', },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) { return Promise.resolve(); }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),]} >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item {...tailLayout}> <Button type="primary" size="large" block htmlType="submit"  className="gx-mb-0 btn-get-started">
                            Update Password </Button></Form.Item>
                    </Form>
                    <h2 className="login-heading"><span> OR</span></h2>
                    <Link to="/signin" style={{ display: 'flex', justifyContent: 'center' }}>
                        <span>Signin</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword