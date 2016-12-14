import React from "react";
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';
import Home from "./Home";
import App from "./App";

const Routes = () => (
    <Router history = {browserHistory}>
        <Route path = "/" component = {App}>
            <IndexRoute component = {Home}/>
        </Route>
    </Router>
)

export default Routes;
