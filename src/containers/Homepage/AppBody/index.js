import React from 'react';


import Masthead from "./Masthead"
import AppAbout from "./AppAbout"
import AppPublications from './AppPublications'
import AppClient from './AppClient'
import AppUsefullinks from './AppUsefullinks'
/* import AppContact from './AppContact'
import AppTeams from './AppTeams' */
import AppServices from './AppServices'
const AppBody = () => {
    return (
        <div className="homepage">
            <Masthead />
            <AppAbout />
            <AppServices />
            <AppPublications />
            <AppUsefullinks />
            {/*  
            <AppClient /> 
            <AppTeams />
        <AppContact />*/}
        </div>


    );
};

export default AppBody;