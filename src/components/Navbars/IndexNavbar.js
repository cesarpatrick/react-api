import React from "react";
import {Button, Image, Nav, Navbar, Spinner} from "react-bootstrap";
import {BsPeopleCircle} from "react-icons/bs";

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

        return <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <Image
                        src="https://64.media.tumblr.com/e4c00bb9486d6c9edc0b053b0d143277/bdda942d8619c323-b0/s250x400/d486b10f11a93f288c604d5f42281584cffdf23a.png"
                        rounded="true"></Image>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home"><Button variant="warning">Home</Button>{' '}</Nav.Link>

                    {this.state.sports.map(item => (

                            <Nav.Link key={item.idLeague} href="/soccer"><Button variant="outline-warning">{item.strSport}</Button>{' '}
                            </Nav.Link>

                    ))}

                    <Nav.Link href="#Favourites"><Button variant="outline-warning">Favourites</Button>{' '}</Nav.Link>
                    <Nav.Link href="#"><Button variant="outline-warning"
                                               rounrounded="true"><span><BsPeopleCircle></BsPeopleCircle></span></Button>{''}
                    </Nav.Link>
                </Nav>
            </Navbar>
    }

}
