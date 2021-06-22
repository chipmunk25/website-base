import React from 'react';

import DocumentItem from './documentComponent';
const AppPublications = () => {
    return (
        <section id="publications" className=" section values file-manager file-manager-cards">
            <div className="container" data-aos="fade-up">
                <header className="section-header">
                    <h2>Publications</h2>
                    <p>Odit est perspiciatis laborum et dicta</p>
                </header>
                <div className="row">
                    <DocumentItem />
                </div>

            </div>

        </section>
    );
};

export default AppPublications;