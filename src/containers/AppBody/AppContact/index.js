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
                            <div className="col-md-6">
                                <div className="info-box">
                                    <i className="bi bi-geo-alt"></i>
                                    <h3>Address</h3>
                                    <p>A108 Adam Street,<br />New York, NY 535022</p>
                                </div>
                            </div>
                            <div className="col-md-6">
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
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15850.35638625973!2d-1.670308171530486!3d6.697704822522299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb9834b71dc8eb%3A0xd730930e62ff9108!2sAsuoyeboa%2C%20Kumasi!5e0!3m2!1sen!2sgh!4v1620947478843!5m2!1sen!2sgh"
                            width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default AppContact;