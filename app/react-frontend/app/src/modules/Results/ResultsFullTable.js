import React, {Component} from 'react'
import GetTable from "../../components/Api/GetTable";
import {RESULTS_API_URL} from "../../constants";

export default class ResultsFullTable extends Component {

    render() {
        const url = RESULTS_API_URL
        const columns = [
            {
                Header: 'Date',
                accessor: 'date',
            },
            {
                Header: 'Account Balance',
                accessor: 'account_balance',
            },
            {
                Header: 'Investments',
                accessor: 'investments',
            },
            {
                Header: 'Incomes',
                accessor: 'incomes',
            },
            {
                Header: 'Spendings',
                accessor: 'spendings',
            },
            {
                Header: 'Outcomes',
                accessor: 'outcomes',
            },
            {
                Header: 'Adjustment',
                accessor: 'adjustment',
            },
            {
                Header: 'Balance',
                accessor: 'balance',
            },
            {
                Header: 'Saving',
                accessor: 'saving',
            },
            {
                Header: 'Total',
                accessor: 'total',
            }

        ]
        return (
            <GetTable url={url} columns={columns} initialRows={5}/>
        )
    }
}