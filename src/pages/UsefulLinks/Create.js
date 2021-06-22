import React, { useEffect, useState } from 'react';
import { Form, Button, Input,Switch, Select } from "antd"
import { SaveOutlined } from "@ant-design/icons"
const tailLayout = {
    wrapperCol: {
        offset: 12,
        span: 12,
    },
};
const { Option } = Select;
const Create = ({ onFinish, onFinishFailed, hideModalLoader, linkGroupLists }) => {
    useEffect(() => {
        setTimeout(() => {
            hideModalLoader()
        }, 1500);

    }, [])

    return (
        <div>
            <Form name="Add" onFinish={onFinish} onFinishFailed={onFinishFailed} size="large"
                labelCol={{ span: 6, }} wrapperCol={{ span: 16, }}>
                <Form.Item label="Title" name="title"
                    rules={[{ required: true, message: 'Please Enter Title', },]}
                >
                    <Input placeholder="Title" allowClear />
                </Form.Item>
                <Form.Item label="Link Group" name="link_group_id"
                    rules={[{ required: true, message: 'Please Select Link Group', },]} >
                    <Select showSearch placeholder="Select Link Group" optionFilterProp="children"
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
                <Form.Item label="Open Tab" name="open_intab"  >
                    <Switch checkedChildren="Open in New Tab" unCheckedChildren="Open in same Tab" />
                </Form.Item>
                <Form.Item label="Url" name="url"
                    rules={[{ required: true, message: 'Please Enter Url', },]}
                >
                    <Input placeholder="Url" allowClear />
                </Form.Item>


                <Form.Item {...tailLayout} style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
                    <Button type="primary" htmlType="submit">
                        <SaveOutlined />  Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

const linktype = [
    { id: 1, name: 'DOCS' },
    { id: 2, name: 'LINKS' },
]

export default Create;