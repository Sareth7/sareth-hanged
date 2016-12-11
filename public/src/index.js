import 'babel-polyfill'
import io from "socket.io-client";
import React from "react";
import { render } from "react-dom";

class App extends React.Component {
    constructor(params){
        super(params);
    }

    componentDidMount (){
        this.socket = io();
        this.socket.on("message", (msg) => console.log(msg));
    }

    render(){
        return (
            <h1>Hello Hanged!</h1>
        );
    }
}

render(
    <App/>,
    document.getElementById("root")
);

module.hot.accept();
