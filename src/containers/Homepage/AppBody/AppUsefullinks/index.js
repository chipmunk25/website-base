import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { requestGetLinkGroup } from "appRedux/actions/webpage"
import { showAuthLoader, } from "appRedux/actions/common"


const AppUsefullinks = () => {
    const dispatch = useDispatch()
    const { linkGroupLists } = useSelector(({ webpages }) => webpages);
    

    const RenderLinks = (item) => {
        const lendth = item.usefullinks_ms.length
        if (lendth > 0) {
            return (<div className="col-lg-3 col-6 usefullinks-links" key={item.id}>
                <h4>{item.title}</h4>
                <ul>
                    {
                        item.usefullinks_ms && item.usefullinks_ms.map(link => (
                            <li key={link.id}><i className="bi bi-chevron-right"></i>
                                <a target={link.open_intab ? "_blank" : ""} href={link.url}>{link.title}</a>
                            </li>
                        ))
                    }

                </ul>
            </div>)
        }
        return null

    }
    //   console.log(linkGroupLists)
    return (
        <div id="usefullinks" className="usefullinks">
            <div className="usefullinks-top">
                <header className="section-header">
                   {/*  <h2>UsefulLinks</h2> */}
                    <p>Useful Links</p>
                </header>
                <div className="container">
                    <div className="row gy-4">
                        {linkGroupLists && linkGroupLists.filter(item => item.link_type === "LINKS").map(item => {
                            return RenderLinks(item)
                        }
                        )}




                    </div>
                </div>
            </div>



        </div>
    );
};

export default AppUsefullinks;