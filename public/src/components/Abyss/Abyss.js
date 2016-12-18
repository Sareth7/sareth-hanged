import React from "react";

class Abyss extends React.Component {
    render(){
        const { first_name, last_name } = this.props.user;

        return (
            <h1>Hello, from Abyss, { first_name + " " + last_name}</h1>
        )
    }
}

export default Abyss;
