import React from "react";
import {Button, Card, Col, Container, Image, Jumbotron, ListGroup, Row, Table} from "react-bootstrap";

export default class SoccerTeam extends React.Component {

    render() {
        return (
            <Container fluid>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <br/><br/>
                <Row>
                    <Col xs={18} md={12}>
                        <Image width="100%" src="https://www.thesportsdb.com/images/media/team/banner/rtpsrr1419351049.jpg"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8}     align="justify">
                        <Jumbotron fluid>
                            <Container>
                                <h4>Arsenal</h4>
                                <br/>
                                <p>
                                    The Emirates Stadium (known as Ashburton Grove prior to sponsorship, and as Arsenal Stadium for UEFA competitions)
                                    is a football stadium in Holloway, London, England, and the home of Arsenal. With a capacity of 60,704 it is the
                                    fourth-largest football stadium in England after Wembley Stadium, Old Trafford and Tottenham Hotspur Stadium.
                                    \r\n\r\nIn 1997, Arsenal explored the possibility of relocating to a new stadium, having been denied planning
                                    permission by Islington Council to expand its home stadium, Highbury. After considering various options
                                    (including purchasing Wembley Stadium), the club bought an industrial and waste disposal estate in Ashburton
                                    Grove in 2000. A year later, they received the council's approval to build a stadium on the site; manager
                                    Arsène Wenger described this as the \"biggest decision in Arsenal's history\" since the board appointed Herbert Chapman.
                                    Relocation began in 2002, but financial difficulties delayed work until February 2004. Emirates was later announced as
                                    the main sponsor for the stadium. The entire stadium project was completed in 2006 at a cost of £390 million.
                                    The club's former stadium was redeveloped as Highbury Square, an apartment complex.\r\n\r\n The stadium has undergone a
                                    process of \"Arsenalisation\" since 2009 with the aim of restoring Arsenal's heritage and history.
                                    The stadium has hosted international fixtures and music concerts.
                                </p>
                                <Image width="100%" src="https://www.thesportsdb.com/images/media/team/stadium/w1anwa1588432105.jpg"/>
                                <h6> Wembley Stadium</h6>
                            </Container>
                        </Jumbotron>

                    </Col>
                    <Col xs={6} md={4} align="justify">
                        <Jumbotron fluid>
                            <Container>
                                <Image width="50%" src="https://www.thesportsdb.com/images/media/team/badge/uyhbfe1612467038.png"/>

                                <Image width="50%" src="https://www.thesportsdb.com/images/media/team/jersey/mpintc1586884343.png"/>

                                <h2>Stadium: Wembley Stadium</h2>
                            </Container>
                        </Jumbotron>

                    </Col>
                </Row>

                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                <Row>
                    <Col xs={6} md={4}>
                    </Col>
                    <Col xs={4} md={4}>
                    </Col>
                    <Col xs={8} md={4}  align="justify">


                    </Col>
                </Row>

                {/* Columns are always 50% wide, on mobile and desktop */}
                <Row>
                    <Col xs={6}></Col>
                    <Col xs={6}></Col>
                </Row>
            </Container>
        );
    }
}
