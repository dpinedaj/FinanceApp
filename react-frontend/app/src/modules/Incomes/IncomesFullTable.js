import React, {Component} from 'react'
import GetTable from "../../components/Api/GetTable";
import {INCOMES_API_URL} from "../../constants";

export default class IncomesFullTable extends Component {

    render() {
        const url = INCOMES_API_URL;
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
            <GetTable url={url} columns={columns} initialRows={5}/>
        )
    }
}