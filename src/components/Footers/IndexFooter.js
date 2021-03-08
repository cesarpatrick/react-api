import React from "react";
import {Badge, Col,Row} from "react-bootstrap";
import {Container} from "reactstrap";

export default class IndexFooter extends React.Component {


    render() {
        return (

            <div className="d-flex flex-column">
                <br/> <br/>
                <footer id="footer_app" className="footer">
                    <Container>
                        <Row>
                            <Col xs={3} md={2}>
                                <Badge variant="secondary">Sportswiki</Badge>
                            </Col>
                            <Col xs={3} md={2}>
                            </Col>
                            <Col xs={3} md={2}>
                            </Col>
                            <Col xs={3} md={2}>
                            </Col>
                            <Col xs={3} md={2}>
                            </Col>
                            <Col xs={3} md={2}>
                                <Badge variant="secondary">Developed by Cesar Gouveia</Badge>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>

        );
    }
}



