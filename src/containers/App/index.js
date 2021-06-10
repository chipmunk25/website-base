import React,{ memo, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import MainApp from "./MainApp";

import { Redirect, Route, Switch, useLocation, useRouteMatch, useHistory } from "react-router-dom";
import Homepage from '../Homepage';
import SignIn from '../SignIn';
import { setInitUrl } from "appRedux/actions/auth";
const RestrictedRoute = ({ component: Component, location, authUser, ...rest }) =>
    <Route
        {...rest}
        render={props =>
            authUser
                ? <Component {...props} />
                : <Redirect
                    to={{ pathname: '/home', state: { from: location } }}
                />}
    />;


const App = () => {
    const { authUser, initURL } = useSelector(({ auth }) => auth);

    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    useEffect(() => {
        if (initURL === '') {
            dispatch(setInitUrl(location.pathname));
        }
    });

    useEffect(() => {
        if (location.pathname === '/') {
            if (authUser === null) {
                history.push('/home');
            } else if (initURL === '' || initURL === '/' || initURL === '/home') {
                history.push('/dashboard');
            } else {
                history.push(initURL);
            }
        }
    }, [authUser, initURL, location, history]);

    return (
        <Switch>
            <Route exact path='/home' component={Homepage} />
            <Route exact path='/signin' component={SignIn} />
            <RestrictedRoute path={`${match.url}`} authUser={authUser} location={location}
                component={MainApp} />
        </Switch>
    );
};

export default memo(App);