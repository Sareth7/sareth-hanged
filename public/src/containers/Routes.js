import React from "react";
import { Route, Redirect, IndexRoute} from 'react-router';

import Home from "./Home";
import App from "./App";
import Abyss from "./Abyss";

export default (
    <Route path = "/" component = {App}>
        <IndexRoute component = {Home}/>
        <Route path = "/abyss" component = {Abyss}/>
    </Route>
);

