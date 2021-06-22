
import { createAction } from "redux-actions";

import {
    
    REQUEST_GET_ABOUT, SUCCESS_GET_ABOUT, REQUEST_SAVE_ABOUT, SUCCESS_SAVE_ABOUT,
    REQUEST_UPDATE_ABOUT, SUCCESS_UPDATE_ABOUT, REQUEST_DELETE_ABOUT, SUCCESS_DELETE_ABOUT,

 REQUEST_GET_LINKGROUP, SUCCESS_GET_LINKGROUP, REQUEST_SAVE_LINKGROUP, SUCCESS_SAVE_LINKGROUP,
    REQUEST_UPDATE_LINKGROUP, SUCCESS_UPDATE_LINKGROUP, REQUEST_DELETE_LINKGROUP, SUCCESS_DELETE_LINKGROUP,

 REQUEST_GET_USEFULLINKS, SUCCESS_GET_USEFULLINKS, REQUEST_SAVE_USEFULLINKS, SUCCESS_SAVE_USEFULLINKS,
    REQUEST_UPDATE_USEFULLINKS, SUCCESS_UPDATE_USEFULLINKS, REQUEST_DELETE_USEFULLINKS, SUCCESS_DELETE_USEFULLINKS,
    
 REQUEST_GET_PUBLICATION, SUCCESS_GET_PUBLICATION, REQUEST_SAVE_PUBLICATION, SUCCESS_SAVE_PUBLICATION,
    REQUEST_UPDATE_PUBLICATION, SUCCESS_UPDATE_PUBLICATION, REQUEST_DELETE_PUBLICATION, SUCCESS_DELETE_PUBLICATION,
    

} from "./constants"


export const requestGetAbout = createAction(REQUEST_GET_ABOUT);
export const successGetAbout = createAction(SUCCESS_GET_ABOUT);
export const requestSaveAbout = createAction(REQUEST_SAVE_ABOUT);
export const successSaveAbout = createAction(SUCCESS_SAVE_ABOUT);
export const requestUpdateAbout = createAction(REQUEST_UPDATE_ABOUT);
export const successUpdateAbout = createAction(SUCCESS_UPDATE_ABOUT);
export const requestDeleteAbout = createAction(REQUEST_DELETE_ABOUT);
export const successDeleteAbout = createAction(SUCCESS_DELETE_ABOUT);



export const requestGetLinkGroup = createAction(REQUEST_GET_LINKGROUP);
export const successGetLinkGroup = createAction(SUCCESS_GET_LINKGROUP);
export const requestSaveLinkGroup = createAction(REQUEST_SAVE_LINKGROUP);
export const successSaveLinkGroup = createAction(SUCCESS_SAVE_LINKGROUP);
export const requestUpdateLinkGroup = createAction(REQUEST_UPDATE_LINKGROUP);
export const successUpdateLinkGroup = createAction(SUCCESS_UPDATE_LINKGROUP);
export const requestDeleteLinkGroup = createAction(REQUEST_DELETE_LINKGROUP);
export const successDeleteLinkGroup = createAction(SUCCESS_DELETE_LINKGROUP);


export const requestGetUsefulLinks = createAction(REQUEST_GET_USEFULLINKS);
export const successGetUsefulLinks = createAction(SUCCESS_GET_USEFULLINKS);
export const requestSaveUsefulLinks = createAction(REQUEST_SAVE_USEFULLINKS);
export const successSaveUsefulLinks = createAction(SUCCESS_SAVE_USEFULLINKS);
export const requestUpdateUsefulLinks = createAction(REQUEST_UPDATE_USEFULLINKS);
export const successUpdateUsefulLinks = createAction(SUCCESS_UPDATE_USEFULLINKS);
export const requestDeleteUsefulLinks = createAction(REQUEST_DELETE_USEFULLINKS);
export const successDeleteUsefulLinks = createAction(SUCCESS_DELETE_USEFULLINKS);


export const requestGetPublication = createAction(REQUEST_GET_PUBLICATION);
export const successGetPublication = createAction(SUCCESS_GET_PUBLICATION);
export const requestSavePublication = createAction(REQUEST_SAVE_PUBLICATION);
export const successSavePublication = createAction(SUCCESS_SAVE_PUBLICATION);
export const requestUpdatePublication = createAction(REQUEST_UPDATE_PUBLICATION);
export const successUpdatePublication = createAction(SUCCESS_UPDATE_PUBLICATION);
export const requestDeletePublication = createAction(REQUEST_DELETE_PUBLICATION);
export const successDeletePublication = createAction(SUCCESS_DELETE_PUBLICATION);

