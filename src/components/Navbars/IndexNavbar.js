import React from "react";
import {Badge, Button, Image, Nav, Navbar, Spinner} from "react-bootstrap";


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
                    sports: res.sports.slice(0,8),
                    loading: false
                });
            });
    }


    render() {

        const {loading} = this.state;

        if (loading) return <Spinner animation="border"/>;

        return <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                 <Badge variant="secondary">Sportswiki</Badge>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/"><Button variant="warning">Home</Button>{' '}</Nav.Link>

                {this.state.sports.map(item => (
                    <li key={item.idLeague}>
                        <Nav.Link href="/soccer"><Button variant="outline-warning" >{item.strSport}</Button>{' '}</Nav.Link>
                    </li>
                ))}

                <Nav.Link href="#Favourites"><Button variant="outline-warning">Favourites</Button>{' '}</Nav.Link>

            </Nav>
        </Navbar>
    }

}
