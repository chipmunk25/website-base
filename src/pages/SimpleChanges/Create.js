import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Row, Col } from "antd"
import { SaveOutlined } from "@ant-design/icons"

import {
    convertToRaw,

} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const tailLayout = {
    wrapperCol: {
        offset: 12,
        span: 12,
    },
};

const Create = ({ onFinish, onFinishFailed, hideModalLoader, onEditorStateChange, state }) => {
    useEffect(() => {
        setTimeout(() => {
            hideModalLoader()
        }, 1500);

    }, [])

    return (
        <div>
            <Form name="Add" onFinish={onFinish} onFinishFailed={onFinishFailed} size="large"
                labelCol={{ span: 6, }} wrapperCol={{ span: 16, }}>
                <Row justify="space-around">
                    <Col span={10}>
                        <Form.Item label="Title" name="title"
                            rules={[{ required: true, message: 'Please Enter Title', },]}
                        >
                            <Input placeholder="Title" allowClear />
                        </Form.Item>

                      {/*   <Form.Item label="Description" name="description"
                            rules={[{ required: true, message: 'Please Enter Description', },]}
                        >
                            <Input placeholder="Description" allowClear />
                        </Form.Item> */}
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
                           // disabled
                            value={ConvertToText(state.description)}
                        />
                    </Col>
                </Row>




            </Form>
        </div>
    );
};

const ConvertToText = (description) => draftToHtml(convertToRaw(description.getCurrentContent()))



export default Create;