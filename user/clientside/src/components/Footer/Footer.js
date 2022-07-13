import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import WentWrong from "../WentWrong/WentWrong";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/Loading";

class Footer extends Component {

    constructor() {
        super();
        this.state = {
            address: "",
            email: "",
            phone: "",
            facebook: "",
            youtube: "",
            footer_credit: "",
            loaderClass: "text-center",
            mainDivClass: "d-none",
            error: false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.footerAll).then(result => {

            if (result == null) {
                this.setState({ error: true, loading: false })
            } else {
                this.setState({
                    address: result[0]['address'],
                    email: result[0]['email'],
                    phone: result[0]['phone'],
                    facebook: result[0]['facebook'],
                    youtube: result[0]['youtube'],
                    footer_credit: result[0]['footer_credit'],
                    loaderClass: "d-none",
                    mainDivClass: "p-2 justifyText"
                })
            }
        }).catch(error => {
            this.setState({ error: true, loading: false })
        })
    }

    render() {
        if (this.state.error === false) {
            return (
                <>
                    <Container fluid={true} className="p-4 text-center footerSection">
                        <Container>
                            <Row>
                                <Col lg={3} md={6} sm={12} className="p-2 justifyText">
                                    <h1 className="serviceName">Follow Me</h1>
                                    <a className="socialLink" target="_blank" href={"//" + this.state.facebook}><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br />
                                    <a className="socialLink" target="_blank" href={"//" + this.state.facebook}><FontAwesomeIcon icon={faYoutube} /> YoTube</a>

                                </Col>

                                <Col lg={3} md={6} sm={12} className={this.state.loaderClass}>
                                    <h1 className="serviceName">Address</h1>
                                    <Loading />
                                </Col>

                                <Col lg={3} md={6} sm={12} className={this.state.mainDivClass}>
                                    <h1 className="serviceName">Address</h1>
                                    <p className="serviceDescription" >{this.state.address}</p>
                                    <p className="serviceDescription" ><FontAwesomeIcon icon={faEnvelope} /> {this.state.email}</p>
                                    <p className="serviceDescription" ><FontAwesomeIcon icon={faPhone} /> {this.state.phone}</p>
                                </Col>

                                <Col lg={3} md={6} sm={12} className="p-2 justifyText">
                                    <h1 className="serviceName">Information</h1>
                                    <Link className="footerLink" to="/about">About Me</Link><br />
                                    <Link className="footerLink" to="#">My Resume</Link><br />
                                    <Link className="footerLink" to="/contact">Contact Me</Link>
                                </Col>

                                <Col lg={3} md={6} sm={12} className="p-2 justifyText">
                                    <h1 className="serviceName">Legal</h1>
                                    <Link className="footerLink" to="/refund">Refund Policy</Link><br />
                                    <Link className="footerLink" to="/terms">Terms And Condition</Link><br />
                                    <Link className="footerLink" to="/privacy">Privacy Policy</Link>
                                </Col>
                            </Row>
                        </Container>
                    </Container>

                    <Container fluid={true} className="text-center copyrightSection">
                        <Link className="copyrightLink" to="">ShimulChakraborty.com &copy; 2021-2022</Link>
                    </Container>
                </>
            );
        } else if (this.state.error === true) {
            return <WentWrong />
        }
    }
}

export default Footer;