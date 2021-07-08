import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Switch, Select } from "antd"
import { SaveOutlined } from "@ant-design/icons"
const tailLayout = {
    wrapperCol: {
        offset: 12,
        span: 12,
    },
};
const { Option } = Select;
const Edit = ({ detail, onFinish, onFinishFailed, hideModalLoader, }) => {
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue({
            title: detail.title,
            description: detail.description,
            page_type: detail.page_type,

        });
        setTimeout(() => {
            hideModalLoader()
        }, 1500);
    }, [detail])

    return (
        <div>
            <Form name="Edit" form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} size="large"
                labelCol={{ span: 6, }} wrapperCol={{ span: 16, }}>
                <Form.Item label="Title" name="title"
                    rules={[{ required: true, message: 'Please Enter Title', },]}
                >
                    <Input placeholder="Title" allowClear />
                </Form.Item>

                <Form.Item label="Description" name="description"
                    rules={[{ required: true, message: 'Please Enter Description', },]}
                >
                    <Input placeholder="Description" allowClear />
                </Form.Item>

                <Form.Item label="Page Type" name="page_type"
                    rules={[{ required: true, message: 'Please Enter Page Type', },]}
                >
                    <Input placeholder="Page Type" allowClear />
                </Form.Item>


                <Form.Item {...tailLayout} style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
                    <Button type="primary" htmlType="submit">
                        <SaveOutlined />  Update
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};



export default Edit;