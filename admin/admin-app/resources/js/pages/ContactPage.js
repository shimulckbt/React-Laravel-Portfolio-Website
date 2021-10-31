import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

class ContactPage extends Component {
    render() {

        const data =
        [
            { "id": "5001", name: "Shimul", message: "Hello", type: "None" },
            { "id": "5002", name: "Shimul", message: "Hello", type: "Glazed" },
            { "id": "5005", name: "Shimul", message: "Hello", type: "Sugar" },
            { "id": "5007", name: "Shimul", message: "Hello", type: "Powdered"},
            { "id": "5006", name: "Shimul", message: "Hello", type: "Chocolate"},
            { "id": "5003", name: "Shimul", message: "Hello", type: "Chocolate"},
            { "id": "5004", name: "Shimul", message: "Hello", type: "Maple" }
        ];

        const columns =
            [
                {dataField: 'id', text: 'ID'},
                {dataField: 'name', text: 'Name'},
                {dataField: 'message', text: 'Message'},
                {dataField: 'type', text: 'Type'},
            ]

        return (
            <Fragment>
                <Menu>
                    <h1 className="pt-3 ps-5 ms-3">Contact Page</h1>
                    <div className="pt-3 ps-5 ms-3">
                        <BootstrapTable pagination={ paginationFactory() } keyField='id' data={ data } columns={ columns } />
                    </div>
                </Menu>
            </Fragment>
        );
    }
}

export default ContactPage;
