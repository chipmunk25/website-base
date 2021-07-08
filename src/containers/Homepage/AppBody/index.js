import React from 'react';


import Masthead from "./Masthead"
import AppAbout from "./AppAbout"
import AppPublications from './AppPublications'

import AppUsefullinks from './AppUsefullinks'

import AppServices from './AppServices'
const AppBody = () => {
    return (
        <div className="homepage">
            <Masthead />
            <AppAbout />
            <AppServices />
            <AppPublications />
            <AppUsefullinks />
        </div>


    );
};

export default AppBody;