import React from 'react';
import { Form, Input, Button } from "antd"
import {
    LockOutlined, UserOutlined
} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";

import moment from "moment"
import { showAuthLoader } from "appRedux/actions/common"
import { signInUser } from "appRedux/actions/auth"
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const LoginForm = () => {
    const dispatch = useDispatch();

    //   const { user, authUser, } = useSelector(({ auth }) => auth);
    const onFinish = async values => {

        //  const data = { logs, ...values }
        dispatch(showAuthLoader());
        dispatch(signInUser(values));
    }
    const onFinishFailed = values => {
        // console.log(values)
    }
    return (
        <div className="cs-login-form">
            <Form
                name="signin_form" onFinish={onFinish}
                onFinishFailed={onFinishFailed} layout="vertical"
            >
                <Form.Item name="email" label="Email" hasFeedback rules={[{ required: true, type: 'email', message: 'The input is not valid E-mail!', }]}>
                    <Input prefix={<UserOutlined />} placeholder="Email" />
                </Form.Item>
                <Form.Item hasFeedback name="password" label="Password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                    <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" size="large" block
                        className="gx-mb-0 btn-get-started" htmlType="submit">
                        <i className="bi bi-box-arrow-in-right p-r-10"></i>
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;