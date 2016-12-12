import io from "socket.io-client";
import React from "react";
import Home from "./Home/Home";

export default class App extends React.Component {
    constructor(params){
        super(params);
    }

    componentDidMount (){
        this.socket = io();
        this.socket.on("message", (msg) => console.log(msg));
    }

    render(){
        return (
            <Home/>
        );
    }
}