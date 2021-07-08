import React, { useState, useEffect } from "react"

import { Link } from 'react-router-dom';

import { Input, Button, Form } from 'antd';

import LoadingProgress from "components/Loading"

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { showAuthLoader } from "appRedux/actions/common"
import { requestUpdateUser } from "appRedux/actions/auth"

const tailLayout = { wrapperCol: { offset: 8, span: 16, }, };
const UserProfile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { authUser, user } = useSelector(({ auth }) => auth);

    const { loader } = useSelector(({ common }) => common);
    const [form] = Form.useForm();

    useEffect(() => {
        if (authUser === null) {
            history.push('/home');
        } else {
            form.setFieldsValue({ fullname: user.fullname, email: user.email, role: user.role, branch: user.branch, telephone: user.telephone, });
        }
    }, [user])
    const onFinish = values => {
        dispatch(showAuthLoader());
        const data = { ...user, ...values, id: authUser, }
     
        dispatch(requestUpdateUser(data));
    }
    const onFinishFailed = values => {
        // console.log(values)
    }
    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="profile-form">
                    <h2 className="login-heading"><span> Update Profile </span></h2>
                    <LoadingProgress loading={loader} />
                    <div style={{ paddingTop: 30 }}>
                        <Form name="Update Profile" form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}
                            size="large" labelCol={{ span: 6, }} wrapperCol={{ span: 16, }} >
                            <Form.Item label="Fullname" name="fullname" hasFeedback rules={[{ required: true, message: 'Please Enter Fullname', },]}  >
                                <Input placeholder="Fullname" />
                            </Form.Item>
                            <Form.Item label="Email" name="email" hasFeedback rules={[{ required: true, message: 'Please Enter Email', },]} >
                                <Input placeholder="Email" />
                            </Form.Item>
                            <Form.Item label="Contact" name="telephone" hasFeedback rules={[{ required: true, message: 'Please Enter Telephone', },]} >
                                <Input placeholder="Telephone" />
                            </Form.Item>
                            <Form.Item label="Role" name="role" hasFeedback>
                                <Input placeholder="Role" disabled />
                            </Form.Item>


                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Update Profile</Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <Link to="/home" style={{ display: 'flex', justifyContent: 'center' }}>
                        <span>Homepage</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserProfile