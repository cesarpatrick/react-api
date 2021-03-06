import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class LeagueCard extends React.Component {

    state = {
        idLeague: this.props.idLeague,
        strLeague: this.props.strLeague,
        strCountry: this.props.strCountry,
        strBadge: this.props.strBadge
    };


    render() {
        return (

            <Link to={{
                pathname: `/league`,
                leagueProps: {
                    leagueName: this.state.strLeague,
                    idLeague: this.state.idLeague
                }
            }}>
                <Card align="center" style={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Img variant="top"
                                  src={this.state.strBadge}/>

                    </Card.Body>
                </Card>
            </Link>

        )
    }
}