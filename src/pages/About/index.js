import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';

import { Card, Form, Input, Row, Col, Button } from "antd";
import { SaveOutlined } from "@ant-design/icons"

import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import ImageUploader from "./ImageUpload";

import { requestSaveAbout } from "appRedux/actions/webpage"
import { showAuthLoader, } from "appRedux/actions/common"

const About = () => {
    const dispatch = useDispatch()
    const { authUser, user } = useSelector(({ auth }) => auth);

    const [state, setState] = useState({
        description: EditorState.createEmpty(),
        aboutImage: null,
    })


    /*   const handleChange = (value) => {
          setState({ ...state, aboutImage: value })
      } */

    const onEditorStateChange = (description) => {
        setState({
            ...state,
            description,
        });
    };
    const onFinishFailed = errorInfo => {
        // console.log(errorInfo)
    }
    const SaveHandler = async (record) => {
        const data = {
            ...record,
            ...state,
            description: ConvertToText(state.description),
            del_flg: 0,
            created_user: authUser,
            company_id: user.company_id,
            group_name: 'about'
        }
        console.log(data)
        dispatch(showAuthLoader())
        dispatch(requestSaveAbout(data))
        /*   const operation = `Created a ledger, ${record.ac_head}`
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
              company_id: user.company_id,
              branch_id: user.branch_id,
              created_user: authUser,
              ...record
          }
       //   console.log(data)
          dispatch(showAuthLoader())
          dispatch(requestSaveLedger(data)) */
    }
    return (
        <div>
            <Card className="gx-card" title={"About"}>
                <Form name="Add" onFinish={SaveHandler} onFinishFailed={onFinishFailed} size="large"
                    labelCol={{ span: 6, }} wrapperCol={{ span: 16, }}>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="Title" name="title"
                                rules={[{ required: true, message: 'Please Enter Title', },]}
                            >
                                <Input placeholder="Title" allowClear />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Subtitle" name="subtitle"
                                rules={[{ required: true, message: 'Please Enter Subtitle', },]}
                            >
                                <Input placeholder="Subtitle" allowClear />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify="end">
                        <Col span={3}></Col>
                        <Col span={5}>
                            <div className="gx-form-group">
                                <ImageUploader image_title="Upload Image" imageChange={(aboutImage) =>
                                    setState({ ...state, aboutImage })} />

                            </div>
                            <Form.Item style={{ marginTop: 20 }}>
                                <Button type="primary" htmlType="submit">
                                    <SaveOutlined />  Save
                                </Button>
                            </Form.Item>
                        </Col>
                        <Col span={16}>
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




                </Form>

            </Card>
        </div>
    )
}

const ConvertToText = (description) => draftToHtml(convertToRaw(description.getCurrentContent()))

export default About;