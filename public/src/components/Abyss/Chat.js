import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Chat extends React.Component {
    render(){
        const { messages } = this.props;

        return (
            <div className = "chat">
                <div className="messages">
                    <ol>
                        { messages.map(message => (<li>{ message }</li>))}
                    </ol>
                </div>
                <Form className="chat-form">
                    <FormGroup>
                        <Label for="chatMessage">Ваше сообщение:</Label>
                        <Input id = "chatMessage" type="textarea" name="text" onKeyPress={this.handleOnKeyPress.bind(this)}/>
                    </FormGroup>
                </Form>
            </div>
        )
    }

    handleOnKeyPress(e){
        const { sendMessage } = this.props;
        if(e.key === "Enter"){
            sendMessage(e.target.value);
            e.target.value = "";
        }
    }
}

export default Chat;
