import React from "react";
import {Image, Spinner, Table} from "react-bootstrap";

export default class LeagueTable extends React.Component {

    state = {
        idLeague: this.props.idLeague,
        table: []
    };

    componentDidMount() {

        fetch('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=' + this.state.idLeague)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    table: res.table.sort(function(a,b){
                        return parseInt(a.intRank)  - parseInt(b.intRank);
                    }),
                    loading: false

                });
            });

    }



    render() {

        const {loading} = this.state;
        if (loading) return <Spinner animation="border"/>;
        if (this.state.table.length > 0) return <div>
            <Table responsive>
                <thead>
                <tr className="eventTitleCenter">
                    <th>Position</th>
                    <th></th>
                    <th>Club</th>
                    <th>Played</th>
                    <th>Won</th>
                    <th>Drawn</th>
                    <th>Lost</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>Points</th>

                </tr>
                </thead>
                <tbody>

                {this.state.table.map(item => (

                    <tr key={item.idTeam} className="eventTitleCenter">
                        <td>{item.intRank}</td>
                        <td><Image src={item.strTeamBadge}></Image></td>
                        <td>{item.strTeam}</td>
                        <td>{item.intPlayed}</td>
                        <td>{item.intWin}</td>
                        <td>{item.intLoss}</td>
                        <td>{item.intDraw}</td>
                        <td>{item.intGoalsFor}</td>
                        <td>{item.intGoalsAgainst}</td>
                        <td>{item.intGoalDifference}</td>
                        <td>{item.intPoints}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>

        return <span>The table is not available for this league.</span>;

    }
}
