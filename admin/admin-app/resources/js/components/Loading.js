import React, { Component, Fragment } from 'react';
import loadingImg from '../../images/loading.svg';
import { Col, Container, Row } from "react-bootstrap";
class Loading extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row className="d-flex mt-5 mb-5 justify-content-center">
                        <Col className="text-center mt-5 mb-5" lg={3} md={3} sm={12}>
                            <img className="loading-logo" src={loadingImg} />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Loading;