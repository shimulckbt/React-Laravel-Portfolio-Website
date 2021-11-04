import React, { Component, Fragment } from 'react';
import Menu from "../components/Menu";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Loading from '../components/Loading';
import WentWrong from '../components/WentWrong';

class ContactPage extends Component {

    constructor() {
        super();
        this.state = {
            dataList: [],
            isLoading: true,
            isError: false,
            rowDataID: ""
        }
    }

    componentDidMount() {
        axios.get('/contactList').then((response) => {
            if (response.status == 200) {
                this.setState({ dataList: response.data, isLoading: false, isError: false })
            }
            else {
                this.setState({ isLoading: false, isError: true })

            }

        }).catch((error) => {
            this.setState({ isLoading: false, isError: true })
        })
    }

    contactDataDelete = () => {
        axios.post('/contactDelete', { id: this.state.rowDataID }).then((response) => {
            // alert(response.data);
            this.componentDidMount();
        }).catch(() => {

        })
    }

    render() {

        if (this.state.isLoading == true) {
            return (
                <Menu>
                    <Container>
                        <Loading />
                    </Container>
                </Menu>
            )
        } else if (this.state.isError == true) {
            return (
                <Menu>
                    <Container>
                        <WentWrong />
                    </Container>
                </Menu>
            )

        } else {
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
                    { dataField: 'id', text: 'ID' },
                    { dataField: 'name', text: 'Name' },
                    { dataField: 'email', text: 'Email' },
                    { dataField: 'message', text: 'Message' },
                ]

            const selectRow = {
                mode: 'radio',
                // bgColor: (row, rowIndex) => {
                //     return '#000000';  // return a color code
                // },
                bgColor: 'green',
                onSelect: (row, isSelect, rowIndex, e) => {
                    // alert(row['id']);
                    this.setState({ rowDataID: row['id'] });
                }
            }

            return (
                <Fragment>
                    <Menu>
                        <Container>
                            <Row>
                                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <h1 className="text-center pt-5">Contact List</h1>
                                    <div className="pt-3 ps-5 ms-3">
                                        <button onClick={this.contactDataDelete} className="normal-btn mb-2 btn">Delete</button>
                                        <BootstrapTable
                                            pagination={paginationFactory()}
                                            keyField='id'
                                            data={data}
                                            selectRow={selectRow}
                                            columns={columns} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Menu>
                </Fragment >
            );
        }
    }
}

export default ContactPage;
