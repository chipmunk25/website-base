import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import Auth from "./Auth";
import Common from "./common";
import settings from "./Settings";
import webpages from "./webpage"
const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth: Auth,
    common: Common, settings, webpages
});

export default createRootReducer
