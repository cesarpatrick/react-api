import React from "react";
import {Button, Image, Nav, Navbar, NavDropdown, Spinner} from "react-bootstrap";
import {FcManager} from "react-icons/all";
import {Link} from "react-router-dom";

export default class IndexNavbar extends React.Component {
    state = {
        sports: [],
        loading: true
    };

    componentDidMount() {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_sports.php')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    sports: res.sports.slice(0, 8),
                    loading: false
                });
            });
    }


    render() {

        const {loading} = this.state;

        if (loading) return <Spinner animation="border"/>;

        return <Navbar collapseOnSelect bg="dark" expand="lg">
            <Navbar.Brand href="#home">
                <Image
                    src="https://64.media.tumblr.com/e4c00bb9486d6c9edc0b053b0d143277/bdda942d8619c323-b0/s250x400/d486b10f11a93f288c604d5f42281584cffdf23a.png"
                    rounded="true"></Image>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav.Link href="/home"><Button variant="warning">Home</Button>{' '}</Nav.Link>

                <Nav className="mr-auto">
                    {this.state.sports.map(item => (
                        <Link to={{
                            pathname: "/"+item.strSport,
                            leagueProps: {
                                nameSport: item.strSport
                            }
                        }}>
                        <Nav.Link key={item.strSport} href={"/"+item.strSport} ><Button
                            variant="outline-warning">{item.strSport}</Button>{' '}
                        </Nav.Link>
                        </Link>

                    ))}

                    <NavDropdown title={<span id="userMenu"><FcManager ></FcManager></span>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Add New User</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Log off</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    }

}
