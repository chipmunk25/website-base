import React from 'react';
import heroImg from "../../../assets/img/hero-img.png"
const Masthead = () => {
    return (
        <section id="hero" className="hero d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up">UKEX Approved Body Group</h1>
                        <h2 data-aos="fade-up" data-aos-delay="400">is responsible for coordination of application of the Equipment and Protective Systems</h2>
                        <div data-aos="fade-up" data-aos-delay="600">
                            <div className="text-center text-lg-start">
                                <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                    <span>Become a Member</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <img src={heroImg} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>

        </section>
    );
};
export default Masthead;