import React from "react";
import { Avatar, } from "antd";

import { FILE_URL } from 'appRedux/api/root';

const PublicationCell = ({ publication }) => {

    const thumb = ""
    const name = "desmond"
    return (
        <div className="gx-contact-item">
            <div className="gx-module-list-icon">
                <div className=" gx-d-sm-flex" >
                    {publication.id}
                </div>
                <div className="gx-ml-2  gx-d-sm-flex">
                    {(thumb === null || thumb === '') ?
                        <Avatar size="large">
                            {name.charAt(0).toUpperCase()}
                        </Avatar>
                        :
                        <Avatar size="large" alt={name} src={thumb} />
                    }
                </div>
            </div>

            <div className="gx-module-list-info gx-contact-list-info">
                <div className="gx-module-contact-content">
                    <p className="gx-mb-1">
                        <span className="gx-text-truncate gx-contact-name"> {publication.doc_number} </span>
                        <span className="gx-toolbar-separator">&nbsp;&nbsp;&nbsp;</span>
                        <span className="gx-text-truncate gx-job-title">{publication.title}</span>
                        <span className="gx-toolbar-separator">&nbsp;&nbsp;&nbsp;</span>
                        <span className="gx-text-truncate gx-job-title">{publication.access_type}</span>
                    </p>

                    <div className="gx-text-muted">
                        <span className="gx-email gx-d-inline-block gx-mr-2">
                            {publication.description}
                        </span>
                        <span className="gx-phone gx-d-inline-block">  {FullPath(publication.url)}</span>
                    </div>
                </div>

                <div className="gx-module-contact-right">



                </div>
            </div>
        </div>
    )

}

const FullPath = (url) => FILE_URL + url
export default PublicationCell;
