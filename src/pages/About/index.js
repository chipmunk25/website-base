import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';

import { Card, Form, Input, Row, Col, Button } from "antd";
import { SaveOutlined } from "@ant-design/icons"

import ReactHtmlParser from 'react-html-parser';
import { convertToRaw, ContentState, convertFromHTML, EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import ImageUploader from "./ImageUpload";

import { requestSaveAbout, requestGetAbout } from "appRedux/actions/webpage"
import { showAuthLoader, } from "appRedux/actions/common"
import { FILE_URL } from '../../appRedux/api/root';
import ConvertFromHTMLtoTEXT from "utils/ConvertHTMLtoText"

const About = () => {
    const dispatch = useDispatch()
    const { authUser, user } = useSelector(({ auth }) => auth);
    const { aboutLists } = useSelector(({ webpages }) => webpages);
    const [state, setState] = useState({
        description: EditorState.createEmpty(),
        aboutImage: null, id: undefined,
        url: "",
        filepath: ""
    })


    const onEditorStateChange = (description) => {
        setState({ ...state, description, });
    };
    const onFinishFailed = errorInfo => {
        // console.log(errorInfo)
    }

    const [form] = Form.useForm();
    //  console.log(aboutLists)
    useEffect(() => {
        dispatch(showAuthLoader())
        dispatch(requestGetAbout({ company_id: 1, del_flg: 0 }))
    }, [])

    useEffect(() => {
        const detail = aboutLists[0]
        //  console.log(detail)
        if (detail) {
            const description = ConvertFromHTMLtoTEXT(JSON.parse(detail.description))
            form.setFieldsValue({
                title: detail.title,
                subtitle: detail.subtitle,
                url: detail.url,
            });
            setState({ ...state, id: detail.id, description, url: FILE_URL + detail.aboutImage, filepath: detail.aboutImage })
        }

    }, [aboutLists])

    const SaveHandler = async (record) => {
        const data = {
            ...record, ...state,
            description: JSON.stringify(ConvertToText(state.description)),
            del_flg: 0, created_user: authUser,
            company_id: user.company_id, group_name: 'about'
        }
      //  console.log(data)
        dispatch(showAuthLoader())
        dispatch(requestSaveAbout(data))

    }
    // console.log(state)
    return (
        <div>
            <Card className="gx-card" title={"About"}>
                <Form name="Add" onFinish={SaveHandler} form={form} onFinishFailed={onFinishFailed} size="large"
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
                                <ImageUploader image_title="Upload File" imageChange={(aboutImage) =>
                                    setState({ ...state, aboutImage })} />

                            </div>
                            <Form.Item style={{ marginTop: 20 }}>
                                <Button type="primary" htmlType="submit">
                                    <SaveOutlined />  Save
                                </Button>
                            </Form.Item>
                            <div className="gx-news-item">
                                <div className="gx-news-thumb">
                                    <img className="gx-width-175 gx-rounded-lg" src={state.url} alt="..." />
                                </div>
                            </div>
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