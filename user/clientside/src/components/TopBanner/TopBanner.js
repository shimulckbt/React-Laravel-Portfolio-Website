import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";

class TopBanner extends Component {

    constructor() {
        super();
        this.state = {
            title: "",
            subtitle: "",
            loaderClass: "text-center",
            mainDivClass: "d-none",
            error: false,
            wentWrong: "d-none"
        }
    }

    componentDidMount() {

        RestClient.GetRequest(AppUrl.homeTopTitle).then(result => {
            if (result == null) {
                this.setState({
                    loaderClass: "d-none",
                    mainDivClass: "d-none",
                    wentWrong: "text-center"
                })
            } else {
                this.setState({
                    title: result[0]['home_title'],
                    subtitle: result[0]['home_subtitle'],
                    loaderClass: "d-none",
                    mainDivClass: "text-center"
                })
            }
        }).catch(error => {
            this.setState({
                loaderClass: "d-none",
                mainDivClass: "d-none",
                wentWrong: "text-center"
            })
        })
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>

                                <Col className={this.state.wentWrong}>
                                    <WentWrong />
                                </Col>

                                <Col className={this.state.loaderClass}>
                                    <Loading />
                                </Col>

                                <Col className={this.state.mainDivClass}>
                                    <span className={this.state.loaderClass}><Loading /></span>
                                    <Fade top><h1 className="topTitle">{this.state.title}</h1></Fade>
                                    <Fade top><h2 className="topSubTitle">{this.state.subtitle}</h2></Fade>
                                    <Link to="/about"><Button variant="primary">More Info</Button></Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;