import React from "react";
import {Image} from "react-bootstrap";

export default class TeamJersey extends React.Component {

    state = {
        idTeam: this.props.idTeam,
        equipment: []
    };

    componentDidMount() {

        fetch('https://www.thesportsdb.com/api/v1/json/1/lookupequipment.php?id=' + this.state.idTeam)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    equipment: res.equipment,
                    loading: false
                });
            });
    }

    render() {
        if (this.state.equipment != null) {
            this.state.equipment = this.state.equipment.slice(0, 3);

            return this.state.equipment.map(item => (
                <Image key={item.idEquipment} style={{width: '20rem'}} src={item.strEquipment}></Image>
            ))
        }

        return <span>Jerseys a not available for this club.</span>;
    }
}