import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table";
import 'react-table/react-table.css'

export default class SpendingsFullTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spendings: [],
            loading: true
        }
    }
    async getSpendingsData() {
        const res = await axios.get('/spendings')
        console.log(res.data)
        this.setState({ loading: false, spendings: res.data })
    }
    componentDidMount() {
        this.getSpendingsData()
    }
    render() {
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

            <ReactTable
                data={this.state.spendings}
                columns={columns}
            />
        )
    }
}