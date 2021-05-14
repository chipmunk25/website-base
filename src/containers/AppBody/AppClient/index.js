import React from 'react';

import Clients from './clients';

const AppClient = () => {
    return (
        <section id="clients" className="clients">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Our Clients</h2>
                    <p>Temporibus omnis officia</p>
                </header>
                <div className="clients-slider swiper-container">
                    <Clients />
                </div>
            </div>

        </section>
    );
};


export default AppClient;