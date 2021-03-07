import React from "react";
import {Breadcrumb, Container} from "react-bootstrap";
import IndexNavbar from "./Navbars/IndexNavbar";
import IndexFooter from "./Footers/IndexFooter";
import ListLeagueCard from "./Soccer/League/ListLeagueCard";

export default class IceHockey extends React.Component {

    state = {
        leagues: [],
        loading: true
    };

    componentDidMount() {
        fetch('http://localhost:8080/api/league/Ice Hockey')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    leagues: res.leagues,
                    loading: false
                });
            });
    }

    render() {
        return (
            <div className="layoutPage">
                <IndexNavbar></IndexNavbar>,
                <Breadcrumb>
                    <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/Ice Hockey" active>
                        Ice Hockey
                    </Breadcrumb.Item>
                </Breadcrumb>,
                <Container fluid>
                    <h2 className="pageTitle">Ice Hockey Leagues</h2>
                    <br/>

                    {this.state.leagues.map(item => (
                        <ListLeagueCard  key={item.idLeague} value={item.idLeague} nameSport={item.strSport}/>
                    ))}

                </Container>,

                <IndexFooter></IndexFooter>
            </div>
        )
    }
}