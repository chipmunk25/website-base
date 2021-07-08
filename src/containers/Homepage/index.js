import React, { useEffect } from 'react';


import AppHeader from "./AppHeader"
import AppBody from "./AppBody"
import AppFooter from "./AppFooter"
import AOS from "aos";

import { useDispatch, } from 'react-redux';

import { showAuthLoader, } from "appRedux/actions/common"
import { requestGetLinkGroup, requestGetSimpleChange, requestGetMasthead, requestGetMember } from "appRedux/actions/webpage"
const Homepage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    useEffect(() => {
        dispatch(showAuthLoader())
        dispatch(requestGetMasthead({ company_id: 1, del_flg: 0 }))
    }, [])
    useEffect(() => {
        dispatch(showAuthLoader())
        dispatch(requestGetLinkGroup({ company_id: 1, del_flg: 0 }))
    }, [])

    useEffect(() => {
        dispatch(showAuthLoader())
        dispatch(requestGetSimpleChange({ company_id: 1, del_flg: 0 }))
    }, [])

    useEffect(() => {
        dispatch(showAuthLoader())
        dispatch(requestGetMember({ company_id: 1, del_flg: 0 }))
    }, [])


    return (
        <div className="App">
            <AppHeader />
            <AppBody />
            <AppFooter />
        </div>
    )
}

export default Homepage