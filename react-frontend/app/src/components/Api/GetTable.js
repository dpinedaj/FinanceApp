import React, {Component} from 'react'
import IApi from "./IApi";
import ReactTable from "react-table";
import 'react-table/react-table.css'

export default class GetTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true
        }
    }

    async getData() {
        await IApi("get", this.props.url)
            .then((response) => {
                console.log("Status Code: " + response.status);
                this.setState({
                    data: response.data, loading: false
                });
            })
    }

    componentDidMount() {
        this.getData().then(r => r)
    }

    async handleDelete(row) {
        let url = this.props.url + "/" + row.id
        await IApi("delete", url).then(response => {
            alert("Deleted the row with id: " + row.id + "\nStatus code: " + response.status)
        })
    }

    render() {
        const columns =
            [
                ...this.props.columns,
                {
                    Header: '',
                    Cell: row => (
                        <div>
                            <button onClick={() => this.handleDelete(row.row)}>Delete</button>
                        </div>
                    )
                }
            ]

        return (

            <ReactTable
                data={this.state.data}
                defaultPageSize={this.props.initialRows}
                columns={columns}
            />
        )
    }
}