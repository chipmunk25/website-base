import React, { useEffect } from 'react';
import Auxiliary from "utils/Auxiliary";
import CustomScrollbars from "utils/CustomScrollbars";

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
          {/*   <Auxiliary> 
                <CustomScrollbars className="gx-homepage-scroll">*/}
                    <AppHeader />
                    <AppBody />
                    <AppFooter />
               {/*  </CustomScrollbars>
            </Auxiliary> */}

        </div>
    )
}

export default Homepage