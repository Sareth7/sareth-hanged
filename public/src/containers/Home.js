import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as socketActions from "../actions/socketActions";
import Home from "../components/Home";

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
