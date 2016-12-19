import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Abyss from "../components/Abyss";
import * as chatActions from "../actions/chatActions";

function mapStateToProps(state) {
    return {
        socket: state.socket,
        user: state.user,
        abyss: state.abyss
    }
}

function mapDispatchToProps(dispatch) {
    return {
        chatActions: bindActionCreators(chatActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Abyss);


