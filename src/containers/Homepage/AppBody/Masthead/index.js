import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { requestGetMasthead } from "appRedux/actions/webpage"
import { showAuthLoader, } from "appRedux/actions/common"


import { Markup } from 'interweave';
import { FILE_URL } from 'appRedux/api/root';



const Masthead = () => {
    const dispatch = useDispatch()
    const { mastheadLists } = useSelector(({ webpages }) => webpages);

   

    return (
        <section id="home" className=" section hero d-flex align-items-center">
            <div className="container">
                {
                    mastheadLists && mastheadLists.map(item => (
                        <div className="row" key={item.id}>
                            <div className="col-lg-6 d-flex flex-column justify-content-center masthead-description">
                                <h1 data-aos="fade-up">{item.title}</h1>
                                <h2 data-aos="fade-up" data-aos-delay="400">
                                <Markup  content={JSON.parse(item.description)} /></h2>
                            </div>
                            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                                <img src={FILE_URL + item.aboutImage} className="img-fluid" alt="" />
                            </div>
                        </div>
                    ))}

            </div>

        </section>
    );
}; 
{/* <div data-aos="fade-up" data-aos-delay="600">
                            <div className="text-center text-lg-start">
                                <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                    <span>Become a Member</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div> */}
export default Masthead;