import React from "react";
import {Button, Card, Col, Container, Image, ListGroup, Row} from "react-bootstrap";

export default class ListTeams extends React.Component {

    render() {
        return (
            <Container fluid>

                <Row>
                    <Col xs={3} md={2}>
                        <Card style={{width: '18rem'}}>

                            <Card.Body>
                                <Card.Img variant="top"
                                          src="https://www.thesportsdb.com/images/media/team/badge/uyhbfe1612467038.png"/>
                                <Card.Text>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3} md={2}>
                        <Card style={{width: '18rem'}}>

                            <Card.Body>
                                <Card.Img variant="top"
                                          src="https://www.thesportsdb.com/images/media/team/badge/uyhbfe1612467038.png"/>
                                <Card.Text>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3} md={2}  align="justify">
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Img variant="top"
                                          src="https://www.thesportsdb.com/images/media/team/badge/uyhbfe1612467038.png"/>
                                <Card.Text>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3} md={2}>
                    <Card style={{width: '18rem'}}>

                        <Card.Body>
                            <Card.Img variant="top"
                                      src="https://www.thesportsdb.com/images/media/team/badge/uyhbfe1612467038.png"/>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3} md={2}>
                    <Card style={{width: '18rem'}}>

                        <Card.Body>
                            <Card.Img variant="top"
                                      src="https://www.thesportsdb.com/images/media/team/badge/uyhbfe1612467038.png"/>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3} md={2}  align="justify">
                    <Card style={{width: '18rem'}}>
                        <Card.Body>
                            <Card.Img variant="top"
                                      src="https://www.thesportsdb.com/images/media/team/badge/uyhbfe1612467038.png"/>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                </Row>



            </Container>
        )
    }
}