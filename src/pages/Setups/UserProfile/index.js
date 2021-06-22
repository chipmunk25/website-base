import React, { useEffect } from 'react';
import { Row, Col, Form, Input, Button } from 'antd'
import Widget from 'components/Widget';

import { useDispatch, useSelector } from "react-redux";

import { showAuthLoader } from "appRedux/actions/common"

import { requestUpdateUser } from "appRedux/actions/auth"

import moment from "moment"
import { getClientIp } from "utils/getTheIp"

const tailLayout = { wrapperCol: { offset: 8, span: 16, }, };
const UserProfile = () => {
    const dispatch = useDispatch();
    const { authUser, user } = useSelector(({ auth }) => auth);

    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({ fullname: user.fullname, email: user.email, role: user.role, branch: user.branch, telephone: user.telephone, });
    }, [user])

    const onFinish = async values => {
        dispatch(showAuthLoader());
        const operation = `Updated his/her porifle.`
        const user_ipaddress = await getClientIp()
        const logs = {
            user_ipaddress,
            company_id: user.company_id,
            trans_date: moment().format("YYYY-MM-DD"),
            operation,
            created_user: authUser,
        }
        const data = {
            logs,
            ...user,
            ...values,
            id: authUser,
        }
        // console.log(data)
        dispatch(requestUpdateUser(data));
    }
    const onFinishFailed = values => {
        // console.log(values)
    }
    return (
        <div>
            <Row justify="center">
                <Col span={12}>
                    <Widget>
                        <h1>Update Profile</h1>
                        <Form name="Update Profile" form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}
                            size="large" labelCol={{ span: 6, }} wrapperCol={{ span: 16, }} >
                            <Form.Item label="Fullname" name="fullname" hasFeedback rules={[{ required: true, message: 'Please Enter Fullname', },]}  >
                                <Input placeholder="Fullname" />
                            </Form.Item>
                            <Form.Item label="Email" name="email" hasFeedback rules={[{ required: true, message: 'Please Enter Email', },]} >
                                <Input placeholder="Email" />
                            </Form.Item>
                            <Form.Item label="Telephone" name="telephone" hasFeedback rules={[{ required: true, message: 'Please Enter Telephone', },]} >
                                <Input placeholder="Telephone" />
                            </Form.Item>
                            <Form.Item label="Role" name="role" hasFeedback>
                                <Input placeholder="Role" disabled />
                            </Form.Item>
                            <Form.Item label="Branch" name="branch" hasFeedback>
                                <Input placeholder="branch" disabled />
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Update Profile</Button>
                            </Form.Item>
                        </Form>
                    </Widget>
                </Col>
            </Row>
        </div>

    );
};

export default UserProfile;