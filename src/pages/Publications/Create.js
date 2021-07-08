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
     //   console.log(value, text)
        setState({ ...state, group_name: text.children })
    }
    return (
        <div>
            <Form name="Add" onFinish={onFinish} onFinishFailed={onFinishFailed} size="large"
                labelCol={{ span: 6, }} wrapperCol={{ span: 16, }}>
                <Form.Item label="Doc Number" name="doc_number"
                    rules={[{ required: true, message: 'Please Enter Doc Number', },]}
                >
                    <Input placeholder="Doc Number" allowClear />
                </Form.Item>
                <Form.Item label="Title" name="title"
                    rules={[{ required: true, message: 'Please Enter Title', },]}
                >
                    <Input placeholder="Title" allowClear />
                </Form.Item>

                <Form.Item label="Link Group" name="link_group_id"
                    rules={[{ required: true, message: 'Please Select Link Group', },]}  >
                    <Select showSearch placeholder="Select Link Group" optionFilterProp="children" onChange={onChange}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        style={{ width: '100%' }}  >
                        {linkGroupLists && linkGroupLists.map((item, index) => (
                            <React.Fragment key={index}>
                                <Option key={item.id} value={item.id}>{item.title}</Option>
                            </React.Fragment>))}
                    </Select>
                </Form.Item>
                <Form.Item label="Description" name="description"
                    rules={[{ required: true, message: 'Please Enter Description', },]}
                >
                    <Input placeholder="Description" allowClear />
                </Form.Item>
                <Form.Item label="Access Type" name="access_type"
                    rules={[{ required: true, message: 'Please Select Access Type', },]} >
                    <Select showSearch placeholder="Select Access Type" optionFilterProp="children"
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        style={{ width: '100%' }}  >
                        {accesstype && accesstype.map((item, index) => (
                            <React.Fragment key={index}>
                                <Option key={item.id} value={item.name}>{item.name}</Option>
                            </React.Fragment>))}
                    </Select>
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