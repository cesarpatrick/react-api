import React from "react";
import {Link} from "react-router-dom";

export default class LinkIdName extends React.Component {

    state = {
        idLeague: this.props.idLeague,
        strLeague: this.props.strLeague
    };

    render() {
        return  <Link to={`/league`} leagueName={this.state.strLeague} idLeague={this.state.idLeague}></Link>
    }
}