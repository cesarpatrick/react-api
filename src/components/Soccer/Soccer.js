import React from "react";
import IndexFooter from "../Footers/IndexFooter";
import IndexNavbar from "../Navbars/IndexNavbar";
import {Breadcrumb, Container} from "react-bootstrap";
import ListLeagueCard from "./League/ListLeagueCard";

export default class Soccer extends React.Component {

    state = {
        leagues: [],
        loading: true
    };

    componentDidMount() {
        fetch('http://localhost:8080/api/soccer/allLeagues')
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
            <div>
                <IndexNavbar></IndexNavbar>,
                <Breadcrumb>
                    <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/soccer" active>
                        Soccer
                    </Breadcrumb.Item>
                </Breadcrumb>,
                <Container fluid id="soccerPage">
                    <h2 className="pageTitle">Soccer Leagues</h2>
                    <br/>

                    {this.state.leagues.map(item => (
                        <ListLeagueCard key={item.idLeague} value={item.idLeague}></ListLeagueCard>

                    ))}

                </Container>,

                <IndexFooter></IndexFooter>
            </div>
        )
    }
}