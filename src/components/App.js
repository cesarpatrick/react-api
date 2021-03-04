import React from "react";
import IndexNavbar from "./Navbars/IndexNavbar";
import IndexFooter from "./Footers/IndexFooter";
import {Carousel, Col, Container, Image} from "react-bootstrap";

export default class App extends React.Component {

    render() {
        return (

            <div>

                <IndexNavbar></IndexNavbar>

                <br/>
                <Col xs={18} md={12} align="justify">
                    <Container>
                        <Carousel slide={false}>
                            <Carousel.Item>
                                <Image
                                    src="https://webunwto.s3.eu-west-1.amazonaws.com/2020-01/sport-congresse.jpg"/>

                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item slide="false">
                                <Image
                                    src="https://webunwto.s3.eu-west-1.amazonaws.com/2020-01/sport-congresse.jpg"/>

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    src="https://webunwto.s3.eu-west-1.amazonaws.com/2020-01/sport-congresse.jpg"/>

                                <Carousel.Caption>
                                    <h3>Serena the champion !</h3>
                                    <p>Serena Willians won another gran slan.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    </Container>
                </Col>

                <IndexFooter></IndexFooter>
            </div>
        );
    }
}
