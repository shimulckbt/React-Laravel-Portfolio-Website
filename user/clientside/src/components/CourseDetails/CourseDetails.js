import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Player, BigPlayButton} from "video-react";
import ReactHtmlParser from "react-html-parser";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class CourseDetails extends Component {

    constructor(props) {
        super(props);
        this.state={
            MyCourseID:props.id,
            LongTitle:"",
            TotalLectures:"",
            TotalStudents:"",
            ShortDescription:"",
            LongDescription:"",
            VideoUrl:"",
            MOreInfoURL:"",
            SkillAll:"",
            loading:true,
            error:false
        }
    }

    /*  ////   process of get axios request from parent component CourseDetails.js  ////
    constructor(props) {
        super(props);
    }*/

    componentDidMount() {
        RestClient.GetRequest(AppUrl.courseDetails+this.state.MyCourseID).then(result=>{
            if(result==null){
                this.setState({error:true,loading:false})
            }else {
                this.setState({
                    LongTitle: result[0]['long_title'],
                    TotalLectures: result[0]['total_lectures'],
                    TotalStudents: result[0]['total_students'],
                    ShortDescription: result[0]['short_description'],
                    LongDescription: result[0]['long_description'],
                    VideoUrl: result[0]['video_url'],
                    MOreInfoURL: result[0]['course_link'],
                    SkillAll: result[0]['skill_all'],
                    loading: false
                })
            }
        }).catch(error=>{
            this.setState({error:true,loading:false})
        })
    }

    render() {

        if (this.state.loading === true && this.state.error === false) {
            return <Loading/>
        }else if (this.state.loading===false && this.state.error === false){
            return (
                <Fragment>
                    <Container fluid={true} className="topFixedPage p-0">
                        <div className="topPageOverlay">
                            <Container className="topPageContentCourse">
                                <Row>
                                    <Col lg={6} sm={12} md={6}>
                                        <h3 className="courseFullTitle">{this.state.LongTitle}</h3>
                                        <h5 className="courseFullSubTitle">Total Lectures={this.state.TotalLectures}</h5>
                                        <h5 className="courseFullSubTitle">Total Students={this.state.TotalStudents}</h5>
                                    </Col>

                                    <Col lg={6} sm={12} md={6}>
                                        <p className="courseDescription serviceDescription">{this.state.LongDescription}</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>

                    <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <h1 className="serviceName">Still You Get</h1>
                                {ReactHtmlParser(this.state.SkillAll)}
                                <Button target="_blank" href={"//"+this.state.MOreInfoURL} variant="primary">More Info</Button>
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <Player>
                                    <source src={this.state.VideoUrl} />
                                    <BigPlayButton position="center" />
                                </Player>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }else if (this.state.error===true){
            return <WentWrong/>
        }
        /*

        /////   process of get axios request from parent component CourseDetails.js  /////

        let LongTitle="";
        let TotalLectures="";
        let TotalStudents="";
        let ShortDescription="";
        let LongDescription="";
        let VideoUrl="";
        let MOreInfoURL="";
        let SkillAll="";

        let CourseDetailsArray = this.props.courseData;
        if(CourseDetailsArray.length==1){
            LongTitle=CourseDetailsArray[0]['long_title'];
            TotalLectures=CourseDetailsArray[0]['total_lectures'];
            TotalStudents=CourseDetailsArray[0]['total_students'];
            ShortDescription=CourseDetailsArray[0]['short_description'];
            LongDescription=CourseDetailsArray[0]['long_description'];
            VideoUrl=CourseDetailsArray[0]['video_url'];
            MOreInfoURL=CourseDetailsArray[0]['course_link'];
            SkillAll=CourseDetailsArray[0]['skill_all'];
        }
        note: then return er moddhe jekhane this.state.state property deoa sekhane just variable name hobe
        */

    }
}

export default CourseDetails;