import React from "react";
import IndexFooter from "../../Footers/IndexFooter";
import IndexNavbar from "../../Navbars/IndexNavbar";
import TeamDetails from "./TeamDetails";
import {Breadcrumb} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class Team extends React.Component {

    state = {
        idTeam: this.props.location.teamProps.idTeam,
        teamName: this.props.location.teamProps.nameTeam,
        leagueName: this.props.location.teamProps.leagueName,
        idLeague:  this.props.location.teamProps.idLeague
    };

    render() {
        console.log(this.state.leagueName);
        return (
            <div id="soccerPage">
                <IndexNavbar></IndexNavbar>,
                <Breadcrumb>
                    <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/soccer">Soccer</Breadcrumb.Item>
                    <Breadcrumb.Item href=""><Link to={{
                        pathname: `/league`,
                        leagueProps: {
                            leagueName: this.state.leagueName,
                            idLeague: this.state.idLeague
                        }
                    }}>{this.state.leagueName}</Link></Breadcrumb.Item>
                    <Breadcrumb.Item href="" active>{this.state.teamName}</Breadcrumb.Item>
                </Breadcrumb>,

                <h2 className="pageTitle">{this.state.teamName}</h2>
                <br/>
                <TeamDetails idTeam={this.state.idTeam}></TeamDetails>
                <IndexFooter></IndexFooter>
            </div>
        )
    }
}