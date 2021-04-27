import React from "react";
import {Breadcrumb, Container} from "react-bootstrap";
import IndexNavbar from "./Navbars/IndexNavbar";
import IndexFooter from "./Footers/IndexFooter";
import ListLeagueCard from "./Soccer/League/ListLeagueCard";
import {BsFillHeartFill, GiGolfFlag} from "react-icons/all";

export default class Favourites extends React.Component {

    state = {
        leagues: [],
        loading: true,
        isFavourite: undefined
    };

    componentDidMount() {
        fetch('http://localhost:8080/api/user/favourites')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    leagues: res.leagues,
                    loading: false
                });

            });

        const queryParams = new URLSearchParams(window.location.search);
        const isFavourite = queryParams.get('isFavourite');

        if (isFavourite) {
            this.state.isFavourite = isFavourite;
        } else {
            this.state.isFavourite = this.props.location.favouriteProps.isFavourite;
        }
    }

    render() {
        return (
            <div className="layoutPage">
                <IndexNavbar></IndexNavbar>,
                <Breadcrumb>
                    <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/Favourites" active>
                        Favourites
                    </Breadcrumb.Item>
                </Breadcrumb>,
                <Container fluid>
                    <h2 className="pageTitle"><BsFillHeartFill></BsFillHeartFill> Favourites</h2>
                    <br/>

                    {this.state.leagues.map(item => (
                        <ListLeagueCard isFavourite={this.state.isFavourite}  key={item.idLeague} value={item.idLeague} nameSport={item.strSport}/>
                    ))}

                </Container>,

                <IndexFooter></IndexFooter>
            </div>
        )
    }
}
