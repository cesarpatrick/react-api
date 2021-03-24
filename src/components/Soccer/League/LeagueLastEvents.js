import React from "react";
import {Badge, Col, Container, Image, Row, Spinner} from "react-bootstrap";
import {FcCalendar, FcHome} from "react-icons/all";

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
                    events: res.events.sort(function(a,b){
                        return parseInt(a.dateEventLocal)  - parseInt(b.dateEventLocal);
                    }),
                    loading: false
                });
            });
    }

    render() {

        const {loading} = this.state;

        if (loading) return <Spinner animation="border"/>;

        if(this.state.events == null || this.state.events.length == 0) return <span>There is not informations available about the last events for this league.</span>;

        return this.state.events.map(item => (
            <div key={item.idEvent}>
                <Container>
                    <Row>
                        <Col sm={2} className="eventTitle">
                            <FcCalendar></FcCalendar> <Badge variant="warning" id="eventTextColor">{item.dateEventLocal}</Badge>
                        </Col>
                        <Col sm={4} className="eventTitleCenter">
                            <span>{item.strHomeTeam}{"                        "}{item.intHomeScore}{"                        -                        "}
                                {item.intAwayScore}{"                        "}{item.strAwayTeam}{"                        "}</span>
                        </Col>
                        <Col sm={4}>
                            <Badge variant="warning" id="eventTextColor"><FcHome></FcHome>{" "}{item.strVenue}
                            </Badge>
                        </Col>
                    </Row>
                </Container>
            </div>

        ))

    }
}
