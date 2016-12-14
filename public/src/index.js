import 'babel-polyfill'
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store";
import Routes from "./containers/Routes";

const store = configureStore();

render(
    <Provider store = { store }>
        <Routes/>
    </Provider>,
    document.getElementById("root")
);

module.hot.accept();
