import React from "react";
import {Badge, Col, Container, Row, Spinner} from "react-bootstrap";

export default class LastEvents extends React.Component {

    state = {
        idLeague: this.props.idLeague,
        events: []
    };

    componentDidMount() {

        fetch('https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=' + this.state.idLeague)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    events: res.events,
                    loading: false
                });
            });
    }

    render() {

        const {loading} = this.state;

        if (loading) return <Spinner animation="border"/>;
        return this.state.events.map(item => (
            <div key={item.idLeague}>
                <Container>
                    <Row>
                        <Col sm={2} className="eventTitle">
                            <Badge variant="warning" id="eventTextColor">{item.dateEventLocal}</Badge>
                        </Col>
                        <Col sm={4} className="eventTitleCenter">
                            <span>{item.strHomeTeam}{"                        "}{item.intHomeScore}{"                        -                        "}
                                {item.intAwayScore}{"                        "}{item.strAwayTeam}{"                        "}</span>
                        </Col>
                        <Col sm={4}>
                            <Badge variant="warning" id="eventTextColor">{item.strVenue}</Badge>

                        </Col>

                    </Row>
                </Container>
            </div>

        ))

    }
}