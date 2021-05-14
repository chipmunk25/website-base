import React from 'react';

const ClientItem = ({item}) => {
    return (
        <div className="swiper-slide" id={item.id}>
            <img src={item.image} className="img-fluid" alt="" />
        </div>
    );
};

export default ClientItem;