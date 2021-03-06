import React from "react";
import IndexFooter from "../../Footers/IndexFooter";
import IndexNavbar from "../../Navbars/IndexNavbar";
import TeamDetails from "./TeamDetails";

export default class Team extends React.Component {

    state = {
        idTeam: this.props.location.teamProps.idTeam,
        teamName: this.props.location.teamProps.nameTeam
    };

    render() {
        return (
            <div id="soccerPage">
                <IndexNavbar></IndexNavbar>,

                <h2 className="pageTitle">{this.state.teamName}</h2>
                <br/>
                <TeamDetails idTeam={this.state.idTeam}></TeamDetails>
                <IndexFooter></IndexFooter>
            </div>
        )
    }
}