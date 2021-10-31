import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import firePhoto from '../../asset/image/fire.jpg'
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import {Link} from "react-router-dom";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class ClientReview extends Component {

    constructor() {
        super();
        this.state={
            myData:[],
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.clientReview).then(result=>{
            if(result==null){
                this.setState({error:true,loading:false})
            }else {
                this.setState({myData: result, loading: false})
            }
        }).catch(error=>{
            this.setState({error:true,loading:false})
        })
    }

    render() {
        var settings = {
            autoplaySpeed: 3000,
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            //initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        if (this.state.loading === true && this.state.error === false) {
            return <Loading/>
        }else if (this.state.loading===false && this.state.error === false){
            const myList = this.state.myData;
            const myView = myList.map(myList=>{
                return <div>
                    <Row className="text-center justify-content-center">
                        <Col lg={6} md={6} sm={12}>
                            <img className="circularImage" src={myList.client_img} alt="no"/>
                            <h1 className="serviceName">{myList.client_title}</h1>
                            <p className="serviceDescription">{myList.client_description}</p>
                        </Col>

                    </Row>
                </div>})

            return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">Client Says</h1>
                        <Slider {...settings}>
                            {myView}
                        </Slider>

                    </Container>
                </Fragment>
            );
        }else if (this.state.error===true){
            return <WentWrong/>
        }
    }
}

export default ClientReview;