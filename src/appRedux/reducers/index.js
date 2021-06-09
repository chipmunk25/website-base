import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import Auth from "./Auth";
import Common from "./common";
import settings from "./Settings";
const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth: Auth,
    common: Common, settings,
});

export default createRootReducer
