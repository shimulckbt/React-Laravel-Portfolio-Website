import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import RestClient from "../RestApi/RestClient";
import AppUrl from "../RestApi/AppUrl";

class CourseDetailsPage extends Component {

    constructor({ match }) {
        super();
        this.state = {
            MyCourseID: match.params.courseID
        }
    }

    /*   ///   process of get axios request from parent component   ///

    constructor({match}) {
        super();
        this.state={
            MyCourseID:match.params.courseID,
            CourseData:[]
        }
    }
    */

    componentDidMount() {
        window.scroll(0, 0)

        /*
         RestClient.GetRequest(AppUrl.courseDetails+this.state.MyCourseID).then(result=>{
             this.setState({CourseData:result})
         })
         */
    }
    /*
    render() {
        return (
            <Fragment>
                <TopNavigation title="Course Details"/>
                <CourseDetails courseData={this.state.CourseData}/>
                <Footer/>
            </Fragment>
        );
    }
    */
    render() {
        return (
            <>
                <TopNavigation title="Course Details" />
                <CourseDetails id={this.state.MyCourseID} />
                <Footer />
            </>
        );
    }
}

export default CourseDetailsPage;