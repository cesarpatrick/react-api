import React from "react";
import {Button, Card, OverlayTrigger, Tooltip} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BsFillTrashFill, BsHeartFill} from "react-icons/all";

export default class LeagueCard extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        idLeague: this.props.idLeague,
        strLeague: this.props.strLeague,
        strCountry: this.props.strCountry,
        strBadge: this.props.strBadge,
        nameSport: this.props.nameSport,
        isFavourite: this.props.isFavourite,
        successMessage: ''
    };

    saveFavourite  = () =>{

        fetch('http://localhost:8080/api/user/' + this.state.idLeague)
            .then(res => res.json())
            .then(data => {
                this.setState({successMessage: "League Added to your favourites."});
            });

    }

    removeFavourite  = () =>{
        fetch('http://localhost:8080/api/user/favourites/remove/' + this.state.idLeague)
            .then(res => res.json())
            .then(data => {
                window.location.href = window.location.href + "?isFavourite=true";
            });
    }


    render() {
        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                {this.state.strLeague}
            </Tooltip>
        );

        const isFavourite = this.state.isFavourite;
        const renderRemoveButton = () => {
            if (isFavourite) {
                return <Button variant="outline-danger" isFavourite={this.state.isFavourite} onClick={this.removeFavourite} block><span><BsFillTrashFill></BsFillTrashFill></span></Button>
            }else{
                return <Button variant="outline-warning" onClick={this.saveFavourite} block><span><BsHeartFill></BsHeartFill></span></Button>
            }
        }

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
                            { this.state.successMessage &&
                            <h5 className="fade alert alert-success show"> { this.state.successMessage } </h5>}
                            <Card.Img variant="top"
                                      src={this.state.strBadge}/>
                        </Card.Body>
                    </Link>
                </OverlayTrigger>

                {renderRemoveButton()}

            </Card>
        )
    }
}
