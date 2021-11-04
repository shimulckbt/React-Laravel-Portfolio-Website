import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import graphicsLogo from '../../asset/image/graphics.svg'
import mobileLogo from '../../asset/image/mobile.svg'
import webLogo from '../../asset/image/web.svg'
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';

class Services extends Component {

    constructor() {
        super();
        this.state = {
            myData: [],
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.service).then(result => {
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
                return <Col lg={4} md={6} sm={12}>
                    <div className="serviceCard text-center">
                        <img src={myList.service_logo} alt="" />
                        <h2 className="serviceName">{myList.service_name}</h2>
                        <p className="serviceDescription">{myList.service_description}</p>
                    </div>

                </Col>
            })

            return (
                <Fragment>
                    <Container className="text-center">
                        <Rotate><h1 className="serviceMainTitle">My Services</h1></Rotate>
                        <Bounce><Row>
                            {myView}
                        </Row></Bounce>
                    </Container>
                </Fragment>
            );
        } else if (this.state.error === true) {
            return <WentWrong />
        }
    }
}

export default Services;