import React from 'react';

const AppContact = () => {
    return (
        <section id="contact" className="contact">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Contact</h2>
                    <p>Contact Us</p>
                </header>

                <div className="row gy-4">

                    <div className="col-lg-6">

                        <div className="row gy-4">
                            <div className="col-md-12">
                                <div className="info-box">
                                    <i className="bi bi-geo-alt"></i>
                                    <h3> Secretary to the UKEX Approved Bodies Group BEAMA Ltd  </h3>
                                    <p>
                                      
                                    Rotherwick House <br />
                                    3 Thomas More Street <br />
                                    London, E1W 1YZ</p>
                                </div>
                            </div>
                            {/*  <div className="col-md-6">
                                <div className="info-box">
                                    <i className="bi bi-telephone"></i>
                                    <h3>Call Us</h3>
                                    <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box">
                                    <i className="bi bi-envelope"></i>
                                    <h3>Email Us</h3>
                                    <p>info@example.com<br />contact@example.com</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box">
                                    <i className="bi bi-clock"></i>
                                    <h3>Open Hours</h3>
                                    <p>Monday - Friday<br />9:00AM - 05:00PM</p>
                                </div>
                            </div> */}
                        </div>

                    </div>

                    <div className="col-lg-6">
                        <form class="php-email-form">
                            <div class="row gy-4">

                                <div class="col-md-6">
                                    <input type="text" name="name" class="form-control" placeholder="Your Name" required />
                                </div>

                                <div class="col-md-6 ">
                                    <input type="text" class="form-control" name="company" placeholder="Company" required />
                                </div>

                                <div class="col-md-12">
                                    <input type="email" class="form-control" name="email" placeholder="Your Email" required />
                                </div>

                                <div class="col-md-12">
                                    <textarea class="form-control" name="message" rows="6" placeholder="Message" required >
                                    </textarea>
                                </div>

                                <div class="col-md-12 text-center">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>

                                    <button type="submit">Send Message</button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default AppContact;