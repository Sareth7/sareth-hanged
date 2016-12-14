import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Button, Jumbotron } from 'reactstrap';
import swal from "sweetalert";
import sweetalertStyles from "sweetalert/dist/sweetalert.css";

import styles from "./styles.css";
import Header from "../Navbar";

export default class Home extends React.Component {
    componentDidMount(){
        const { socket } = this.props;
    }

    render(){
        return (
            <div>
                <Header/>
                <Container>
                    <Row>
                        <Col md = "2"></Col>
                        <Col md = "8">
                            <div className="text-center">
                                <h1 className="display-3 text-center">Оставь надежду, Висельник!</h1>
                                <p className="lead">This is  simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                                <Button
                                    color="primary"
                                    size="lg"
                                    onClick={this.handleStartButtonClick.bind(this)}>
                                    Начать
                                </Button>
                            </div>
                        </Col>
                        <Col md = "2"></Col>
                    </Row>
                </Container>
            </div>
        )
    }

    handleStartButtonClick(){
        const { socket } = this.props;
        socket.emit("auth", {"login": "Sareth"});
    }
}