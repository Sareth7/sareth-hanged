import React from "react";
import { Container, Row, Col } from 'reactstrap';

import styles from "./styles.css";
import AbyssNavbar from "./Navbar";
import Chat from "./Chat";


class Abyss extends React.Component {
    render(){
        const { user, chatActions: { sendMessage }, abyss: { messages } } = this.props;

        return (
            <div className="abyss">
                <AbyssNavbar user = {user}/>
                <main>
                    <Container fluid>
                    <Row>
                        <Col md = "1"/>
                        <Col md = "7">
                            <h1>Hello, from Abyss</h1>
                        </Col>
                        <Col md = "4">
                            <Chat
                                messages = { messages }
                                sendMessage = { sendMessage } />
                        </Col>
                    </Row>
                    </Container>
                </main>
            </div>

        )
    }
}

export default Abyss;
