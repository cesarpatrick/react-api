import React from "react";
import {Button, Form, Image, Modal} from "react-bootstrap";

export default class UserLogin extends React.Component {

    state = {
        user: [],
        username: "",
        password: "",
        errorMessage: ""
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };



    signUp = () =>{

        fetch("http://localhost:8080/api/auth/signin", {
            method: 'post',
            headers: {'Accept': 'application/json',
                'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
        }).then(response => response.json()).then(data => {
            console.log(data);
            this.setState({errorMessage: data.message});
            document.getElementById("singin-form").reset();
        })
    }

    render() {

        return (
            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-3">
                        <div className="card0">
                            <Image id="loginLogo" src="https://previews.123rf.com/images/duug/duug1206/duug120600003/13966994-sport-logo.jpg" rounded  />
                            <div className="">
                                <Form className="pageTitle" id="singin-form" onSubmit={this.mySubmitHandler}>
                                    <Form.Group controlId="formBasicLogin">
                                        <Form.Control name="username" type="text" placeholder="Username" onChange={this.handleChange} required/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleChange} required/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" size="lg" onClick={this.signUp} block>Sign in</Button>
                                    </Form.Group>
                                    { this.state.errorMessage &&
                                    <h5 className="fade alert alert-danger show"> { this.state.errorMessage } </h5>}
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
