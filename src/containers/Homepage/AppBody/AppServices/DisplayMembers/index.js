import { Table } from "antd"
import React from "react"

const DisplayMembers = (props) => {
    return (
        <div className="pub-top">
            <div className="pub-item search-form">
                <div>
                    <input type="text" placeholder={props.placeholder} onChange={props.SearchForHandler} />
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

export default DisplayMembers