import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Portfolio extends Component {

    constructor() {
        super();
        this.state = {
            myData: [],
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.projectAll).then(result => {
            if (result == null) {
                this.setState({ error: true, loading: false })
            } else {
                this.setState({ myData: result, loading: false })
            }
        }).catch(error => {
            this.setState({ error: true, loading: false })
        })
    }

    render() {

        if (this.state.loading === true && this.state.error === false) {
            return <Loading />
        } else if (this.state.loading === false && this.state.error === false) {
            const myList = this.state.myData;
            const myView = myList.map(myList => {
                return <Col lg={4} md={6} sm={12} className="p-2">
                    <Card className="projectCard">
                        <Card.Img variant="top" src={myList.img_one} />
                        <Card.Body>
                            <Card.Title className="projectCardTitle">{myList.project_name}</Card.Title>
                            <Card.Text className="projectCardDescription">{myList.short_description}
                            </Card.Text>
                            <Button variant="primary"><Link className="link-style"
                                to={"/ProjectDetails/" + myList.id + "/" + myList.project_name}>Details</Link></Button>
                        </Card.Body>
                    </Card>
                </Col>
            })

            return (
                <>
                    <Container className="text-center mt-5">
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </>
            );
        } else if (this.state.error === true) {
            return <WentWrong />
        }
    }
}

export default Portfolio;