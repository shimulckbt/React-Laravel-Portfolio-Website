import React, {Component, Fragment} from 'react';
import shimulPhoto from '../../asset/image/shimul.jpg'
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Courses extends Component {

    constructor() {
        super();
        this.state={
            myData:[],
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.courseHome).then(result=>{
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

        if (this.state.loading === true && this.state.error === false) {
            return <Loading/>
        }else if (this.state.loading===false && this.state.error === false){
            const myList = this.state.myData;
            const myView = myList.map(myList=>{
                return <Col lg={6} md={12} sm={12}>
                    <Row className="p-2">
                        <Col lg={6} md={6} sm={12}>
                            <img className="courseImage" src={myList.small_img}/>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h5 className="justifyText courseTitle">{myList.short_title}</h5>
                            <p className="justifyText courseDes">{myList.short_description}</p>
                            <Link className="float-start courseDetails" to={"/CourseDetails/"+myList.id}>Details</Link>
                        </Col>
                    </Row>
                </Col>
            })

            return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">Our Courses</h1>
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );
        }else if (this.state.error===true){
            return <WentWrong/>
        }
    }
}

export default Courses;