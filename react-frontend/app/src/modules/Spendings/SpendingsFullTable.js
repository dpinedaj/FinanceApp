import React, { Component } from 'react'
import GetTable from "../../components/Api/GetTable";

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
            <GetTable url={url} columns={columns} initialRows={5}/>
        )
    }
}