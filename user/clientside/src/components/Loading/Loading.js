import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import loading from "../../asset/image/loader.svg"

class Loading extends Component {
    render() {
        return (
            <>
                <Container className="text-center">
                    <Row>
                        <Col>
                            <img className="loaderAnimation mt-5" src={loading} />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Loading;