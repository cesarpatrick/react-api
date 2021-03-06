import React from "react";
import {Card, Col, Image, Row, Spinner} from "react-bootstrap";

export default class LeagueDetails extends React.Component {

    state = {
        league: [],
        loading: true,
        idLeague: this.props.idLeague
    };

    componentDidMount() {

        fetch('https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=' + this.state.idLeague)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    league: res.leagues,
                    loading: false
                });
            });
    }

    render() {

        const {loading} = this.state;

        if (loading) return <Spinner animation="border"/>;
        return this.state.league.map(item => (
            <div key={item.idLeague}>
                <Card align="center" style={{width: '95%'}}>
                    <Card.Body>
                        <Card.Img variant="top"
                                  src={item.strBanner}/>
                    </Card.Body>
                </Card>

                <span className="pageTitle">{item.strDescriptionEN}</span>
                <h2 className="pageTitle">Trophy</h2>
                <Col sm={4}><Image style={{width: '20rem'}} src={item.strTrophy}></Image></Col>
            </div>
        ))
    }
}
