import React from 'react';
import logo from "assets/img/logo.png"

import { Markup } from 'interweave';
import { useDispatch, useSelector } from 'react-redux';
import { RenderPage } from "utils/page"
const AppFooter = () => {
    const { aboutLists, simplechangeLists } = useSelector(({ webpages }) => webpages);

    return (
        <footer id="footer" className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="index.html" className="logo d-flex align-items-center">
                                <img src={logo} alt="" />
                                <span>UKEXABG </span>
                            </a>
                            {aboutLists && aboutLists.map(item => (<Markup key={item.id} content={JSON.parse(item.description)} />))}
                            {/* <div className="social-links mt-3">
                                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="instagram"><i className="bi bi-instagram bx bxl-instagram"></i></a>
                                <a href="#" className="linkedin"><i className="bi bi-linkedin bx bxl-linkedin"></i></a>
                            </div> */}
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="#home">Home</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#about">About us</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#membership">Membership</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#publications">Publications</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#usefullinks">Useful Links</a></li>
                                {/*  <li><i className="bi bi-chevron-right"></i> <a href="#">Co</a></li> */}
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            {/* <h4>Our Services</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
                            </ul> */}
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>{RenderPage(simplechangeLists, "contact") ?
                                <Markup content={JSON.parse(RenderPage(simplechangeLists, "contact").description)} />
                                :
                                ""}</p>

                            {/*  <p>Secretary to the UKEX Approved Bodies Group BEAMA Ltd <br />
                                Rotherwick House <br />
                                3 Thomas More Street <br />
                                London, E1W 1YZ</p> */}

                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy;  <strong><span>UKEXABG </span></strong>. All Rights Reserved </div>
                <div className="credits">
                    Developed by <a href="https://chipsoftgh.com/">chipsoftgh</a>
                </div>
            </div>

        </footer>
    );
};

export default AppFooter;