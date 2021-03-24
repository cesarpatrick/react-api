import React from "react";
import {Carousel, Col, Container, Image} from "react-bootstrap";
import IndexNavbar from "./Navbars/IndexNavbar";
import IndexFooter from "./Footers/IndexFooter";

export default class HomePage extends React.Component {

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
                                    src="https://specials-images.forbesimg.com/imageserve/5ed00ae6b8da090007a77b74/x.jpg"/>
                            </Carousel.Item>
                            <Carousel.Item slide="false">
                                <Image
                                    src="https://thumbor.forbes.com/thumbor/1920x1080/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60105eea27a5e0ffbf1a07e8%2F0x0.jpg%3Ffit%3Dscale"/>

                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    src="https://thumbor.forbes.com/thumbor/2863x1611/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6022b43d9520bde9a34ed716%2F0x0.jpg%3Ffit%3Dscale"/>

                            </Carousel.Item>
                        </Carousel>

                    </Container>
                </Col>

                <IndexFooter></IndexFooter>
            </div>
        );
    }
}
