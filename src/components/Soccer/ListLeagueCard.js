import React from "react";
import {Button, Card, Col, Figure, ListGroup, Nav, Row, Spinner} from "react-bootstrap";


export default class ListLeagueCard extends React.Component {


    state = {
        leagues: [],
        loading: true,
        idLeague: this.props.value
    };


    componentDidMount() {

        fetch('https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=' + this.state.idLeague)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    leagues: res.leagues,
                    loading: false
                });
            });
    }


    render() {

        const {loading} = this.state;

        if (loading) return <Spinner animation="border"/>;

        return this.state.leagues.map(item => (

            <Figure>
                <Col xs="4" key={item.idLeague}>
                    <Card align="center" style={{width: '18rem'}}>
                        <Card.Body>
                            <Card.Img variant="top"
                                      src={item.strBadge}/>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{item.strLeague}</ListGroup.Item>
                                    <ListGroup.Item>{item.strCountry}</ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Figure>
        ))

    }
}
