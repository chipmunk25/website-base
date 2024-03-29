import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { requestGetAbout } from "appRedux/actions/webpage"
import { showAuthLoader, } from "appRedux/actions/common"


import { Markup } from 'interweave';
import { FILE_URL } from 'appRedux/api/root';

const AppAbout = () => {
    const dispatch = useDispatch()
    const { aboutLists } = useSelector(({ webpages }) => webpages);
   
    useEffect(() => {
        dispatch(showAuthLoader())
        dispatch(requestGetAbout({ company_id: 1, del_flg: 0 }))
    }, [])
    

    return (
        <section id="about" className=" section about">

            <div className="container" data-aos="fade-up">
                {
                    aboutLists?.map(item => (
                        <div className="row gx-0" key={item.id}>
                            <div className="col-lg-6 d-flex flex-column justify-content-center"
                                data-aos="fade-up" data-aos-delay="400">
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <h2>{item.subtitle}</h2>
                                    <Markup content={JSON.parse(item.description)} />
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                                <img src={FILE_URL + item.aboutImage} className="img-fluid" alt="" />
                            </div>

                        </div>
                    ))
                }
            </div>

        </section>
    );
};

export default AppAbout;