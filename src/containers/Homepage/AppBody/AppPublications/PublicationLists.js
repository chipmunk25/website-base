import React, { useState, useEffect } from "react";
import _ from "lodash";
import PublicationCell from "./PublicationCell";

import * as arrayPaginate from "array-paginate"
import { Col, Pagination, Row } from "antd";

const PublicationList = ({ publicationLists }) => {
    const [state, setState] = useState({
        pageSize: 10,
        rowHits: publicationLists,
        defaultPageSize: 10,
        defaultCurrent: 1,
        prevPageNumber: 0,
    })
    useEffect(() => {
        setState({ ...state, rowHits: publicationLists })
    }, [publicationLists])


    const onChange = pageNumber => {
        setState({
            ...state,
            prevPageNumber: pageNumber
        })
    }
    console.log(publicationLists)
    return (
        <div className="gx-contact-main-content">
            {state.rowHits.length > 0 &&
                arrayPaginate(state.rowHits, state.prevPageNumber, state.pageSize).docs.map((publication, key) =>
                    <PublicationCell key={key}
                        publication={publication}

                    />
                )}
            <Row justify="center" style={{ marginTop: '50px' }}>
                <Col span={18}>
                    <Pagination showQuickJumper defaultCurrent={state.defaultCurrent} pageSize={state.pageSize}
                        defaultPageSize={state.defaultPageSize} total={state.rowHits.length} onChange={onChange}
                    />
                </Col>
            </Row>

        </div>
    )
};

export default PublicationList;
