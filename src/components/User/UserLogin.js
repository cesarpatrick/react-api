import React from "react";
import {Button, Form, Modal} from "react-bootstrap";

export default class UserLogin extends React.Component {

    state = {
        user: [],
        login: "",
        password: ""

    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };



    mySubmitHandler = () => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: this.state.email, password: this.state.password})
         };
        fetch('http://localhost:8080/api/user/login', requestOptions)
            .then(response => response.json())
            .then(this.props.history.push('/home'));


    }

    render() {

        return (
            <div className="pageTitle" className="userFrom">

                <Form onSubmit={this.mySubmitHandler}>
                    <Form.Group controlId="formBasicLogin">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="login" type="text" placeholder="Enter login" onChange={this.handleChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                    </Form.Group>

                    <Form.Group>
                    <Button variant="primary" size="lg" type="submit" block>Sign in</Button>
                    </Form.Group>
                </Form>

            </div>
        )
    }
}
