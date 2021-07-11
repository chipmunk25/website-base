import React, { useState, useEffect } from "react";

import * as arrayPaginate from "array-paginate"

import { Col, Pagination, Row } from "antd";
import { Tree } from 'antd';
const { DirectoryTree } = Tree;
const TreePub = ({ linkGroupLists, setPub, setPubTitle }) => {
    const onSelect = (keys, info) => {
        setPub(info.node.publication_ms)
        setPubTitle(info.node.title)
    };

    const onExpand = () => {
        console.log('Trigger Expand');
    };
    const [state, setState] = useState({
        pageSize: 10,
        rowHits: linkGroupLists,
        defaultPageSize: 10,
        defaultCurrent: 1,
        prevPageNumber: 0,
    })
    useEffect(() => {
        setState({ ...state, rowHits: linkGroupLists.filter(item => item.publication_ms.length > 0) })
    }, [linkGroupLists])


    const onChange = pageNumber => {
        setState({
            ...state,
            prevPageNumber: pageNumber
        })
    }


    return (
        <div className="blog">
            <div className="sidebar">
                <h3 className="sidebar-title">Document Categories</h3>
                <div className="sidebar-item categories">
                    <DirectoryTree
                        // showLine
                        defaultExpandAll
                        onSelect={onSelect}
                        onExpand={onExpand}
                        treeData={state.rowHits.length > 0 && arrayPaginate(state.rowHits, state.prevPageNumber, state.pageSize).docs.map(item => {
                            return {
                                ...item,
                                key: item.id
                            }
                        })}
                    />

                </div>
                <Row justify="center" style={{ fontSize: 14 }}>
                    <Col span={24}>
                        <Pagination showQuickJumper defaultCurrent={state.defaultCurrent} pageSize={state.pageSize}
                            defaultPageSize={state.defaultPageSize} total={state.rowHits.length} onChange={onChange}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}


export default TreePub