import React from "react";
import {Col, Image, Spinner} from "react-bootstrap";
import TeamJersey from "./TeamJersey";

export default class TeamDetails extends React.Component {

    state = {
        teams: [],
        loading: true,
        idTeam: this.props.idTeam
    };

    componentDidMount() {

        fetch('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=' + this.state.idTeam)
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
            <div key={item.idTeam}>
                <Col>
                     <Image src={item.strTeamBanner} style={{width: '100%'}}></Image>
                </Col>
                <br/>
                <span className="pageTitle">{item.strDescriptionEN}</span>
                <h2 className="pageTitle">Stadium {item.strStadium}</h2>
                <Col>
                    <Image style={{width: '100%'}} src={item.strStadiumThumb}></Image>
                </Col>
                <br/>
                <span className="pageTitle">{item.strStadiumDescription}</span>
                <br/><br/>
                <h2 className="pageTitle">Jersey</h2>
                <TeamJersey idTeam={this.state.idTeam}></TeamJersey>
                <br/>
                <br/>
                <h2 className="pageTitle">Gallery</h2>
                <br/>
                <Image style={{width: '50rem'}} src={item.strTeamFanart1}></Image>
                <Image style={{width: '50rem'}} src={item.strTeamFanart2}></Image>
                <Image style={{width: '50rem'}} src={item.strTeamFanart3}></Image>
                <Image style={{width: '50rem'}} src={item.strTeamFanart4}></Image>
            </div>

        ))

    }
}
