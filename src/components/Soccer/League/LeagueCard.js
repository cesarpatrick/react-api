import React from "react";
import {Alert, Button, Card, OverlayTrigger, Tooltip} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BsHeartFill} from "react-icons/all";

export default class LeagueCard extends React.Component {

    state = {
        idLeague: this.props.idLeague,
        strLeague: this.props.strLeague,
        strCountry: this.props.strCountry,
        strBadge: this.props.strBadge,
        nameSport: this.props.nameSport
    };

    render() {
        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                {this.state.strLeague}
            </Tooltip>
        );

        return (
            <Card align="center" style={{width: '12rem'}}>
                <OverlayTrigger
                    placement="right"
                    delay={{show: 250, hide: 400}}
                    overlay={renderTooltip}
                >
                    <Link to={{
                        pathname: `/league`,
                        leagueProps: {
                            leagueName: this.state.strLeague,
                            idLeague: this.state.idLeague,
                            nameSport: this.state.nameSport
                        }
                    }}>
                        <Card.Body>
                            <Card.Img variant="top"
                                      src={this.state.strBadge}/>
                        </Card.Body>
                    </Link>
                </OverlayTrigger>
                <Button variant="outline-warning" block><span><BsHeartFill></BsHeartFill></span></Button>

            </Card>
        )
    }
}
