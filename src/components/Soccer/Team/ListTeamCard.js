import React from "react";
import {Card, Col, Figure, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FcExpand} from "react-icons/all";

export default class ListTeamCard extends React.Component {

    state = {
        teams: [],
        loading: true,
        idLeague: this.props.idLeague,
        leagueName: this.props.leagueName
    };

    componentDidMount() {

        fetch('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=' + this.state.idLeague)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    teams: res.teams,
                    loading: false
                });
            });
    }

    render() {

        const {loading} = this.state;

        if (loading) return <Spinner animation="border"/>;

        return this.state.teams.map(item => (
            <Figure>
                <Col xs="4">
                    <Link key={item.idTeam} to={{
                        pathname: '/team',
                        teamProps: {
                            nameTeam: item.strTeam,
                            idTeam: item.idTeam,
                            leagueName: this.state.leagueName,
                            idLeague: this.state.idLeague
                        }
                    }}>
                        <Card align="center" style={{width: '9rem'}}>

                            <Card.Body>
                                <Card.Img variant="top"
                                          src={item.strTeamBadge}/>{' '}

                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Figure>
        ))

    }
}
