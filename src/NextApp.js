
import React from "react";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from "react-router-dom";

import configureStore from './appRedux/store';
import { history } from "./appRedux/history"
import App from "./containers/App/index";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import "./assets/bootstrap-icons/bootstrap-icons.css"
import "./assets/remixicon/remixicon.css" 
import "./assets/css/style.css"
import "./assets/css/file_manager.css"
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

const store = configureStore(/* provide initial state if any */);

const NextApp = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>


export default (NextApp);
