import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Menu, Dropdown, Popconfirm, Switch } from "antd"
import { EditOutlined, MoreOutlined, DeleteOutlined } from "@ant-design/icons"

import PageContent from "components/PageContent"
import LoadingProgress from "components/Loading"
import FormModal from "components/Modals"

import Create from "./Create"
import Edit from "./Edit"

import { showAuthLoader, hideAuthLoader, showModal, hideModal } from "appRedux/actions/common"
import { requestGetSimpleChange, requestSaveSimpleChange, requestUpdateSimpleChange, requestDeleteSimpleChange } from "appRedux/actions/webpage"

import {
    EditorState, convertToRaw
} from "draft-js";

import ConvertFromHTMLtoTEXT from "utils/ConvertHTMLtoText"
import draftToHtml from "draftjs-to-html";
import FuzzySearch from 'fuzzy-search';
let searcher;


const SimpleChanges = () => {

    const dispatch = useDispatch()
    const [modalType, setModalType] = useState("")
    const [detail, setDetail] = useState({})
    const { simplechangeLists } = useSelector(({ webpages }) => webpages);
    const { modal, loader } = useSelector(({ common }) => common);
    const { authUser, user } = useSelector(({ auth }) => auth);
    const [state, setState] = useState({
        description: EditorState.createEmpty(),
    })
    const onEditorStateChange = (description) => {
        setState({ ...state, description, });
    };
    useEffect(() => {
        dispatch(showAuthLoader())
        dispatch(requestGetSimpleChange({ company_id: user.company_id, del_flg: 0 }))
    }, [])

    const LoadNShowModal = () => {
        dispatch(showAuthLoader())
        dispatch(showModal())
    }

    const CloseModal = () => dispatch(hideModal())
    const hideModalLoader = () => dispatch(hideAuthLoader())
    const EditDataHandler = record => {
     //   console.log(record)
        setModalType("EDIT")
        const description = ConvertFromHTMLtoTEXT(JSON.parse(record.description))
        //  console.log(description)
        setState({ ...state, description, })
        setDetail(record)
        LoadNShowModal()
    }

    const DeleteHandler = async record => {
        const data = { created_user: authUser, company_id: user.company_id, ...record }
        dispatch(showAuthLoader())
        dispatch(requestDeleteSimpleChange(data))
    }

    const AddNewHandler = () => {
        setState({ ...state, description: EditorState.createEmpty() })
        setModalType("ADD")
        LoadNShowModal()
    }

    const SaveHandler = async (record) => {
        const data = {
            company_id: user.company_id,
            created_user: authUser,
            description: JSON.stringify(ConvertToText(state.description)),
            ...record
        }
        //    console.log(data)
        dispatch(showAuthLoader())
        dispatch(requestSaveSimpleChange(data))
    }
    const UpdateHandler = async (record) => {
        const data = {
            ...detail,
            ...record,
            description: JSON.stringify(ConvertToText(state.description)),
            id: detail.id,
        }
        dispatch(showAuthLoader())
        dispatch(requestSaveSimpleChange(data))
    }

    const ValidationAlert = errorInfo => {
        // console.log(errorInfo)
    }


    const [dataSource, setDataSource] = useState([])
    searcher = new FuzzySearch(simplechangeLists, ["title", "page_type", "description"], { caseSensitive: false });
    useEffect(() => {
        const LoadData = async () => {
            setDataSource(await simplechangeLists)
        }
        LoadData()
    }, [simplechangeLists])
    const OnSearch = (e) => setDataSource(searcher.search(e.target.value))


    return (
        <div className="gx-main-content">
            {/*   <LoadingProgress loading={loader} /> */}
            <FormModal
                children={
                    <div>
                        <LoadingProgress loading={loader} />
                        {modalType === "EDIT" ?
                            <Edit detail={detail} onFinish={UpdateHandler} hideModalLoader={hideModalLoader}
                                onEditorStateChange={onEditorStateChange} state={state}
                                onFinishFailed={ValidationAlert} />
                            :
                            <Create onFinish={SaveHandler} hideModalLoader={hideModalLoader}
                                onEditorStateChange={onEditorStateChange} state={state}
                                onFinishFailed={ValidationAlert} />
                        }
                    </div>
                }
                title={modalType ? "Edit" : "Create"}
                visible={modal}
                width={1000}
                handleCancel={CloseModal}
            />
            <PageContent
                OnSearch={OnSearch}
                rowKey="id"
                dataSource={dataSource}
                AddNewHandler={AddNewHandler}
                loading={{ spinning: loader, indicator: <LoadingProgress loading={loader} /> }}
                pageTitle="Simple Changes"
                placeholder="Search for Simple Changes"
                addNewText="Simple Changes"
                scroll={{ width: 700 }}
                columns={[
                    {
                        title: 'ID',
                        dataIndex: 'id',
                        key: 'id',
                        width: 70,
                        fixed: 'left',
                    }, {
                        title: 'Title',
                        dataIndex: 'title',
                        key: 'title',
                    }, {
                        title: 'Description',
                        dataIndex: 'description',
                        key: 'description',
                        /*   render: (text) => (
                              <div>
                                  {ConvertToText(ConvertFromHTMLtoTEXT(JSON.parse(detail.description)))}
                              </div>
                          ) */
                    }, {
                        title: 'Page Type',
                        dataIndex: 'page_type',
                        key: 'page_type',
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        width: 70,
                        render: (text, record) => (
                            <span >
                                <Dropdown
                                    //  disabled={sessionStorage.role === "ADMIN" ? false : true}
                                    overlay={
                                        (<Menu>
                                            <Menu.Item key="1">
                                                <span className="gx-text-blue" onClick={() => EditDataHandler(record)}>
                                                    <EditOutlined /> Edit
                                                </span>
                                            </Menu.Item>
                                            <Menu.Item key="2">
                                                <Popconfirm
                                                    placement="top"
                                                    title={`Are you sure to delete ${record.title}?`}
                                                    onConfirm={() => DeleteHandler(record)}
                                                    onCancel={(e) => console.log(e)}
                                                    okText="Yes" cancelText="No"
                                                >
                                                    <span className="gx-text-red" >
                                                        <DeleteOutlined /> Delete
                                                    </span>
                                                </Popconfirm>

                                            </Menu.Item>
                                        </Menu>)

                                    } placement="bottomRight" trigger={['click']}>
                                    <Button type="primary" className="gx-bg-geekblue"
                                        shape="circle"
                                        icon={<MoreOutlined style={{ fontWeight: 700 }} />}
                                        size="middle" />
                                </Dropdown>
                            </span>
                        ),
                    },
                ]}
            />

        </div>
    )
}

const ConvertToText = (description) => draftToHtml(convertToRaw(description.getCurrentContent()))

export default SimpleChanges