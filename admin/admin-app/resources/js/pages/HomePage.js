import React, { Component, Fragment } from 'react';
import Menu from "../components/Menu";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import Loading from '../components/Loading';
import WentWrong from '../components/WentWrong';

class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            dataList: [],
            isLoading: true,
            isError: false,

        }
    }

    componentDidMount() {
        axios.get('/countsummary').then((response) => {
            if (response.status === 200) {
                this.setState({ dataList: response.data, isLoading: false, isError: false })
            }
            else {
                this.setState({ isLoading: false, isError: true })

            }

        }).catch((error) => {
            this.setState({ isLoading: false, isError: true })
        })
    }

    render() {

        if (this.state.isLoading === true) {
            return (
                <Menu title="Home">
                    <Container>
                        <Loading />
                    </Container>
                </Menu>
            )
        } else if (this.state.isError === true) {
            return (
                <Menu title="Home">
                    <Container>
                        <WentWrong />
                    </Container>
                </Menu>
            )

        } else {
            const data = this.state.dataList;
            return (
                <Fragment>
                    <Menu title="Home">
                        <Container>
                            <h1 className="text-center pt-5">Dashboard</h1>
                            <Row>
                                <Col className="p-2" lg={3} md={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                            <h5 className="title-text">{data['contact']}</h5>
                                            <h5 className="des-text">Contact Request</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="p-2" lg={3} md={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                            <h5 className="title-text">{data['course']}</h5>
                                            <h5 className="des-text">Total Courses</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="p-2" lg={3} md={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                            <h5 className="title-text">{data['project']}</h5>
                                            <h5 className="des-text">Total Projects</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="p-2" lg={3} md={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                            <h5 className="title-text">{data['review']}</h5>
                                            <h5 className="des-text">Total Reviews</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="p-2" lg={3} md={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                            <h5 className="title-text">{data['service']}</h5>
                                            <h5 className="des-text">Total Services</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Menu>
                </Fragment>
            );
        }
    }
}

export default HomePage;
