import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Select, Row, Col } from "antd"
import { SaveOutlined } from "@ant-design/icons"
import ImageUploader from "./ImageUpload"
import { FILE_URL } from '../../appRedux/api/root';
const tailLayout = {
    wrapperCol: {
        offset: 12,
        span: 12,
    },
};

const { TextArea } = Input;
const { Option } = Select;
const Edit = ({ detail, onFinish, onFinishFailed, hideModalLoader, linkGroupLists, setState, state }) => {
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue({
            title: detail.title,
            description: detail.description,
            url: detail.url,
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

                >
                    <Input placeholder="Title" allowClear />
                </Form.Item>


                <Form.Item label="Contact Details" name="description"
                >
                    <TextArea
                        placeholder="Contact Details"
                        autoSize={{ minRows: 2, }}
                        allowClear
                    />
                </Form.Item>
                <Form.Item label="Url" name="url"
                    rules={[{ required: true, message: 'Please Enter Url', },]}
                >
                    <Input placeholder="Url" allowClear />
                </Form.Item>
                <Row>
                    <Col span={6}></Col>
                    <Col span={8}>
                        <div className="gx-form-group">
                            <ImageUploader image_title="Upload File" imageChange={(aboutImage) =>
                                setState({ ...state, aboutImage })} />

                        </div>
                    </Col>
                    <Col span={10}>
                        <div className="gx-news-item">
                            <div className="gx-news-thumb">
                                <img className="gx-width-175 gx-rounded-lg" src={FILE_URL + detail.logo} alt="..." />
                            </div>
                        </div>
                    </Col>
                </Row>



                <Form.Item {...tailLayout} style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
                    <Button type="primary" htmlType="submit">
                        <SaveOutlined />  Update
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


export default Edit;