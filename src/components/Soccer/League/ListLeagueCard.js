import React from "react";
import {Col, Figure, Spinner} from "react-bootstrap";
import LeagueCard from "./LeagueCard";

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

            <Figure key={item.idLeague}>
                <Col xs="4">
                    <LeagueCard strLeague={item.strLeague} strCountry={item.strCountry}
                                strBadge={item.strBadge} idLeague={item.idLeague}></LeagueCard>
                </Col>
            </Figure>
        ))

    }
}
