import React from "react";
import {Card, OverlayTrigger, Tooltip} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class LeagueCard extends React.Component {

    state = {
        idLeague: this.props.idLeague,
        strLeague: this.props.strLeague,
        strCountry: this.props.strCountry,
        strBadge: this.props.strBadge
    };

    render() {
        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                {this.state.strLeague}
            </Tooltip>
        );

        return (<Link to={{
                pathname: `/league`,
                leagueProps: {
                    leagueName: this.state.strLeague,
                    idLeague: this.state.idLeague
                }
            }}>
                <OverlayTrigger
                    placement="right"
                    delay={{show: 250, hide: 400}}
                    overlay={renderTooltip}
                >
                    <Card align="center" style={{width: '18rem'}}>
                        <Card.Body>
                            <Card.Img variant="top"
                                      src={this.state.strBadge}/>

                        </Card.Body>
                    </Card>
                </OverlayTrigger>
            </Link>
        )
    }
}