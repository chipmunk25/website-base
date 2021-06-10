
import h_logo from "assets/img/logo.png"
import h_logo_sidebar from "assets/img/logo.png"
import h_logo_header from "assets/img/logo.png"

import d_logo from "assets/img/logo.png"
import d_logo_sidebar from "assets/img/logo.png"
import d_logo_header from "assets/img/logo.png"
 
const images = [{
    "login_logo": h_logo,
    "sidebar_logo": h_logo_sidebar,
    "header_logo": h_logo_header,
    "report_logo": h_logo_header,
    "active": true,
    "company": "Hyperbuild"
},
{
    "login_logo": d_logo,
    "sidebar_logo": d_logo_sidebar,
    "header_logo": d_logo_header,
    "report_logo": d_logo_header,
    "active": false,
    "company": "Deedee's"
},
]


const FindActiveAssets = () => images.find(item => item.active)

export default FindActiveAssets;