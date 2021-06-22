import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd'
import Widget from 'components/Widget';

import { useDispatch,useSelector } from "react-redux";

import { showAuthLoader } from "appRedux/actions/common"

import moment from "moment"

import { requestResetPassword } from "appRedux/actions/auth"
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const ResetPassword = () => {
    const dispatch = useDispatch();
    
    const { user, authUser } = useSelector(({ auth }) => auth);
    const onFinish = async values => {
       
     /*    const data = {
           
            ...values,
        } */
        dispatch(showAuthLoader());
        dispatch(requestResetPassword(values));
    }
    const onFinishFailed = values => {
        // console.log(values)
    }
    return (
        <div>
            <Row justify="center">
                <Col span={12}>
                    <Widget>
                        <h1>Reset Password</h1>
                        <Form name="reset_form"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            layout="vertical">
                            <Form.Item name="email" label="Email" hasFeedback rules={[{ required: true, type: 'email', message: 'The input is not valid E-mail!', }]}>
                                <Input placeholder="Email" />
                            </Form.Item>
                            <Form.Item label="Default Password" name="password" rules={[{ required: true, message: 'Default Password', },]} >
                                <Input placeholder="Default Password" allowClear />
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary login-btn" className="gx-mb-0" htmlType="submit">
                                    Reset Password
                    </Button>

                            </Form.Item>
                        </Form>
                    </Widget>
                </Col>
            </Row>
        </div>

    );
};

export default ResetPassword;