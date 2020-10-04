import React, {Component} from 'react'
import Table from "../Utils/Table";

export default class IncomesFullTable extends Component {

    render() {
        const url = '/incomes'
        const columns = [{
            Header: 'Id',
            accessor: 'id',
        }
            , {
                Header: 'Income Type',
                accessor: 'income_type',
            },
            {
                Header: 'Amount',
                accessor: 'amount',
            },
            {
                Header: 'Description',
                accessor: 'description',
            },
            {
                Header: 'Date',
                accessor: 'date',
            }
        ]
        return (
            <Table url={url} columns={columns} initialRows={15}/>
        )
    }
}