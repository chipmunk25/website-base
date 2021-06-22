import React, { useEffect } from 'react';
import about from "assets/img/about.jpg"

import { useDispatch, useSelector } from 'react-redux';

import { requestGetAbout } from "appRedux/actions/webpage"
import { showAuthLoader, } from "appRedux/actions/common"

import convertFromHtmlTOTextfield from "./ConvertToText"

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const AppAbout = () => {
    const dispatch = useDispatch()
    const { aboutLists } = useSelector(({ webpages }) => webpages);
    console.log(aboutLists)
    useEffect(() => {
        dispatch(showAuthLoader())
        dispatch(requestGetAbout({ company_id: 1, del_flg: 0 }))
    }, [])

    return (
        <section id="about" className=" section about">

            <div className="container" data-aos="fade-up">
                {
                    aboutLists && aboutLists.map(item => (
                        <div className="row gx-0" key={item.id}>
                            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="400">
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <h2>{item.subtitle}</h2>
                                    <p>
                                        {ReactHtmlParser(item.description)}
                                    </p>
                                    <div className="text-center text-lg-start">
                                        <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                            <span>Read More</span>
                                            <i className="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                                <img src={about} className="img-fluid" alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    );
};

export default AppAbout;