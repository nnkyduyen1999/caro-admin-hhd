import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthenticationContext} from "../provider/authentication-provider";

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const {state} = useContext(AuthenticationContext);
    console.log(state);
    return (
        <Route {...rest} render={props => (
            state.isAuthenticated && restricted ?
                <Redirect to="/home" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;
