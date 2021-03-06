import React from "react";
import IndexFooter from "../../Footers/IndexFooter";
import IndexNavbar from "../../Navbars/IndexNavbar";
import ListTeamCard from "../Team/ListTeamCard";
import LeagueDetails from "./LeagueDetails";
import LastEvents from "./LeagueLastEvents";
import {Col, Image, Row} from "react-bootstrap";

export default class League extends React.Component {

    state = {
        idLeague: this.props.location.leagueProps.idLeague,
        leagueName: this.props.location.leagueProps.leagueName
    };

    render() {
        return (
            <div id="soccerPage">
                <IndexNavbar></IndexNavbar>,

                <h2 className="pageTitle">{this.state.leagueName}</h2>
                <br/>
                <LeagueDetails idLeague={this.state.idLeague}></LeagueDetails>
                <br/>
                <h2 className="pageTitle">Last Events</h2>
                <LastEvents idLeague={this.state.idLeague}></LastEvents>
                <h2 className="pageTitle">Teams</h2>
                <ListTeamCard leagueName={this.state.leagueName} idLeague={this.state.idLeague}></ListTeamCard>,

                <IndexFooter></IndexFooter>
            </div>
        )
    }
}