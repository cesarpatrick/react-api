import React, {useState} from "react";
import {Button, Image, Nav, Navbar, NavDropdown, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import {VscAccount} from "react-icons/all";

export default class IndexNavbar extends React.Component {

    state = {
        sports: [],
        loading: true,
        open: false
    };



    componentDidMount() {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_sports.php')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    sports: res.sports.slice(0, 11),
                    loading: false,
                });
            });
    }

    render() {

        const {loading} = this.state;

        if (loading) return <Spinner animation="border"/>;

        return <Navbar bg="dark" expand="lg"  collapseOnSelect >
            <Navbar.Brand href="/home">Sportswiki</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto navbar-expand-x1" activeKey="1">

                    <Nav.Link key={"fav"} href={"/home"} eventKey="1"><Button
                        variant="outline-warning">Home</Button>{' '}
                    </Nav.Link>

                    {this.state.sports.map(item => (
                        <Link to={{
                            pathname: "/" + item.strSport,
                            leagueProps: {
                                nameSport: item.strSport
                            }
                        }}>
                            <Nav.Link eventKey="14" key={item.strSport} href={"/" + item.strSport}><Button
                                variant="outline-warning">{item.strSport}</Button>{' '}
                            </Nav.Link>
                        </Link>

                    ))}
                    <Nav.Link key={"fav"} href={"/"}><Button
                        variant="outline-warning">Favourites</Button>{' '}
                    </Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title={<VscAccount></VscAccount>} className="userMenu" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/user/new">New</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Edit</NavDropdown.Item>
                        <NavDropdown.Item href="/">Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

            </Navbar.Collapse>

        </Navbar>
    }

}
