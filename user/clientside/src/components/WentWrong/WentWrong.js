import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Warning from "../../asset/image/warning.svg";

class WentWrong extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col>
                            <img className="loaderAnimation mt-5" src={Warning}/>
                            <h4 className="serviceName">Connection Failed !! PLease, Try Again!!!</h4>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default WentWrong;