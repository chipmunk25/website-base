import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Select, Row, Col } from "antd"
import { SaveOutlined } from "@ant-design/icons"
import ImageUploader from "./ImageUpload"
const tailLayout = {
    wrapperCol: {
        offset: 12,
        span: 12,
    },
};
const { Option } = Select;
const Create = ({ onFinish, onFinishFailed, hideModalLoader, linkGroupLists, setState, state }) => {
    useEffect(() => {
        setTimeout(() => {
            hideModalLoader()
        }, 1500);

    }, [])

    const onChange = (value, text) => {
        console.log(value, text)
        setState({ ...state, group_name: text.children })
    }
    return (
        <div>
            <Form name="Add" onFinish={onFinish} onFinishFailed={onFinishFailed} size="large"
                labelCol={{ span: 6, }} wrapperCol={{ span: 16, }}>
               
                <Form.Item label="Title" name="title"
                   
                >
                    <Input placeholder="Title" allowClear />
                </Form.Item>

               
                <Form.Item label="Description" name="description"
                >
                    <Input placeholder="Description" allowClear />
                </Form.Item>
                <Form.Item label="Url" name="url"
                    rules={[{ required: true, message: 'Please Enter Url', },]}
                >
                    <Input placeholder="Url" allowClear />
                </Form.Item>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}>
                        <div className="gx-form-group">
                            <ImageUploader image_title="Upload File" imageChange={(aboutImage) =>
                                setState({ ...state, aboutImage })} />

                        </div>
                    </Col>
                </Row>

                <Form.Item {...tailLayout} style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
                    <Button type="primary" htmlType="submit">
                        <SaveOutlined />  Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

const accesstype = [
    { id: 1, name: 'PUBLIC' },
    { id: 2, name: 'PROTECTED' },
]

export default Create;