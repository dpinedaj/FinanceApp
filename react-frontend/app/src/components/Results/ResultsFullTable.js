import React, { Component } from 'react'
import Table from "../Utils/Table";

export default class ResultsFullTable extends Component {

    render() {
        const url = '/results'
        const columns = [{
            Header: 'Id',
            accessor: 'id',
        }
            , {
            Header: 'Spend Type',
            accessor: 'spend_type',
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