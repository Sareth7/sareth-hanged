import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as socketActions from "../actions/socketActions";
import * as userActions from "../actions/userActions";
import Home from "../components/Home";

function mapStateToProps(state) {
    return {
        socket: state.socket,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        socketActions: bindActionCreators(socketActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
