import React from "react";
import IndexFooter from "../../Footers/IndexFooter";
import IndexNavbar from "../../Navbars/IndexNavbar";
import ListTeamCard from "../Team/ListTeamCard";
import LeagueDetails from "./LeagueDetails";
import LastEvents from "./LeagueLastEvents";
import LeagueTable from "./LeagueTable";
import {Breadcrumb} from "react-bootstrap";

export default class League extends React.Component {

    state = {
        idLeague: this.props.location.leagueProps.idLeague,
        leagueName: this.props.location.leagueProps.leagueName
    };

    render() {
        return (
            <div id="soccerPage">
                <IndexNavbar></IndexNavbar>,
                <Breadcrumb>
                    <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/soccer">Soccer</Breadcrumb.Item>
                    <Breadcrumb.Item href="/soccer" active>{this.state.leagueName}</Breadcrumb.Item>
                </Breadcrumb>,

                <h2 className="pageTitle">{this.state.leagueName}</h2>
                <br/>
                <LeagueDetails idLeague={this.state.idLeague}></LeagueDetails>
                <br/>
                <h2 className="pageTitle">Teams</h2>
                <ListTeamCard leagueName={this.state.leagueName} idLeague={this.state.idLeague}></ListTeamCard>
                <h2 className="pageTitle">Table</h2>
                <LeagueTable idLeague={this.state.idLeague}></LeagueTable>
                <h2 className="pageTitle">Last Events</h2>
                <LastEvents  idLeague={this.state.idLeague}></LastEvents>,

                <IndexFooter></IndexFooter>
            </div>
        )
    }
}