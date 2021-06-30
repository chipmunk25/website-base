import React from 'react';
import { FILE_URL } from "appRedux/api/root"
const ClientItem = ({item}) => {
    return (
        <div className="swiper-slide" id={item.id}>
            <a href={item.url} target="_BLANK">
            <img src={FILE_URL + "/" + item.logo} className="img-fluid" alt="" />

            </a>
        </div>
    );
};

export default ClientItem;