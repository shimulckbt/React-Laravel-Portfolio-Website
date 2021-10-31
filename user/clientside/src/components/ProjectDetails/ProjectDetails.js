import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class ProjectDetails extends Component {

    constructor(props) {
        super();

        this.state={
            MyProjectID:props.id,
            short_description:"",
            project_features:"",
            live_preview:"",
            img_two:"",
            project_name:"",
            loading:true,
            error:false
        }
    }

    componentDidMount() {

        RestClient.GetRequest(AppUrl.projectDetails+this.state.MyProjectID).then(result=>{
            if(result==null){
                this.setState({error:true,loading:false})
            }else {
                this.setState({
                    project_features: result[0]['project_features'],
                    short_description: result[0]['short_description'],
                    live_preview: result[0]['live_preview'], img_two: result[0]['img_two'],
                    project_name: result[0]['project_name'],
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
                    <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={6} sm={12}>

                                <img className="w-100 mt-5" src={this.state.img_two}/>

                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h2 className="serviceName">{this.state.project_name}</h2>
                                <p className="serviceDescription">{this.state.short_description}</p>
                                {ReactHtmlParser(this.state.project_features)}
                                <Button target="_blank" href={"//"+this.state.live_preview} variant="primary">More Info</Button>
                            </Col>


                        </Row>
                    </Container>

                </Fragment>
            );
        }else if (this.state.error===true){
            return <WentWrong/>
        }
    }
}

export default ProjectDetails;