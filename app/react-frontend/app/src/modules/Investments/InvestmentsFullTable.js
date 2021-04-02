import React, { Component } from 'react'
import GetTable from "../../components/Api/GetTable";

export default class InvestmentsFullTable extends Component {

    render() {
        const url = '/investments'
        const columns = [{
            Header: 'Id',
            accessor: 'id',
        }
            , {
                Header: 'Investment Type',
                accessor: 'investment_type',
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
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Open Date',
                accessor: 'open_date',
            },
            {
                Header: 'Next Payment',
                accessor: 'next_payment',
            },
            {
                Header: 'Close Date',
                accessor: 'close_date',
            }
        ]
        return (
            <GetTable url={url} columns={columns} initialRows={5}/>
        )
    }
}