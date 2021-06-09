import React, { useEffect } from 'react';
import AppHeader from "./AppHeader"
import AppBody from "./AppBody"
import AppFooter from "./AppFooter"
import AOS from "aos";

const Homepage = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className="App">
            <AppHeader />
            <AppBody />
            <AppFooter />
        </div>
    )
}

export default Homepage