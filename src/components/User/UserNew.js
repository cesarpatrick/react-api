import React from "react";

import {Button, Form} from "react-bootstrap";
import IndexNavbar from "../Navbars/IndexNavbar";
import IndexFooter from "../Footers/IndexFooter";

export default class UserNew extends React.Component {

    state = {

    };

    render() {
        return (
            <div className="layoutPage">
                <IndexNavbar></IndexNavbar>,
                <Form className="userFrom">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Login</Form.Label>
                        <Form.Control type="email" placeholder="Enter login" />
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" size="lg" type="submit" block>Save</Button>
                    </Form.Group>
                </Form>

                ,
                <IndexFooter></IndexFooter>
            </div>
        )
    }
}
