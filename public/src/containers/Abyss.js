import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Abyss from "../components/Abyss";

function mapStateToProps(state) {
    return {
        socket: state.socket,
        user: state.user,
        users: state.users
    }
}

export default connect(mapStateToProps)(Abyss);


