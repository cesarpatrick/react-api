import React from "react";
import IndexFooter from "./Footers/IndexFooter";
import {Col, Container, Navbar} from "react-bootstrap";
import UserLogin from "./User/UserLogin";

export default class App extends React.Component {

    render() {
        return (

            <div>

                <Navbar bg="dark" expand="lg"  collapseOnSelect >
                    <Navbar.Brand href="/home">Sportswiki</Navbar.Brand>
                </Navbar>

                <br/>


                <UserLogin></UserLogin>


                <IndexFooter></IndexFooter>
            </div>
        );
    }
}
