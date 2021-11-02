import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";

class ContactPage extends Component {

    constructor() {
        super();
        this.state = {
            dataList: [],
        }
    }

    componentDidMount() {
        axios.get('/contactList').then((response)=>{
            this.setState({dataList:response.data})
        }).catch((error)=>{

        })
    }

    render() {

        const data = this.state.dataList;
            //////   Dummy Data  /////
        // [
        //     { "id": "5001", name: "Shimul", message: "Hello", type: "None" },
        //     { "id": "5002", name: "Shimul", message: "Hello", type: "Glazed" },
        //     { "id": "5005", name: "Shimul", message: "Hello", type: "Sugar" },
        //     { "id": "5007", name: "Shimul", message: "Hello", type: "Powdered"},
        //     { "id": "5006", name: "Shimul", message: "Hello", type: "Chocolate"},
        //     { "id": "5003", name: "Shimul", message: "Hello", type: "Chocolate"},
        //     { "id": "5004", name: "Shimul", message: "Hello", type: "Maple" }
        // ];

        const columns =
            [
                {dataField: 'id', text: 'ID'},
                {dataField: 'name', text: 'Name'},
                {dataField: 'email', text: 'Email'},
                {dataField: 'message', text: 'Message'},
            ]

        return (
            <Fragment>
                <Menu>
                    <Container>
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <h1 className="text-center pt-5">Contact List</h1>
                                <div className="pt-3 ps-5 ms-3">
                                    <BootstrapTable pagination={ paginationFactory() } keyField='id' data={ data } columns={ columns } />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Menu>
            </Fragment>
        );
    }
}

export default ContactPage;
