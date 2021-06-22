import React from 'react';


import Masthead from "./Masthead"
import AppAbout from "./AppAbout"
import AppPublications from './AppPublications'
/* import AppContact from './AppContact'
import AppClient from './AppClient'
import AppTeams from './AppTeams' */
import AppServices from './AppServices'
const AppBody = () => {
    return (
        <div className="homepage">
            <Masthead />
            <AppAbout />
            <AppServices />
            <AppPublications />
            {/*  <AppTeams />
            <AppClient /> 
        <AppContact />*/}
        </div>


    );
};

export default AppBody;