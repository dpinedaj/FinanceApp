import React, { Component } from 'react'
import FullTable from "../Utils/FullTable";

export default class SpendingsFullTable extends Component {

    render() {
        const url = '/spendings'
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
            <FullTable url={url} columns={columns} />
        )
    }
}