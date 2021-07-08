import React from 'react';

import { Route, Switch, Redirect } from "react-router-dom";

import Dashboard from "./Dashboard"
import About from "./About"
import LinkGroup from "./LinkGroup"
import UsefulLinks from "./UsefulLinks"
import Publication from "./Publications"
import Setups from './Setups';
import Members from './Members';
import SimpleChanges from './SimpleChanges';
import Masthead from './Masthead';

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}`} />
      <Route path={`${match.url}dashboard`} component={Dashboard} />
      <Route path={`${match.url}about`} component={About} />
      <Route path={`${match.url}masthead`} component={Masthead} />
      <Route path={`${match.url}linkgroup`} component={LinkGroup} />
      <Route path={`${match.url}usefullinks`} component={UsefulLinks} />
      <Route path={`${match.url}publication`} component={Publication} />
      <Route path={`${match.url}members`} component={Members} />
      <Route path={`${match.url}simplechanges`} component={SimpleChanges} />
      <Route path={`${match.url}setups`} component={Setups} />

    </Switch>
  </div>
);


export default App;