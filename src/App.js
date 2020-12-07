import React, {useContext} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Login from './components/Login/login';
import {AuthenticationContext, AuthenticationProvider} from './provider/authentication-provider'
import Home from "./components/Home/home";
import PublicRoute from "./router/public-router";
import PrivateRoute from "./router/private-router";

function App() {
    return (
        <AuthenticationProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Redirect to='/login'/>
                    </Route>
                    <PublicRoute restricted={true} component={Login} path="/login" exact/>
                    <PrivateRoute component={Home} path="/home" exact/>
                </Switch>
            </BrowserRouter>
        </AuthenticationProvider>
    );
}

export default App;
