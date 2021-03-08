import React from "react";
import {Breadcrumb, Container} from "react-bootstrap";
import IndexNavbar from "./Navbars/IndexNavbar";
import IndexFooter from "./Footers/IndexFooter";
import ListLeagueCard from "./Soccer/League/ListLeagueCard";

export default class Baseball extends React.Component {

    state = {
        leagues: [],
        loading: true
    };

    componentDidMount() {
        fetch('http://localhost:8080/api/league/Baseball')
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
               <Form>
               <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
               </Form.Group>

               <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
               </Form.Group>

               <Form.Group controlId="formBasicPassword">
                   <Form.Label>Password</Form.Label>
                   <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                    </Form.Group>
               </Form>

                 <Form.Group controlId="formBasicEmail">
                   <Form.Label>Email</Form.Label>
                   <Form.Control type="email" placeholder="Enter email" />
                   <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                   </Form.Text>

                   <Button variant="primary" type="submit">Submit</Button>
                 </Form.Group>


                ,
                <IndexFooter></IndexFooter>
            </div>
        )
    }
}