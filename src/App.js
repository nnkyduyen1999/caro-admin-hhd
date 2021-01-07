import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Login from './components/Login/login';
import {AuthenticationProvider} from './provider/authentication-provider'
import Home from "./components/Home/home";
import PublicRoute from "./router/public-router";
import PrivateRoute from "./router/private-router";
import ListUser from './components/ListUser/list-user';
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

function App() {
    const darkTheme = createMuiTheme({
        palette: {
            type: "dark",
        },
    });
    return (
        <ThemeProvider theme={darkTheme}>
            <AuthenticationProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/'>
                            <Redirect to='/login'/>
                        </Route>
                        <PublicRoute restricted={true} component={Login} path="/login" exact/>
                        <PrivateRoute component={Home} path="/home" exact/>
                        <PrivateRoute component={ListUser} path="/list-user" exact/>
                    </Switch>
                </BrowserRouter>
            </AuthenticationProvider>
        </ThemeProvider>
    );
}

export default App;
