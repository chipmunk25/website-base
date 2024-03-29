import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Menu, Dropdown, Popconfirm } from "antd"
import { EditOutlined, MoreOutlined, DeleteOutlined } from "@ant-design/icons"

import PageContent from "components/PageContent"
import LoadingProgress from "components/Loading"
import FormModal from "components/Modals"

import Create from "./Create"
import Edit from "./Edit"

import { showAuthLoader, hideAuthLoader, showModal, hideModal } from "appRedux/actions/common"
import { requestGetLinkGroup, requestGetPublication, requestSavePublication, requestUpdatePublication, requestDeletePublication } from "appRedux/actions/webpage"

import FuzzySearch from 'fuzzy-search';
let searcher;


const Publication = () => {
    const dispatch = useDispatch()
    const [modalType, setModalType] = useState("")
    const [detail, setDetail] = useState({})
    const { publicationLists, linkGroupLists } = useSelector(({ webpages }) => webpages);
    const { modal, loader } = useSelector(({ common }) => common);
    const { authUser, user } = useSelector(({ auth }) => auth);
    const [state, setState] = useState({
        aboutImage: null, id: undefined,
        group_name: ""
    })
    useEffect(() => {
        dispatch(showAuthLoader())
        dispatch(requestGetLinkGroup({ company_id: user.company_id, del_flg: 0 }))
        dispatch(requestGetPublication({ company_id: user.company_id, del_flg: 0 }))
    }, [])

    const LoadNShowModal = () => {
        dispatch(showAuthLoader())
        dispatch(showModal())
    }

    const CloseModal = () => dispatch(hideModal())
    const hideModalLoader = () => dispatch(hideAuthLoader())
    const EditDataHandler = record => {
        setModalType("EDIT")
        setDetail(record)
        LoadNShowModal()
    }

    const DeleteHandler = async record => {
        const data = { created_user: authUser, company_id: user.company_id, ...record }
        dispatch(showAuthLoader())
        dispatch(requestDeletePublication(data))
    }

    const AddNewHandler = () => {
        setModalType("ADD")
        LoadNShowModal()
    }

    const SaveHandler = async (record) => {
        const data = {
            company_id: user.company_id,
            created_user: authUser,
            del_flg: 0,
            ...record,
            ...state
        }
        //  console.log(data)
        dispatch(showAuthLoader())
        dispatch(requestSavePublication(data))
        ResetPage()
    }
    const UpdateHandler = async (record) => {
        const data = {
            /*   company_id: user.company_id,
              created_user: authUser, 
              del_flg: 0,*/
            ...detail,
            ...record,
            ...state,
            id: detail.id,
        }
        // console.log(data)
        dispatch(showAuthLoader())
        dispatch(requestSavePublication(data))
        ResetPage()
    }
    const ResetPage = () => {
        setState({
            aboutImage: null, id: undefined,
            group_name: ""
        })
    }
    const ValidationAlert = errorInfo => {
        // console.log(errorInfo)
    }


    const [dataSource, setDataSource] = useState([])
    searcher = new FuzzySearch(publicationLists, ["title", "doc_number", "description"], { caseSensitive: false });
    useEffect(() => {
        const LoadData = async () => {
            setDataSource(await publicationLists)
        }
        LoadData()
    }, [publicationLists])
    const OnSearch = (e) => setDataSource(searcher.search(e.target.value))


    return (
        <div className="gx-main-content">
            {/*   <LoadingProgress loading={loader} /> */}
            <FormModal
                children={
                    <div>
                        <LoadingProgress loading={loader} />
                        {modalType === "EDIT" ?
                            <Edit state={state} setState={setState} linkGroupLists={linkGroupLists.filter(item => item.link_type === "DOCS")} detail={detail} onFinish={UpdateHandler} hideModalLoader={hideModalLoader} onFinishFailed={ValidationAlert} />
                            :
                            <Create state={state} setState={setState} linkGroupLists={linkGroupLists.filter(item => item.link_type === "DOCS")} onFinish={SaveHandler} hideModalLoader={hideModalLoader} onFinishFailed={ValidationAlert} />
                        }
                    </div>
                }
                title={modalType ? "Edit" : "Create"}
                visible={modal}
                width={600}
                handleCancel={CloseModal}
            />
            <PageContent
                OnSearch={OnSearch}
                rowKey="id"
                dataSource={dataSource}
                AddNewHandler={AddNewHandler}
                loading={{ spinning: loader, indicator: <LoadingProgress loading={loader} /> }}
                pageTitle="Publication"
                placeholder="Search for Publication"
                addNewText="Publication"
                scroll={{ width: 700 }}
                columns={[
                    {
                        title: 'ID',
                        dataIndex: 'id',
                        key: 'id',
                        width: 70,
                        fixed: 'left',
                    }, {
                        title: 'Document No.',
                        dataIndex: 'doc_number',
                        key: 'doc_number',
                    }, {
                        title: 'Title',
                        dataIndex: 'title',
                        key: 'title',
                    }, {
                        title: 'Description',
                        dataIndex: 'description',
                        key: 'description',
                    }, {
                        title: 'Access Type',
                        dataIndex: 'access_type',
                        key: 'access_type',
                    }, {
                        title: 'Url',
                        dataIndex: 'url',
                        key: 'url',
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

export default Publication