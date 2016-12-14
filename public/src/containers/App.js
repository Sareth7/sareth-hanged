import React from "react";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as socketActions from "../actions/socketActions";


class App extends React.Component {
    constructor(params, context){
        super(params, context);
    }

    componentWillMount (){
        const { initializeConnection } = this.props.socketActions;
        initializeConnection();
    }

    render(){
        return (
            <div className="app">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        socket: state.socket
    }
}

function mapDispatchToProps(dispatch) {
    return {
        socketActions: bindActionCreators(socketActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);