import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Row, Col, Select } from "antd"
import { SaveOutlined } from "@ant-design/icons"
import ConvertFromHTMLtoTEXT from "utils/ConvertHTMLtoText"
import {
    convertToRaw,

} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

const tailLayout = {
    wrapperCol: {
        offset: 12,
        span: 12,
    },
};

const Edit = ({ detail, onFinish, onFinishFailed, hideModalLoader, onEditorStateChange, state }) => {
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue({
            title: detail.title,
          //  description: ConvertFromHTMLtoTEXT(JSON.parse(detail.description)),
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
                <Row justify="space-around">
                    <Col span={10}>
                        <Form.Item label="Title" name="title"
                            rules={[{ required: true, message: 'Please Enter Title', },]}
                        >
                            <Input placeholder="Title" allowClear />
                        </Form.Item>
                        <Form.Item label="Page Type" name="page_type"
                            rules={[{ required: true, message: 'Please Enter Page Type', },]}
                        >
                            <Input placeholder="Page Type" allowClear />
                        </Form.Item>
                        <Form.Item {...tailLayout} style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
                            <Button type="primary" htmlType="submit">
                                <SaveOutlined />  Save
                            </Button>
                        </Form.Item>
                    </Col>
                    <Col span={14}>
                        <Editor editorStyle={{
                            width: '100%', minHeight: 200, borderWidth: 1,
                            borderStyle: 'solid', borderColor: 'lightgray'
                        }}
                            editorState={state.description}
                            wrapperClassName="demo-wrapper"
                            onEditorStateChange={onEditorStateChange}
                        />
                        <textarea style={{ width: '100%', height: 200 }}
                             disabled
                            value={ConvertToText(state.description)}
                        /> 
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


const ConvertToText = (description) => draftToHtml(convertToRaw(description.getCurrentContent()))

export default Edit;