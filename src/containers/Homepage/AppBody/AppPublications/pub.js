import { Row, Col } from "antd"
import React, { useState, useEffect } from "react"
import TreePub from "./TreePub"
import DisplayPub from "./DisplayPub"
import moment from "moment"
import { useSelector } from "react-redux"
import FuzzySearch from 'fuzzy-search';
import { Link } from "react-router-dom"
import { FILE_URL } from '../../../../appRedux/api/root';
let searcher;

const DPub = ({ linkGroupLists }) => {
    const [pub, setPub] = useState([])
    const [searchpub, setSearchPub] = useState([])
    const [pubTitle, setPubTitle] = useState("")
    const { authUser, } = useSelector(({ auth }) => auth);
    searcher = new FuzzySearch(pub, ["title", "doc_number", "description"], { caseSensitive: false });
    const OnSearch = (e) => setSearchPub(searcher.search(e.target.value))
    useEffect(() => {
        const LoadData = () => {
            setSearchPub(pub)
        }
        LoadData()
    }, [pub])


    return (
        <div>
            <header className="section-header">
                <p>Publications</p>
                <div style={{ paddingTop: 20 }}>
                    <h2>{pubTitle}</h2>

                </div>
            </header>
            <Row justify="space-around">
                <Col xs={24} sm={24} md={24} lg={24} xl={6}>
                    <TreePub
                        linkGroupLists={linkGroupLists && linkGroupLists.filter(item => item.link_type === "DOCS")}
                        setPub={setPub}
                        setPubTitle={setPubTitle}
                    />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={18}>

                    <DisplayPub
                        SearchForDocumentHandler={OnSearch}
                        rowKey="id"
                        columns={[
                            {
                                title: "Doc Details",
                                render: (record) => (
                                    <React.Fragment>
                                        {record.doc_number}
                                        <br />
                                        {record.created_At}
                                        <br />
                                        {record.title}
                                        <br />
                                        {record.description}
                                        <br />
                                        {record.access_type}
                                    </React.Fragment>
                                ),
                                responsive: ["xs"]
                            },
                            {
                                title: 'Document No.', dataIndex: 'doc_number', key: 'doc_number', responsive: ['lg', 'md', 'sm'],
                                sorter: (a, b) => a.doc_number.length - b.doc_number.length,
                                sortDirections: ['descend', 'ascend'],
                            },
                            {
                                title: 'Posted Date', dataIndex: 'created_At', key: 'created_At', width: 120, responsive: ['lg', 'md', 'sm'],
                                sorter: (a, b) => a.created_At.length - b.created_At.length,
                                sortDirections: ['descend', 'ascend'],
                            },
                            {
                                title: 'Title', dataIndex: 'title', key: 'title', responsive: ['lg', 'md', 'sm'],
                                sorter: (a, b) => a.title.length - b.title.length,
                                sortDirections: ['descend', 'ascend'],
                            },
                            {
                                title: 'Description', dataIndex: 'description', key: 'description', responsive: ['lg', 'md', 'sm'],
                                sorter: (a, b) => a.description.length - b.description.length,
                                sortDirections: ['descend', 'ascend'],
                            },
                            {
                                title: 'Download', dataIndex: 'access_type', key: 'access_type', responsive: ['lg', 'md', 'sm'],
                                render: (access_type, record) => {
                                    return (
                                        <div>
                                            {
                                                access_type === "PUBLIC" || (access_type === "PROTECTED" && authUser) ?
                                                    <a target="_BLANK" href={FILE_URL + record.url}>
                                                        {record.doc_number}
                                                    </a>
                                                    : <div>
                                                        <Link to="/signin">
                                                            <span>
                                                                <i className="bi bi-lock-fill" />
                                                                {record.doc_number}
                                                            </span>
                                                        </Link>
                                                    </div>
                                            }
                                        </div>

                                    )
                                }

                            },
                        ]}
                        dataSource={searchpub && searchpub.map(item => {
                            return {
                                ...item,
                                created_At: moment(item.createdAt).format('LL')
                            }
                        })}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default DPub