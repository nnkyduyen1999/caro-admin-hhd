import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Login from './components/Login/login';
import {AuthenticationProvider} from './provider/authentication-provider'
import Home from "./components/Home/home";
import PublicRoute from "./router/public-router";
import PrivateRoute from "./router/private-router";
import UserAccount from "./components/User Account/index";

function App() {
    return (
        <AuthenticationProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Redirect to='/login'/>
                    </Route>
                    {/*<PublicRoute restricted={true} component={Login} path="/login" exact/>*/}
                    {/*<PrivateRoute component={Home} path="/home" exact/>*/}
                    <PublicRoute component={Login} path="/login" exact/>
                    <PublicRoute component={Home} path="/home" exact/>
                    <PublicRoute component={UserAccount} path="/user-account" exact/>
                </Switch>
            </BrowserRouter>
        </AuthenticationProvider>
    );
}

export default App;
