import React from 'react';
import about from "../../../assets/img/about.jpg"
const AppAbout = () => {
    return (
        <section id="about" className="about">

            <div className="container" data-aos="fade-up">
                <div className="row gx-0">

                    <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="400">
                        <div className="content">
                            <h3>About Us</h3>
                            <h2>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h2>
                            <p>
                                Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et.
                                 Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti. </p>
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
                    {/*    <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="600">
                       <div className="content">
                            <h3>Our Mission</h3>
                            <h2>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h2>
                            <p>
                                Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et.
                                 Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti. </p>
                            <div className="text-center text-lg-start">
                                <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                    <span>Read More</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div> 
                    </div>*/}

                </div>
            </div>

        </section>
    );
};

export default AppAbout;