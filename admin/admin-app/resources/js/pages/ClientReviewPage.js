import React, { Component, Fragment } from 'react';
import Menu from "../components/Menu";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Loading from '../components/Loading';
import WentWrong from '../components/WentWrong';

class ClientReviewPage extends Component {

    constructor() {
        super();
        this.state = {
            dataList: [],
            isLoading: true,
            isError: false,
            rowDataID: "",
            dataDeleteText: 'Delete'

        }
    }

    componentDidMount() {
        axios.get('/reviewList').then((response) => {
            if (response.status === 200) {
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

        let confirmDelete = confirm("Are you sure ?")
        if (confirmDelete === true) {
            this.setState({ dataDeleteText: "Deleting..." });
            axios.post('/reviewDelete', { id: this.state.rowDataID }).then((response) => {
                // alert(response.data);
                if (response.data === 1 && response.status === 200) {
                    this.setState({ dataDeleteText: "Delete Success!!" })
                    this.componentDidMount();
                    setTimeout(() => {
                        this.setState({ dataDeleteText: "Delete" })
                    }, 1500)
                } else {
                    this.setState({ dataDeleteText: "Delete Fail!!" });
                    setTimeout(() => {
                        this.setState({ dataDeleteText: "Delete" })
                    }, 1500)
                }
            }).catch(() => {
                this.setState({ dataDeleteText: "Something Went Wrong!!" });
                setTimeout(() => {
                    this.setState({ dataDeleteText: "Delete" })
                }, 1500)
            })
        } else {
            this.setState({ dataDeleteText: "Delete" })
        }
    }

    render() {

        if (this.state.isLoading === true) {
            return (
                <Menu title="Review">
                    <Container>
                        <Loading />
                    </Container>
                </Menu>
            )
        } else if (this.state.isError === true) {
            return (
                <Menu title="Review">
                    <Container>
                        <WentWrong />
                    </Container>
                </Menu>
            )

        } else {
            const data = this.state.dataList;
            const columns =
                [
                    { dataField: 'id', text: 'ID' },
                    { dataField: 'client_title', text: 'Title' },
                    { dataField: 'client_description', text: 'Description' },
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
                <>
                    <Menu title="Review">
                        <Container>
                            <Row>
                                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <h1 className="text-center pt-5">Client Review</h1>
                                    <div className="pt-3 ps-5 ms-3">
                                        <button onClick={this.contactDataDelete} className="normal-btn mb-2 btn">{this.state.dataDeleteText}</button>
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
                </>
            );
        }
    }
}

export default ClientReviewPage;
