import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from 'react-html-parser';
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Analysis extends Component {

    constructor() {
        super();
        this.state= {
            data:[],
            desc:"..",
            loading:true,
            error:false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.chartData).then(result=>{
        if(result==null){
            this.setState({error:true,loading:false})
        }else {
            this.setState({data: result, loading: false})
        }
        }).catch(error=>{
            this.setState({error:true,loading:false})
        })

        RestClient.GetRequest(AppUrl.techDes).then(result=>{
            if(result==null){
                this.setState({error:true,loading:false})
            }else {
                this.setState({desc: result[0]['tech_description']})
            }
        }).catch(error=>{
            this.setState({error:true,loading:false})
        })
    }


    render() {

        if (this.state.loading === true && this.state.error === false) {
            return <Loading/>
        }else if (this.state.loading===false && this.state.error === false) {
            var blue = "rgba(0,115,230,0.8)"
            return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">Technology Used</h1>
                        <Row>
                            <Col style={{ height:'300px'}} lg={6} md={12} sm={12}>

                                <ResponsiveContainer>
                                    <BarChart width={100} height={300} data={ this.state.data}>

                                        <XAxis dataKey="technology">

                                        </XAxis>
                                        <Tooltip/>
                                        <Bar dataKey="projects" fill={blue}>

                                        </Bar>

                                    </BarChart>
                                </ResponsiveContainer>

                            </Col>

                            <Col lg={6} md={12} sm={12}>
                                <p className="des">{ ReactHtmlParser(this.state.desc) }</p>
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

export default Analysis;