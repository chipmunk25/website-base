import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestGetPublication,requestGetLinkGroup } from "appRedux/actions/webpage"
import { showAuthLoader, } from "appRedux/actions/common"
import DPub from './pub';
import PublicationList from "./PublicationLists"
const AppPublications = () => {
    const dispatch = useDispatch()
    const { publicationLists,linkGroupLists } = useSelector(({ webpages }) => webpages);
  
    
    useEffect(() => {
        dispatch(showAuthLoader())
        dispatch(requestGetPublication({ company_id: 1, del_flg: 0 }))
        dispatch(requestGetLinkGroup({ company_id: 1, del_flg: 0 }))
    }, [])
    return (
        <section id="publications" className=" section values file-manager file-manager-cards">
            <div className="container" data-aos="fade-up">
               
              
                <div>
                    <DPub
                        publicationLists={publicationLists}
                        linkGroupLists={linkGroupLists}
                    />
                </div>
            </div>

        </section>
    );
};

export default AppPublications;