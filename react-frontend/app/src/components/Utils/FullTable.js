import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table";
import 'react-table/react-table.css'

export default class FullTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true
        }
    }
    async getData() {
        const res = await axios.get(this.props.url)
        console.log(res.data)
        this.setState({ loading: false, data: res.data })
    }
    componentDidMount() {
        this.getData().then(r => r)
    }
    render() {
        return (

            <ReactTable
                data={this.state.data}
                columns={this.props.columns}
            />
        )
    }
}