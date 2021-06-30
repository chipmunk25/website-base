import { Table } from "antd"
import React from "react"

const DisplayPub = (props) => {
    return (
        <div className="pub-top">
         {/*    <h3 class="pub-title">Search</h3> */}
            <div className="pub-item search-form">
                <div>
                    <input type="text" placeholder="Search for Documents" onChange={props.SearchForDocumentHandler} />
                    <button type="submit"><i className="bi bi-search"></i></button>
                </div>

            </div>
            <div className="table-container">
                <Table
                    className="table table-striped-rows"
                    size="small"
                    {...props}
                />
            </div>

        </div>
    )
}

export default DisplayPub