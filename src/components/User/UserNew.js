import React from "react";

import {Button, Form} from "react-bootstrap";
import IndexNavbar from "../Navbars/IndexNavbar";
import IndexFooter from "../Footers/IndexFooter";


export default class UserNew extends React.Component {

    state = {
        user: [],
        login: "",
        password: "",
        username: "",
        name:"",
        errorMessage: '',
        successMessage: ''

    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };


    signUp = () =>{

        fetch("http://localhost:8080/api/auth/signup", {
            method: 'post',
            headers: {'Accept': 'application/json',
                'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                username: this.state.username
            }),
        }).then(response => response.json())
          .then(data => {

                if (data.message ==='User registered successfully!'){
                    this.state.success = true;
                    this.state.email = '';
                    this.state.password = '';
                    this.state.name = '';
                    this.state.username= '';

                    document.getElementById("singup-form").reset();
                    this.setState({successMessage: data.message});
                    this.setState({errorMessage: ''});
                }else{
                    this.setState({successMessage: ''});
                    this.setState({errorMessage: data.message});
                }

            })

    }

    render() {

        return (
            <div className="layoutPage">
                <IndexNavbar></IndexNavbar>,

                <Form className="userFrom" id="singup-form">
                    { this.state.errorMessage &&
                    <h5 className="fade alert alert-danger show"> { this.state.errorMessage } </h5>}
                    { this.state.successMessage &&
                    <h5 className="fade alert alert-success show"> { this.state.successMessage } </h5>}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Name" onChange={this.handleChange} required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.handleChange} required/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" type="username" placeholder="Enter username" onChange={this.handleChange} required/>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleChange} required/>
                        </Form.Group>

                        <Button variant="primary" size="lg" onClick={this.signUp} block>Save</Button>
                    </Form.Group>
                </Form>

                ,
                <IndexFooter></IndexFooter>
            </div>
        )
    }
}
